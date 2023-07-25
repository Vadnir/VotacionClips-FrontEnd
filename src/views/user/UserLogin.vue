<script setup>
import router from '../../router/index.js'
import {getTokenApi} from '../../api/api.js'
</script>

<template>
    <div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input v-model="username" id="username" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input v-model="password" id="password" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <button class="button" v-on:click="getToken(username, password)">
            <h1>Boton</h1>
        </button>
    </div>
</template>

<script>
export default {    
    methods: {
        async getToken(username, password) {
            const response = await getTokenApi(username, password);
            console.log(response)
            if (response.status == 200){
                router.push({ name: 'user-home', params: { user: username } });
            }
        },
    }
}
</script>
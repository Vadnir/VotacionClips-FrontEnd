<script setup>
import ClipBase from '../../components/Clip/ClipBase.vue'
import { getClipsApi } from '../../api/api.js'
</script>

<template>
    <div>
        <input v-model="text">
        <button @click="getPosts(text)" class="button">
            Buscar
        </button>
    </div>
    <div class="box">
        <ul>
            <ClipBase v-for="bot in clips"
            :id="bot.id"
            :url="bot.url"    
            :key="bot.id"/>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            clips: []
        }
    },
    methods: {
        async getClips(params = "") {
            this.clips = []
            params = params.split(" ")
            let a = ""
            if (params != ""){
                for (var i in params){
                    a += params[i] + ";"
                }
            }

            const response = await getClipsApi(a);
            for (var x in response.data){
                this.bots.push(response.data[x])
            }
            return response.data;
        },    
    },
    created(){
        this.clips = getClipsApi().then(response => {
            this.clips = response.data
        })
    }
}

</script>
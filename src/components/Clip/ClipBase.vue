<script setup>    
    import { deleteClipVote, createClipVote, domain } from '../../api/api.js'
    const props = defineProps(['id' ,'url']);    
</script>

<template>
    <div class="card box">
        <div class="card-image">            
            <iframe v-bind:src="props.url + '&parent=' + domain" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </div>
        <button v-on:click="clipVote(props.id)" class="button">
            Votar
        </button>
        <h1 v-if="this.error == 1">Error b</h1>
        <button v-on:click="clipUnvote(props.id)" class="button">
            No Votar
        </button>
        <h1 v-if="this.error == 2">Error b</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                error: null      
            }
        },
        methods: {
            async clipVote(id){
                const rs = await createClipVote(id)
                if (rs.status != 201){
                    this.error == 1
                }
            },
            async clipUnvote(id){
                const rs = await deleteClipVote(id)
                if (rs.status != 201){
                    this.error == 2
                }
            }
        }
    }
</script>

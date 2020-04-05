<template>
    <div class="box field">
        <form>
            <div class="control">
                <label class="titles">Title</label>
                <input v-model="post.title" class="input" type="text" placeholder="">
            </div>
            <div class="control">
                <label class="titles">Subtitle</label>
                <input v-model="post.subtitle" class="input" type="text" placeholder="">
            </div>
            <div class="control">
                <label class="titles">Content</label>
                <textarea v-model="post.content" class="textarea" placeholder=""></textarea>
            </div>
            <button 
            @click.prevent="updatePost"
            class="button is-primary is-small is-outlined pt">Update</button>
        </form>
    </div>
    
</template>

<script>
export default {
    props: ['postData'],
    data() {
        return {
            post: {...this.postData}
        }
    },
    watch: {
        postData(data) {
            this.post = {...data}
        }
    },
    methods: {
        updatePost() {
            this.$store.dispatch('post/updatePost', {...this.post})
        },
        deletePost() {
            this.$store.dispatch('post/deletePost', {...this.post})
        }
    }
}
</script>

<style scoped>
.pt {
    margin-top:20px;
}
</style>
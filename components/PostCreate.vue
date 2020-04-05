<template>
    <modal @modalSubmitted="createPost">
        <h2>Blog Title </h2>
        <input 
            v-model="form.title"
            class="input" 
            type="text" 
            placeholder="Insert blog title here">
        <h2>Blog Subtitle</h2>
        <input 
            v-model="form.subtitle"
            class="input" 
            type="text" 
            placeholder="Insert subtitle here">
        <h2>Blog Content</h2>
        <textarea 
            v-model="form.content"
            class="textarea" 
            placeholder="Your contents goes here..." 
            rows="8">
        </textarea>
    </modal>
</template>

<script>
import Modal from '~/components/shared/Modal'

export default {
    components: {
        Modal
    },
    data() {
        return {
            form: {
                title: '',
                subtitle: '',
                content: ''
            }
        }
    },
    methods: {
        createPost(closeModal) {
            //dispatch action with our form data
            this.$store.dispatch('post/createPost', {...this.form})
            closeModal()
            this.resetForm()
        },
        resetForm() {
            this.form.title = '',
            this.form.subtitle = '',
            this.form.content = ''
        }
    }
}
</script>
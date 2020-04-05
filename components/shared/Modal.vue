<template>
    <div>
        <article class="panel is-primary">
            <div class="panel-block">
                <button @click="modalIsActive" class="button is-primary is-fullwidth">Create Post</button>
            </div>
        </article>
        <div class="modal" :class="{'is-active': isActive}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal Title</p>
                    <button @click="modalIsActive" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <button @click="emitModalSubmit" class="button is-success">Save Changes</button>
                    <button @click="modalIsActive" class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        modalIsActive(){
            this.isActive =! this.isActive
        },
        emitModalSubmit() {
            //emit 'save' event
            this.$emit('modalSubmitted', this.closeModal)
        },
        closeModal() {
            this.isActive = false
        }
    }
}
</script>

<style scoped>
    h2 {
        font-weight: 600;
        padding: 5px;
    }
</style>>

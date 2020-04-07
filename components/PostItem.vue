<template>

<div class="box">
    <div class="columns">
        <div class="post column is-8">
            <nuxt-link :to="`/posts/${id}`" class="post-header post-header-link clickable">
                <h2> <strong>{{title}}</strong> </h2>
                <h3>{{subtitle}}</h3>
            </nuxt-link>
            <div class="post-content">
            by <strong> Farhan Mohamed,  </strong> {{date | formatDate}}
            </div>
        </div>
        <div class="column">
            <label class="checkbox">
                <input 
                    @change="togglePost"
                    type="checkbox" 
                    :checked="isArchived">
                read
            </label>
        </div>
    </div>
</div>
  
</template>

<script>
import moment from 'moment'

export default {
    props: {
        id: {
            type:String,
            required:true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        date: {
            type:Number,
            required: false,
            default: new Date()
        },
        isRead: {
            type: Boolean,
            refuired: false
        }
    },
    computed: {
        archivedPosts() {
            return this.$store.state.post.archivedItems
        },
        isArchived() {
            return this.archivedPosts.includes(this.id)
        }
    },
    methods: {
        togglePost() {
            this.$store.dispatch('post/togglePost', this.id)
        }
    } 
}
</script>

<style scoped lang="scss">
  
  .post {
    padding: 15px;
    border-bottom: 2px solid transparent;
    
    &-content {
        font-style: italic;
    }

    &:hover {
        border-bottom: 2px solid #e8e8e8;
    }

  }
  
</style>
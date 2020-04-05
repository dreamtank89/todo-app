<template>

<div class="box">
    <div class="columns">
        <div class="post column is-8">
            <a class="post-header post-header-link clickable">
            <h2> <strong>{{title}}</strong> </h2>
            <h3>{{subtitle}}</h3>
            </a>
            <div class="post-content">
            by <strong> Farhan Mohamed,  </strong> {{date | formatDate}}
            </div>
        </div>
        <div class="column">
            <label class="checkbox">
                <input type="checkbox" :checked="isRead">
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
    methods: {
        // test(message) {
        //     console.log(message)
        //     return message
        // }
        
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
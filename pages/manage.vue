<template>
    <div>

        <navbar/>

        <div class="level">
            <div class="container">
                <div class="columns is-marginless">
                    <!-- <aside class="column is-0 aside hero">
                        <div>
                            <div class="compose has-text-centered">
                                <modal/>
                            </div>
                            <div class="main">
                            </div>
                        </div>
                    </aside> -->

                    <div class="column is-3">
                        <postCreate />
                    </div>
                    <div v-if="posts && posts.length > 0" class="column">
                        
                            <div v-for="post in posts"
                            :key="post._id" 
                            @click="activatePost(post)"
                            :class="{'is-active': activePost && post._id === activePost._id}"
                            class="box">
                                <h1 class="title">{{post.title}}</h1>
                                <p>{{post.subtitle}}</p>
                                <p>by <strong>Farhan Mohamed</strong></p>
                            </div>
                        
                    </div>
                    <div class="column" v-else >
                        <p class="title">There Is no Post</p>
                    </div>

                    <div v-if="activePost" class="column backgroundstyle">
                        <postManage 
                        :postData="activePost"
                        />
                        <button 
                        @click="deletePost"
                        class="button is-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div> 
</template>

<script>
import Navbar from '~/components/Navbar'
import PostCreate from '~/components/PostCreate'
import PostManage from '~/components/PostManage'
import { mapState } from 'vuex'

export default {
    components: {
        Navbar,
        PostCreate,
        PostManage
    },
    data(){
        return {
            activePost: null
        }
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.items
        })
    },
    fetch({store}) {
        if (store.getters['post/hasEmptyItems']) {
            return store.dispatch('post/fetchPosts')
        }
    },
    created() {
        this.setInitialActivePost()
    },
    methods: {
        activatePost(post) {
            this.activePost = post
        },
        setInitialActivePost() {
            if(this.posts && this.posts.length > 0) {
                this.activePost = this.posts[0]
            } else {
                this.activePost = null
            }
        },
        deletePost() {
           if (this.activePost) {
               this.$store.dispatch('post/deletePost', this.activePost._id)
                .then(() => {
                    this.setInitialActivePost()
                })
           }
        }
    }
    // data() {
    //     return {
    //         title: 'Ini adalah Semua Post',
    //         posts: this.$store.state.posts
    //         }
  
}
</script>

<style scoped lang="scss">

.box:hover {
    background-color: #dddbdb;
}
.a:focus {
    background-color: #dddbdb;
}

.backgroundstyle {
    background-color: #f5f5f5;
}

.title {
    padding-top: 5px;
}
.container {
    margin-top: 15px;
}
.titles {
    padding-bottom:10px;
    font-weight:700;
}

.box.is-active {
    background-color: #f5f5f5;
}




</style>
import  INITIAL_DATA  from './initial_data.json'
import Vue from 'vue'

export function fetchPostsAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(INITIAL_DATA.posts)

        },0)
    })
}

export const state = () => {
    return {
        items:[]    
    }
}
//getters are like computed properties for VUex
export const getters = { 
    hasEmptyItems(state) {
        return state.items.length === 0
    }
}

export const actions = {
    fetchPosts({commit}) {
        return this.$axios.$get('/api/posts')
            .then((posts) => {
                commit('setPosts', posts)
            })
    },
    createPost({commit, state}, postData) {
        //create post on a server or persist data in some way
        postData._id = Math.random().toString(36).substr(2,7)
        postData.createdAt = (new Date()).getTime()

        return this.$axios.$post('/api/posts', postData)
            .then((res) => {
                commit('addPost', postData)
                return postData
            })
        
    },
    updatePost({commit, state}, postData) {
        const index = state.items.findIndex((post) => {
            return post._id === postData._id
        })
        if(index !== -1) { 
            return this.$axios.$patch(`/api/posts/${postData._id}`, postData)
                .then ((res) => {
                    console.log(res)
                    commit('replacePost', {post: postData, index})
                    return postData
                })
            
        }
    },
    deletePost({commit, state}, postId) {
        const index = state.items.findIndex((post) => {
            return post._id === postId
        })
        if(index !== -1) {
            return this.$axios.$delete(`/api/posts/${postId}`)
                .then ((res) => {
                    commit('deletePost', index)
                    return postId
                })
        }
    }
}

export const mutations = {
    setPosts(state, posts) {
        state.items = posts
    },
    addPost(state, post) {
        state.items.push(post)
    },
    replacePost(state, {post, index}) {
        Vue.set(state.items, index, post)
    },
    deletePost(state, postIndex) {
        state.items.splice(postIndex, 1)
    }
}
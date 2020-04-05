<template>
<div>
  <!-- Navbar -->
  <div class="container">
    <Navbar/>
  </div>
  <!-- body -->
  <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="level-item">
              <div class="column is-8">
                
                  <div class="title">
                    <h1>{{title}}</h1>
                    <hr>
                  </div>
                    <post-item 
                    v-for="post in posts"
                    :key="post._id"
                    :title="post.title" 
                    :subtitle="post.subtitle"
                    :date="post.createdAt"
                    :isRead="post.isRead"
                    />
                
              </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'
import { fetchPostsAPI } from '~/store/post'

export default {
  components: {
    Navbar,
    PostItem
  },
  data() {
    return {
      title: 'Ini adalah Semua Post',
    }
  },
  fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  // async asyncData() {
  //   const posts = await fetchPostsAPI()
  //   return { posts }
  // }
  // mounted() {
  //   debugger
  //   const a = this.$store.dispatch('post/fetchPosts')
  //     .then((posts) => {
  //       debugger
  //       console.log(posts)
  //     })
  // },
  computed: {
    posts() {
      return this.$store.state.post.items
    }
  }
}

</script>
<style scoped>
</style>
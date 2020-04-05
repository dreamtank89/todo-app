<template>
    <nav class="navbar has-shadow">
        <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="../">
            <img src="/logos.jpg"/>
            </a>
            <div 
                @click="toggleIsActive"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        <div 
            @click="toggleIsActive"
            id="navMenu" 
            :class="{'is-active': isActive}"
            class="navbar-menu">
            <div class="navbar-end">
            <div 
                :class="{'is-active': isActive}"
                class="navbar-item has-dropdown">
                <a class="navbar-link">
                Menu
                </a>
                <div class="navbar-dropdown">
                    <nuxt-link class="navbar-item" to="/">
                    Home
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="/manage">
                    Manage
                    </nuxt-link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </nav> 
</template>

<script>
export default{
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleIsActive(){
            this.isActive = !this.isActive
        }
    }
}
</script>
    
<template>
    <nav role="navigation" :class="isMenu === true ? 'nav nav-active' : 'nav'">
        <ul class="nav-header">
            <li @click="closeMenu()">
                <router-link to="/" class="home-link">burton.me</router-link>
            </li>
            <li @click="closeMenu()">
                <a id="close-nav"><i class="ico ico-remove"></i></a>
            </li>
        </ul>
        <ul class="nav-menu">
            <li @click="closeMenu()">
                <router-link to="/note">
                    <i class="ico ico-note"></i>
                    <p>Notes</p>
                </router-link>
            </li>

            <li @click="closeMenu()">
                <router-link to="/photo">
                    <i class="ico ico-photo"></i>
                    <p>Photos</p>
                </router-link>
            </li>

            <li @click="closeMenu()">
                <router-link to="/project">
                    <i class="ico ico-project"></i>
                    <p>Projects</p>
                </router-link>
            </li>

            <li @click="closeMenu()">
                <router-link to="/profile">
                    <i class="ico ico-profile"></i>
                    <p>Profile</p>
                </router-link>
            </li>
        </ul>
    </nav>
    <button :class="isMounted ? 'nav-tigger nav-tigger__action' : 'nav-tigger'" @click="showMenu()">
        <i class="ico ico-menu"></i>
    </button>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isMenu: false,
            isMounted: false,
        };
    },
    methods: {
        showMenu() {
            console.log('a');
            this.isMenu = true;
        },
        closeMenu() {
            console.log('b');
            this.isMenu = false;
        },
    },
    mounted() {
        this.isMounted = true;
    },
};
</script>

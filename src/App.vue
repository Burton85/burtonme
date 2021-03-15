<template>
    <nav-bar></nav-bar>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<script>
import NavBar from './components/Navigation.vue';

export default {
    name: 'App',
    components: {
        NavBar,
    },
    data() {
        return {
            count: 0,
        };
    },
    methods: {},
    mounted() {
        document.documentElement.scrollTop = 0;
        this.$com.FontCtl(document, window);
    },
};
</script>

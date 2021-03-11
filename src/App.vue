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
};
</script>

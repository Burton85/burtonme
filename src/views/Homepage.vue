<template>
    <h1 :class="isMounted ? 'page-title page-title__action' : 'page-title'">Burton Hou</h1>
    <banner></banner>
    <contact></contact>
    <home-sec></home-sec>
    <home-sec></home-sec>
    <home-sec></home-sec>
    <home-sec></home-sec>
</template>

<script>
import Banner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import HomeSec from '../components/HomeSec.vue';

export default {
    name: 'Homepage',
    components: {
        Banner,
        Contact,
        HomeSec,
    },
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        this.isMounted = true;
    },
};
</script>

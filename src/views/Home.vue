<template>
    <banner></banner>
    <contact></contact>
    <home-sec v-for="(item, index) in secList" :homeSecList="item" :key="index"></home-sec>
    <div class="hr"></div>
    <footer class="home-footer"><span>Burton Hou</span> | <span>Copy Right©2021</span></footer>
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
            secList: [
                {
                    name: 'My Profiles',
                    icon: 'profile',
                    contentRef: '',
                },
                {
                    name: 'Recently Projects',
                    icon: 'website',
                    contentRef: '',
                },
                {
                    name: 'Learning Notes',
                    icon: 'pencil',
                    contentRef: '',
                },
                {
                    name: 'Photos Albums',
                    icon: 'camera',
                    contentRef: '',
                },
            ],
        };
    },
};
</script>

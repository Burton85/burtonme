<template>
    <Banner></Banner>
    <Contact></Contact>
    <home-sec v-for="(item, index) in secList" :homeSecList="item" :key="index"></home-sec>
    <div class="hr"></div>
    <Footer></Footer>
</template>

<script>
import Banner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import HomeSec from '../components/HomeSec.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Homepage',
    components: {
        Banner,
        Contact,
        HomeSec,
        Footer,
    },
    data() {
        return {
            secList: [
                {
                    name: 'My Profiles',
                    icon: 'profile',
                },
                {
                    name: 'Recently Projects',
                    icon: 'project',
                },
                {
                    name: 'Learning Notes',
                    icon: 'note',
                },
                {
                    name: 'Photos Albums',
                    icon: 'photo',
                },
            ],
        };
    },
};
</script>

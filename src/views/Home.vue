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
                    contentRef: 'My Profiles',
                },
                {
                    name: 'Recently Projects',
                    icon: 'project',
                    contentRef: 'https://trello.com/card/6039ba08a42519571404ac57/works.json',
                },
                {
                    name: 'Learning Notes',
                    icon: 'note',
                    contentRef: 'https://trello.com/card/604c450e91d264252a292a53/learning-note.json',
                },
                {
                    name: 'Photos Albums',
                    icon: 'photo',
                    contentRef: 'https://trello.com/card/604cdbf30e33fd4ce668d982/photos.json',
                },
            ],
        };
    },
};
</script>

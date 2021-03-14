<template>
    <section :class="isMounted ? 'home-section home-section__action' : 'home-section'">
        <h2 class="home-title">
            <i :class="'ico ico-' + homeSecList.icon"></i>
            {{ homeSecList.name }}
        </h2>
        <ul v-if="homeSecList.name === 'Recently Projects'" class="home-list">
            <HomeItem v-for="(item, index) in getProjectList" :homeItemList="item" :key="index"></HomeItem>
        </ul>
        <ul v-if="homeSecList.name === 'Learning Notes'" class="home-list">
            <HomeItem v-for="(item, index) in getNoteList" :homeItemList="item" :key="index"></HomeItem>
        </ul>
        <ul v-if="homeSecList.name === 'Photos Albums'" class="home-list">
            <HomeItem v-for="(item, index) in getPhotoList" :homeItemList="item" :key="index"></HomeItem>
        </ul>
    </section>
</template>
<script>
import HomeItem from '../components/HomeItem.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'HomeSec',
    props: {
        homeSecList: {
            type: Object,
            default: {
                name: 'None',
                icon: 'website',
                contentRef: '',
            },
        },
    },
    components: {
        HomeItem,
    },
    computed: {
        ...mapGetters(['getProjectList', 'getNoteList', 'getPhotoList']),
    },
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        this.isMounted = true;
    },
    created() {
        switch (this.homeSecList.name) {
            case 'Recently Projects':
                this.$store.dispatch('getTrelloJson', {
                    name: 'project',
                    url: 'https://trello.com/card/6039ba08a42519571404ac57/works.json',
                });
                break;
            case 'Learning Notes':
                this.$store.dispatch('getTrelloJson', {
                    name: 'note',
                    url: 'https://trello.com/card/604c450e91d264252a292a53/learning-note.json',
                });
                break;
            case 'Photos Albums':
                this.$store.dispatch('getTrelloJson', {
                    name: 'photo',
                    url: 'https://trello.com/card/604cdbf30e33fd4ce668d982/photos.json',
                });
                break;
            default:
                break;
        }
    },
};
</script>

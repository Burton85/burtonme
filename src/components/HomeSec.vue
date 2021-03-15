<template>
    <section :class="isMounted ? 'home-section home-section__action' : 'home-section'">
        <h2 class="home-title">
            <i :class="'ico ico-' + homeSecList.icon"></i>
            {{ homeSecList.name }}
            <i :class="isExpand ? 'ico ico-expand ico-expand__expand' : 'ico ico-expand'" @click="expandList()"></i>
        </h2>
        <ul class="home-list" v-if="isExpand">
            <HomeItem
                v-for="(item, index) in contentList"
                :homeItemList="item"
                :index="index + ''"
                :key="index"
                :type="homeSecList.icon"
            ></HomeItem>
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
        contentList() {
            switch (this.homeSecList.name) {
                case 'Recently Projects':
                    return this.getProjectList;
                    break;
                case 'Learning Notes':
                    return this.getNoteList;
                    break;
                case 'Photos Albums':
                    return this.getPhotoList;
                    break;
                default:
                    return [{ name: 'This is my profile' }];
                    break;
            }
        },
    },
    data() {
        return {
            isMounted: false,
            isExpand: true,
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
                    url: this.homeSecList.contentRef,
                });
                break;
            case 'Learning Notes':
                this.$store.dispatch('getTrelloJson', {
                    name: 'note',
                    url: this.homeSecList.contentRef,
                });
                break;
            case 'Photos Albums':
                this.$store.dispatch('getTrelloJson', {
                    name: 'photo',
                    url: this.homeSecList.contentRef,
                });
                break;
            default:
                break;
        }
    },
    methods: {
        expandList() {
            this.isExpand = !this.isExpand;
        },
    },
};
</script>

<template>
    <section class="sub-page">
        <h2 class="home-title">
            <i :class="'ico ico-' + $route.path.slice(1)"></i>
            {{ $route.path.slice(1).toUpperCase() }}
        </h2>
        <ul class="home-list">
            <HomeItem
                v-for="(item, index) in contentList"
                :type="$route.path.slice(1)"
                :homeItemList="item"
                :key="index"
                :index="index"
            ></HomeItem>
        </ul>
    </section>
</template>

<script>
import HomeItem from '../components/HomeItem.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'SubPage',
    components: {
        HomeItem,
    },
    computed: {
        contentList() {
            let data;
            let type = this.$route.path.slice(1);
            switch (type) {
                case 'project':
                    data = this.getProjectList;
                    break;
                case 'note':
                    data = this.getNoteList;
                    break;
                case 'photo':
                    data = this.getPhotoList;
                    break;
                default:
                    data = this.getProfileList;
                    break;
            }
            if (data && data[0].checkItems[0].name == 'nodata') {
                this.$store.dispatch('getTrelloJson', {
                    name: type,
                });
                return data;
            } else {
                return data;
            }
        },
        ...mapGetters(['getProjectList', 'getNoteList', 'getPhotoList', 'getProfileList']),
    },
};
</script>

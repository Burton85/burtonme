<template>
    <section>
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
        ...mapGetters(['getProjectList', 'getNoteList', 'getPhotoList']),
        contentList() {
            switch (this.$route.path) {
                case '/project':
                    return this.getProjectList;
                    break;
                case '/note':
                    return this.getNoteList;
                    break;
                case '/photo':
                    return this.getPhotoList;
                    break;
                default:
                    return [{ name: 'This is my profile' }];
                    break;
            }
        },
    },
};
</script>

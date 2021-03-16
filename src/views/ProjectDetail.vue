<template>
    <div class="sub-page project">
        <h2 class="home-title">
            <i :class="'ico ico-note'"></i>
            {{ itemList[id].name }}
        </h2>
        <a class="project-link" :href="itemList[id].checkItems[1].name" target="_blank">
            <img class="project-img" :src="itemList[id].checkItems[0].name" :alt="itemList[id].name" />
        </a>
        <a class="project-link" :href="itemList[id].checkItems[1].name" target="_blank">{{
            itemList[id].checkItems[1].name
        }}</a>
        <p class="project-text" v-html="itemList[id].checkItems[2].name"></p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProjectList']),
        itemList() {
            return this.getProjectList;
        },
        id() {
            return this.$route.query.id;
        },
    },
    filters: {},
};
</script>

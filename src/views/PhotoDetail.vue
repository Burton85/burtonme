<template>
    <div class="sub-page photo">
        <h2 class="home-title">
            <i :class="'ico ico-photo'"></i>
            {{ itemList[id].name }}
        </h2>
        <ul>
            <li v-for="(item, index) in itemList[id].checkItems" :key="index">
                <img :src="item.name" :alt="item.name" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getPhotoList']),
        itemList() {
            return this.getPhotoList;
        },
        id() {
            return this.$route.query.id;
        },
    },
};
</script>

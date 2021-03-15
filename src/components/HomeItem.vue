<template>
    <li class="home-item" @click="goNext()">
        <h3 class="home-item-title">{{ homeItemList.name }}</h3>
        <!-- <h4 class="home-item-subtitle">{{ homeItemList.checkItems ? homeItemList.checkItems[0].name : '' }}</h4> -->
        <img
            v-if="homeItemList.checkItems && homeItemList.checkItems[0].name.includes('https')"
            :src="homeItemList.checkItems[0].name"
            alt=""
        />
        <!-- <router-link :to="'/notedetail?id=' + index">{{ index }}</router-link> -->
    </li>
</template>
<script>
export default {
    props: {
        homeItemList: {
            type: Object,
            default: { name: 'nodata', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
        },
        index: {
            type: String,
            default: '0',
        },
        type: {
            type: String,
            default: 'note',
        },
    },
    methods: {
        goNext() {
            this.$router.push({ path: '/' + this.type + 'detail', query: { id: this.index } });
        },
    },
};
</script>

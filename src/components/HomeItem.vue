<template>
    <li class="home-item">
        <h3 class="home-item-title">{{ homeItemList.name }}</h3>
        <!-- <h4 class="home-item-subtitle">{{ homeItemList.checkItems ? homeItemList.checkItems[0].name : '' }}</h4> -->
        <img :src="homeItemList.checkItems ? homeItemList.checkItems[0].name : ''" alt="" />
    </li>
</template>
<script>
export default {
    props: {
        homeItemList: {
            type: Object,
            default: { name: 'nodata', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
        },
    },
};
</script>

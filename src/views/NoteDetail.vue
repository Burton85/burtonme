<template>
    <div class="sub-page note">
        <h2 class="home-title">
            <i :class="'ico ico-note'"></i>
            {{ itemList[id].name }}
        </h2>
        <ul>
            <li v-for="(item, index) in itemList[id].checkItems" :key="index">
                <p :class="/^[0-9]/.test(item.name) ? 'noteUl' : 'noteOl'">{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getNoteList']),
        itemList() {
            return this.getNoteList;
        },
        id() {
            return this.$route.query.id;
        },
    },
    filters: {},
};
</script>

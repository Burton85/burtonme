<template>
    <section :class="isMounted ? 'banner banner__action' : 'banner'">
        <h1 :class="isMounted ? 'page-title page-title__action' : 'page-title'">Burton Hou</h1>
        <img src="../assets/graph/gh_black.png" alt="gh_black" class="gh gh_black" />
        <img src="../assets/graph/gh_main.png" alt="gh_main" class="gh gh_main" />
        <img src="../assets/graph/gh_left.png" alt="gh_left" class="gh gh_left" />
        <img src="../assets/graph/gh_right.png" alt="gh_right" class="gh gh_right" />
    </section>
    <div :class="isMounted ? 'hr hr__action' : 'hr'"></div>
</template>
<script>
export default {
    name: 'Banner',
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        this.isMounted = true;
    },
};
</script>

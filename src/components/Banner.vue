<template>
    <section :class="isMounted ? 'banner banner__action' : 'banner'">
        <h1 :class="isMounted ? 'page-title page-title__action' : 'page-title'">Burton Hou</h1>
        <img id="gh_black" alt="gh_black" class="gh gh_black" />
        <img id="gh_main" alt="gh_main" class="gh gh_main" />
        <img id="gh_left" alt="gh_left" class="gh gh_left" />
        <img id="gh_right" alt="gh_right" class="gh gh_right" />
    </section>
    <div :class="isMounted ? 'hr hr__action' : 'hr'"></div>
</template>

<script>
import gh_black from '../assets/graph/gh_black.png';
import gh_main from '../assets/graph/gh_main.png';
import gh_left from '../assets/graph/gh_left.png';
import gh_right from '../assets/graph/gh_right.png';

export default {
    name: 'Banner',
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        document.getElementById('gh_black').src = gh_black;
        document.getElementById('gh_main').src = gh_main;
        document.getElementById('gh_left').src = gh_left;
        document.getElementById('gh_right').src = gh_right;
        this.isMounted = true;
    },
};
</script>

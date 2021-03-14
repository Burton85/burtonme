<template>
    <section :class="isMounted ? 'contact contact__action' : 'contact'">
        <button class="btn">
            <i class="ico ico-instagram"></i>
            <a href="https://www.instagram.com/streetsshoter/?hl=zh-tw" target="_blank">instagram</a>
        </button>
        <button class="btn">
            <i class="ico ico-facebook"></i>
            <a href="https://www.facebook.com/profile.php?id=100007820299073" target="_blank">facebook</a>
        </button>
        <button class="btn">
            <i class="ico ico-telegram"></i> <a href="https://t.me/burton15" target="_blank">telegram</a>
        </button>
        <button class="btn">
            <i class="ico ico-gmail"></i> <a href="mailto:burton00tw@gmail.com" target="_blank">gmail</a>
        </button>
        <button class="btn">
            <i class="ico ico-github"></i> <a href="https://github.com/Burton85" target="_blank">github</a>
        </button>
    </section>
</template>
<script>
export default {
    name: 'Contact',
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

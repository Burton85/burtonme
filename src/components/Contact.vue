<template>
    <section :class="isMounted ? 'contact contact__action' : 'contact'">
        <button class="btn"><i class="ico ico-instagram"></i> instagram</button>
        <button class="btn"><i class="ico ico-facebook"></i> facebook</button>
        <button class="btn"><i class="ico ico-telegram"></i> telegram</button>
        <button class="btn"><i class="ico ico-gmail"></i> gmail</button>
        <button class="btn"><i class="ico ico-github"></i> github</button>
        <!-- <button class="btn"><i class="ico ico-phone"></i> phone</button> -->
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

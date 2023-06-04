<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<style scoped>
body {
    background-color: rgb(49, 49, 49) !important;
}
</style>

<script lang="ts">
export default {
    watch: {
        "$store.state.list": {
            handler() {
              this.$router.push('/')
            },
            immediate: true,
        },
    },
};
</script>

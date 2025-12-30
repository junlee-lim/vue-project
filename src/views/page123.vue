<script setup>
import { reactive } from 'vue';

const state = reactive({
    player:'kim',
    name: 'lim'
})
</script>

<template>
<h3>page123</h3>
<div>
    <div>{{ state.player }}</div>
    <!--단방향 데이터 바인딩-->
    <div><input type="text" :value="state.player"></div>

    <div>{{ state.name }}</div>
    <!--양방향 데이터 바인딩-->
    <div><input type="text" v-model="state.name"></div>
</div>
</template>

<style scoped>

</style>
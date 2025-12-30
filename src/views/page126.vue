<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const state = reactive({
    imgList: []
})

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
            .then(res => state.imgList = res.data)
})

</script>

<template>
<h3>page126</h3>
<img v-for="item in state.imgList" :key="idx" :src="item.download_url">

</template>

<style scoped>

</style>
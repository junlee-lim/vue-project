<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
            .then(res => console.log(res.data))
})

const state = reactive({
    imgList: []
})
</script>

<template>
<h3>page126</h3>
</template>

<style scoped>

</style>
<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
    axios.get('/airbnb.json')
    .then(res => console.log(res.data));
});
</script>

<template>

</template>

<style scoped>

</style>
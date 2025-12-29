<script setup>
let loading = true;

const fruits = ['apple', 'banana', 'pear'];
</script>

<template>
    <h3>page 103</h3>
    <div v-if="loading">loading...</div>
    <div v-else>complete!</div>
    <hr>
    <div v-show="loading">loading...</div>
    <div v-show="!loading">complete!</div>
    <hr>
    <!--v-for 사용할 때 항상 key 속성 주기-->
    <div v-for="(item, idx) in fruits" :key="idx">{{idx+1}}. {{ item }}</div>
</template>

<style scoped>

</style>
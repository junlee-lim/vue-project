<script setup>
import { useCounterStore } from '@/stores/counter';
import Tire from './Tire.vue';
const page = 'history';
const counterStore = useCounterStore();
</script>

<template>
    <div class="front-wheel">
        <span :id="page">Front Wheel</span>
        <Tire color="RED" />
        <div>Times: {{ counterStore.count }}</div>
    </div>
</template>

<style scoped>
#history{text-decoration: underline;}
.front-wheel{
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}
</style>
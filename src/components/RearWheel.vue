<script setup>
import { useCounterStore } from '@/stores/counter';
import { computed } from 'vue';
import Tire from './Tire.vue';
const page = 'history';
const counterStore = useCounterStore();
// 각도를 계산하는 computed 속성
const rotationDegree = computed(() => `${counterStore.count * 45}deg`);
</script>

<template>
    <div class="rear-wheel">
        <span class="rotating-text">Rear Wheel</span>
        <Tire class="rotating-text" color="YELLOW" />
        <div>Times: {{ counterStore.count }}</div>
        <button @click="counterStore.increment">+rotation</button>
        <button @click="counterStore.decrease">-rotation</button>
    </div>
</template>

<style scoped>
.rear-wheel{
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}
.rotating-text {
    display: inline-block;
    /* CSS 내부에서 변수 사용 */
    transform: rotate(v-bind(rotationDegree));
    transition: transform 0.2s;
}
</style>
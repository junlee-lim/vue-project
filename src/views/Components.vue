<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
const message = 'There';
const message2 = {
  name: 'Kim',
  age: 20
}
</script>

<template>
  <div>Hello {{ message2.name }}</div>
  <hr>
  <div>Hello {{ message }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message"></span>
  </div>
  <front-wheel></front-wheel>
  <rear-wheel />
</template>
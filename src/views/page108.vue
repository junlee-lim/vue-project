<script setup>
const pop = message => alert(message);
const test = () => alert('test');
</script>

<template>
<h3>page 108</h3>
<button v-on:click="pop('Hello')">Hello</button>
<button @click="pop('Hello2')">Hello2</button>
<button @click="test">test</button><!--연결된 함수가 파라미터가 없다면 함수 이름만 적어도 됨-->
<button @click="pop">event</button><!--연결된 함수가 파라미터가 있는데 아규먼트를 보내지 않으면 이벤트 객체가 넘어감-->
</template>

<style scoped>

</style>
<script setup>
import { reactive } from 'vue';

const state = reactive({
    form: {
        id:'',
        pw:''
    }
});
const login = () => alert(`${state.form.id}님 환영`)
</script>

<template>
<h3>page125</h3>
<form @submit.prevent="login">
    <input type="text" placeholder="id" v-model="state.form.id">
    <input type="password" placeholder="pw" v-model="state.form.pw">
    <button>login</button>
</form>
</template>

<style scoped>

</style>
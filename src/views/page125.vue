<script setup>
import { reactive } from 'vue';

const state = reactive({
    form: {
        id:'',
        pw:''
    }
});
const login = () => {
    if(state.form.id && state.form.pw){
        alert(`${state.form.id}님 환영`)
        return;
    }
    alert(`아이디, 패스워드를 작성해 주세요.`)

    // if(state.form.id === 0 || !state.form.pw){
    //     alert(`아이디, 패스워드를 작성해 주세요.`)
    //     return;
    // }
    // alert(`${state.form.id}님 환영`)
}
</script>

<template>
<h3>page125</h3>
<!--prevent: 원래 submit에서 하는 작업을 막음-->
<form @submit.prevent="login">
    <input type="text" placeholder="id" v-model="state.form.id">
    <input type="password" placeholder="pw" v-model="state.form.pw">
    <button>login</button>
</form>
</template>

<style scoped>

</style>
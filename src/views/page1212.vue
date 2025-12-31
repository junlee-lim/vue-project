<script setup>
//반응형 상태: 자신의 값이 변하면 화면을 다시 그리는 변수 또는 속성

import {ref} from 'vue';
let pushUp = 0; //변수일 뿐, 반응형 상태는 아님
let sitUp = 0;

const refPushUp = ref(0); //초기값 0을 갖고 있는 반응형 상태 객체 주소값이 넘어감
const refSitUp = ref(0); 

const increasePushUp = () => {
    console.log(`pushUp: ${++pushUp}, refPushUp: ${++refPushUp.value}`)
} //re반응형 상태 객체 값을 변경할 땐 value 속성값을 변경하면 됨

const increaseSitUp = () => {
    console.log(`sitUp: ${++sitUp}, refSitUp: ${++refSitUp.value}`);
} 
</script>

<template>
<h3>page110</h3>
<h3>체력 검사</h3>
<br>
<hr>
<ul>
    <li>팔 굽혀 펴기: {{ pushUp }}, {{ refPushUp }}</li>
    <li>윗몸 일으키기: {{ sitUp }}, {{ refSitUp }}</li>
    <!--원래 pushUp, sitUp 부분은 안 올라가야 하는데 올라가는 이유는 반응형 변수인 refPushUp이나 refSitUp이 업데이트되면서 화면 전체가 다시 그려졌기(Re-render) 때문 =>
        본인이 반응형이라서가 아니라, ref 변수들이 화면을 새로고침할 때 묻어가는(Side-effect) 현상. => 실제 보여지는 화면에서는 ref나 reactive를 사용하기.-->
</ul>
<hr>
<br>
<button @click="increasePushUp">팔 증가</button>
<button @click="increaseSitUp">윗몸 증가</button>
</template>

<style scoped>

</style>
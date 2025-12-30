<script setup>
import { computed, reactive } from 'vue';
const state = reactive({
    mvpId: 7,
    players: [
        { id: 7, name: "Doe" },
        { id: 9, name: "Lee" },
        { id: 12, name: "Park" }
    ]
});
const getMvpName = () => {
    // if (state.mvpId) { 
    //     const player = state.players.find(item => item.id === state.mvpId);
    //     if (player) {
    //         return player.name;
    //     }
    // }
    // return '없음2';
    console.log('call getMvpName');
    // return state.mvpId ? state.players.find(m=>m.id === state.mvpId)?.name || 'x' : '없음';
    return state.players.find(m => m.id === state.mvpId)?.name || '없음';
}
const computedMvpName = computed(() => {
    console.log('call computedMvpName');
    return state.players.find(m => m.id === state.mvpId)?.name || '없음';
});
const increaseMvpId = () => state.mvpId++;
const resetMvpId = () => state.mvpId = 0;
 </script>
 <template>
 <div>
    <h1>오늘의 MVP</h1>
    <div>
        <template v-if="state.mvpId">
            {{  state.players.find(m=> m.id === state.mvpId)?.name || '없음' }}
        </template>
        <template v-else>없음1</template>
        <hr>
        <!-- 함수는 호출할 때마다 함수 안의 코드 실행 -->
        <div>{{ getMvpName() }}</div>
        <div>{{ getMvpName() }}</div>
        <hr>
        <!-- 컴퓨티드는 보낸 콜백함수가 딱 한번만 실행되고 결과가 return -->
        <div>{{ computedMvpName }}</div>
        <div>{{ computedMvpName }}</div>
    </div>
    <br>
    <div>{{ state.mvpId }}</div>
    <button @click="increaseMvpId">증가</button>
    <button @click="resetMvpId">리셋</button>
</div>
 </template>
 <style scoped>
 </style>

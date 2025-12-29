<script setup>
const routerList = ["component", 'page98', 'page103', 'page108', 'page110',
                    'm_1'];
</script>

<template>
  <div>
    <nav>
      <!-- <router-link to="/component">컴포넌트</router-link>
      <router-link to="/page98">page98</router-link>
      <router-link to="/page103">page103</router-link>
      <router-link to="/page108">page108</router-link>
      <router-link to="/page110">page110</router-link>
      <router-link to="/m_1">Mission01</router-link> -->
      <router-link v-for="item in routerList" :to="`/${item}`">{{ item }}</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
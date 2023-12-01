<template>
  <div>
    <h1>首页</h1>
    <router-link to="/tsHome/childrenV01">子页面01</router-link> |
    <router-link to="/tsHome/childrenV02">子页面02</router-link>
    <div>
      <router-view></router-view> <!--嵌套子页面的标签-->
    </div>
  </div>
</template>
<script setup>
</script>
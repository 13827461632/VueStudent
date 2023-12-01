

<script >
import { ref, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// 响应式状态
const count = ref(0)

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    increment() {
      count.value++
      alert(count.value)
    }
  }
}



</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
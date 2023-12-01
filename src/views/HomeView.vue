<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">//添加图片
    <HelloWorld msg="Welcome to Your Vue.js App"/>//引用HelloWorld 页面 -->
  </div>
  <div>
    <el-container class="layout-container-demo" style="height: 500px">
      <el-aside width="200px" >
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']" background-color="rgb(48,65,86)" text-color="#fff"
                   style="overflow-x: hidden" active-text-color="#ffd04b"
                   :collapse-transition="false"
                   :collapse="isCollapse"
          >
            <!-- background-color 括号中前三个值是代表颜色rgb，第四个值是代表透明度。text-color="#fff" 字体颜色-- active-text-color="#ffd04b" 选择高亮黄色-->
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                <el-menu-item index="3-4-2">Option 4-2</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">

          <div class="toolbar">
            <el-dropdown>
              <div style="flex:1;font-size: 18px">
                <span :class="collapseBtnClass"  @click="collapse"><el-icon><Expand /></el-icon></span>
              </div>
              <!--              <el-icon style="margin-right: 8px; margin-top: 1px"><setting/></el-icon>-->
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>添加</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>

        <el-main>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue' //引入图标  { Menu as IconMenu, Message, Setting } 暂时不知道什么作用
import { ElMessageBox } from 'element-plus' // 引入主件 ElMessageBox 名字是固定的

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    const item = {//定义数据
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),//返回数据到 tableData 中显示   <el-table :data="tableData"> 标记
      collapseBtnClass:'Expand',
      isCollapse:false
    }
  },
  methods:{
    collapse(){
      // alert(111);//弹框
      ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>',//弹框显示组件
          'HTML String',//弹框头信息描述
          {
            dangerouslyUseHTMLString: true,
          }
      )
    }
  }
}
console.log(import.meta.env)
</script>

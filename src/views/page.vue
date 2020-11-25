<template>
  <div>
    <top />
    <div class="box">
      <div class="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          text-color="#fff"
          background-color="#545c64"
          active-text-color="#f99"
          :unique-opened= "aa"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物资计划</span>
            </template>
            <el-menu-item-group>
              <router-link to="/page/plan1-1"
                ><el-menu-item index="1-1">选项1</el-menu-item></router-link
              >

              <router-link to="/page/plan1-2"
                ><el-menu-item index="1-2">选项2</el-menu-item></router-link
              >
              <router-link to="/page/plan1-3"
                ><el-menu-item index="1-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料入库</span>
            </template>
            <el-menu-item-group>
              <router-link to=""
                ><el-menu-item index="2-1">选项1</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="2-2">选项2</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="2-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据分析</span>
            </template>
            <el-menu-item-group>
              <router-link to=""
                ><el-menu-item index="3-1">选项1</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="3-2">选项2</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="3-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料调拨</span>
            </template>
            <el-menu-item-group>
              <router-link to=""
                ><el-menu-item index="4-1">选项1</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="4-2">选项2</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="4-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料盘点</span>
            </template>
            <el-menu-item-group>
              <router-link to=""
                ><el-menu-item index="5-1">选项1</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="5-2">选项2</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="5-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料配置</span>
            </template>
            <el-menu-item-group>
              <router-link to=""
                ><el-menu-item index="6-1">选项1</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="6-2">选项2</el-menu-item></router-link
              >
              <router-link to=""
                ><el-menu-item index="6-3">选项3</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/top";
export default {
  components: {
    top,
  },
  data(){
      return {
          aa: true
      }
  }
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
  .left {
    width: 400px;
    height: calc(100vh - 60px);
    background-color: #545c64;
  }
  .right {
    flex: 1;
    height: calc(100vh - 60px);
  }
}
.el-submenu {
  line-height: 50px;
}
</style>
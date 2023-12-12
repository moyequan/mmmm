import Vue from 'vue';
import Router from 'vue-router';
// 导入你的 Register 组件
import Register from '@/views/Register.vue'; // 请根据你的项目结构正确导入

export default new Router({
  routes: [
    {
      path: '/register', // 这是你想要的注册页面的路由路径
      name: 'Register', // 路由名称
      component: Register // 使用你的 Register 组件
    },
    // 其他路由配置
  ]
});

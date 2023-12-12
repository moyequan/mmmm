<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<template>
  <el-container id="app-container" class="background-container">
    <el-header class="logo">
      <img src="../src/img/logo.png" alt="Logo">
    </el-header>
    <el-main class="main-content">
      <div>
        <el-form :model="loginForm" ref="loginForm" label-position="top">
          <div>账号登录</div>
          <el-form-item class="form-item">
            <el-input v-model="loginForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
            <template #prefix>
              <i class="el-icon-user"></i>
            </template>
          </el-form-item>
          <el-form-item class="form-item">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
            <template #prefix>
              <i class="el-icon-lock"></i>
            </template>
          </el-form-item>
          <!-- 将登录按钮放在密码框正下方 -->
          <div class="button-group">
            <el-form-item class="register-button">
              <el-button type="primary" @click="onRegister">注册</el-button>
            </el-form-item>
            <el-form-item class="login-button">
              <el-button type="primary" @click="onLogin">登录</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
  onRegister() {
    console.log('点击了注册按钮');
    this.$router.push({ name: 'Register' }); // 确保名称与路由配置中的一致
  },
    onLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('登录成功!');
          this.$router.push({ name: '#' }); 
        } else {
          console.log('登录信息填写错误!');
        }
      });
    }
  }
};
</script>

<style scoped>
#app-container {
  overflow: hidden;
}

.main-content {
  text-align: center;
  margin-top: 10px;
}
div{
  text-align: center;
  margin-bottom: 10px;
}
.logo {
  background-repeat: no-repeat;
  float: left;
  object-fit: contain;
  height: auto;
  margin-right: 20px;
}

.background-container {
  background-image: url('../src/img/loginbg.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 将背景图片放置在最底层 */
}

.el-form {
  width: 350px;
  height: 250px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: auto;
  margin-top: 9%;
  background-position: center;
  background-color: rgba(173, 216, 230, 0.7); 
}

.custom-button-group {
  display: flex; 
  justify-content: space-between; 
}
/* 注册按钮样式 */
.register-button {
  text-align: center; 
  margin-bottom: 5px; 
  float: left; 
  width: 50%; 
}

.login-button {
  text-align: center; 
  margin-bottom: 5px; 
  float: right; 
  width: 50%; 
}
.form-item {
  margin-left: 30px;
  margin-right: 30px;
}
</style>

<template>
    <div class="register-page">
      <el-card class="register-card" shadow="hover">
        <h3 class="register-title">用户注册</h3>
        <el-form :model="registerForm" ref="registerForm" :rules="rules" label-width="80px">
          <el-form-item label="学号">
            <el-input v-model="registerForm.studentId"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="registerForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
          </el-form-item>
          <!-- 其他个人信息字段 -->
          <el-form-item>
            <el-button type="primary" @click="onRegister">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registerForm: {
          studentId: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
          // 其他个人信息字段
        },
        rules: {
          studentId: [
            { required: true, message: '请输入学号', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { pattern: /^\d{11}$/, message: '请输入有效的11位电话号码', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: this.validatePasswordConfirm, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      validatePasswordConfirm(rule, value, callback) {
        if (value !== this.registerForm.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      },
      onRegister() {
        this.$refs.registerForm.validate(valid => {
          if (valid) {
            // 执行注册操作，将数据提交到后端
            // 注册成功后跳转到登录页面或其他操作
            this.$router.push('/login'); 
          } else {
            this.$message.error('填写有误，请检查并修正错误。');
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-card {
    width: 400px;
    padding: 20px;
  }
  
  .register-title {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  
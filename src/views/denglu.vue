<template>
  <div>
    <div class="bg">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="zhanghao">
          <el-input v-model="ruleForm.zhanghao"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <router-view />
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        zhanghao: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        zhanghao: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("登录成功");
          this.$http
            .post("/api/page/login", {
              username: this.ruleForm.zhanghao,
              password: this.ruleForm.pass,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code === 0) {
                this.$message.success("登陆成功");
                Cookie.set("token", res.data.token);

                this.$store.commit("changeSign", 1);

                this.$store.commit("setToken", res.data.token);

                this.$router.push({
                  path: "/updata",
                });
              }
            });
        } else {
          alert("你在干啥!!");
          return false;
        }
      });
    },
  },
};
</script>

<style exact lang= "scss">
.el-input {
  width: 200px;
  input {
    width: 200px;
  }
}
.el-form-item {
  width: 200px;
  margin: auto;
  padding: 20px 0;
}
.el-form-item__content {
  width: 100%;
}
.bg {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
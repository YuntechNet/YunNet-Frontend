<template>
  <div class="row">
    <background/>
    <section class="container-fluid">
      <div class="row">
        <div
          class="col-6"
          style="margin:0px auto; padding:40px 50px; top:60px;background-color:#3d3d3d;"
        >
          <div class="row">
            <div class="col-12">
              <div class="float-left">
                <h1>Login</h1>
              </div>
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times"/>
                </a>
              </div>
            </div>
          </div>
          <hr>
          <div>
            <b-form @submit.prevent="login">
              <h5>
                <b-form-group
                  class="text-left"
                  id="username-group"
                  label="帳號(學號) / 床位｜Username(Std. ID)/Bed："
                  label-for="username"
                >
                  <b-form-input
                    id="username"
                    v-model="form.username"
                    required
                    placeholder="account"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  id="password-group"
                  label="密碼｜Password："
                  label-for="username"
                >
                  <b-form-input
                    type="password"
                    id="password"
                    v-model="form.password"
                    required
                    placeholder="password"
                  ></b-form-input>
                </b-form-group>
              </h5>
              <div class="row" style="padding:10px">
                <div style="margin:0px auto;">
                  <vue-recaptcha
                    sitekey="6Leyq6AUAAAAACiPhHIFI14DwDbhS1RVk0DoSIJ2"
                    @verify="recaptcha"
                    class="align-self-center"
                  ></vue-recaptcha>
                </div>
              </div>
              <div>
                <a class="btn btn-primary btn-lg" href="./#/regist">註冊｜Regist</a>
                <a class="btn btn-danger btn-lg" href="./#/forgot_password">忘記密碼｜Forget Password</a>
                <b-button type="submit" variant="btn btn-success btn-lg">登入｜Login</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
import VueRecaptcha from "vue-recaptcha"
import { mapActions } from "vuex"

export default {
  name: "Login",
  components: {
    Background,
    VueRecaptcha
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        recaptcha_id: ""
      }
    }
  },
  methods: {
    recaptcha: function(response) {
      this.form.recaptcha_id = response
    },
    ...mapActions(["userLogin"]),
    login: function() {
      let login = this.form
      let formData = {
        username: login.username,
        password: login.password,
        recaptcha: login.recaptcha_id
      }
      this.$http
        .post("./api/login", formData)
        .then(res => {
          if (res.data.token) {
            this.userLogin(res.data)
            this.$router.push("./")
          } else {
            alert("????")
          }
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>

<style>
h1,
label {
  color: white;
}

hr {
  background-color: white;
}
</style>
<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-10 offset-1 offset-sm-3 col-sm-6 frame"
          style="background-color: rgb(51, 51, 51,0.6);"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <router-link
                  to="./"
                  class="btn btn-default btn-lg"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </router-link>
              </div>
              <div class="float-left">
                <h1>Login</h1>
              </div>
            </div>
          </div>
          <hr />
          <b-alert :show="errors" variant="danger">{{errors}}</b-alert>
          <div class="col-10 offset-1">
            <b-form @submit.prevent="login">
              <h5>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="username-group"
                  label="帳號(學號)｜Username(Std. ID)："
                  label-for="username"
                >
                  <b-form-input id="username" v-model="username" required placeholder="account"></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="password-group"
                  label="密碼｜Password："
                  label-for="username"
                >
                  <b-form-input
                    type="password"
                    id="password"
                    required
                    v-model="password"
                    placeholder="password"
                  ></b-form-input>
                </b-form-group>
              </h5>
              <div>
                <a
                  class="btn btn-primary btn-lg"
                  href="./#/register"
                  style="margin:5px 5px"
                >註冊｜Regist</a>
                <b-button
                  type="submit"
                  variant="btn btn-success btn-lg"
                  style="margin:5px 5px;"
                >登入｜Login</b-button>
                <a
                  class="btn btn-danger btn-lg"
                  href="./#/forgot_password"
                  style="margin:5px 5px;"
                >忘記密碼｜Forget Password</a>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <vue-recaptcha
        ref="recaptcha"
        @verify="onVerify"
        @expired="onExpired"
        size="invisible"
        :sitekey="sitekey"
      ></vue-recaptcha>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background";
import VueRecaptcha from "vue-recaptcha";
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions_type";

export default {
  name: "Login",
  components: {
    Background,
    VueRecaptcha
  },
  data() {
    return {
      sitekey: "6LcukLAUAAAAACA1hw5Rz_uh8dwNrNZGYlAl4CDW",
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      this.$refs.recaptcha.execute();
    },
    onVerify(response) {
      this.$refs.recaptcha.reset();
      let username = this.username;
      let password = this.password;
      let recaptcha_token = response;
      this.$store
        .dispatch(LOGIN, { username, password, recaptcha_token })
        .then(() => this.$router.push({ name: "Index" }));
    },
    onExpired() {
      this.$refs.recaptcha.reset();
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>

<style scoped>

h1,
label {
  color: white;
}
hr {
  background-color: white;
}

.frame {
  animation-name: inner-frame;
  animation-duration: 1s;
  animation-fill-mode: both;
  left: 0;
}

@keyframes inner-frame {
  from,
  25% {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    filter: blur(3px);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    filter: blur(0px);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>

<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-10 offset-1 offset-sm-3 col-sm-6 frame rounded-lg"
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
                  <b-form-input
                    id="username"
                    maxlength="40"
                    v-model="username"
                    required
                    placeholder="account"
                  ></b-form-input>
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
                    maxlength="40"
                    required
                    v-model="password"
                    placeholder="password"
                  ></b-form-input>
                </b-form-group>
              </h5>
              <div>
                <router-link
                  class="btn btn-info btn-lg"
                  to="./register"
                  style="margin:5px 5px"
                >註冊｜Register</router-link>
                <a>
                  <b-button
                    type="submit"
                    variant="btn btn-success btn-lg"
                    style="margin:5px 5px;"
                  >登入｜Login</b-button>
                </a>
                <router-link
                  class="btn btn-danger btn-lg fontsize-auto"
                  to="./forgot_password"
                  style="margin:10px 10px;"
                >忘記密碼｜Forget Password</router-link>
                <div>
                  <b-modal id="notice" hide-footer>
                    <template slot="modal-title">通知</template>
                    <div class="d-block text-center">
                      <h5 v-if="language()">本學期尚未註冊的住宿生請盡快註冊帳號及MAC卡號</h5>
                      <h5
                        class="text-left"
                        v-else
                      >Students who haven't register account. Please register your new acoount and MAC address as soon as posible.</h5>
                    </div>
                    <b-button class="mt-3" block @click="$bvModal.hide('notice')">關閉 Close</b-button>
                  </b-modal>
                </div>
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
import { LOGIN, ERROR } from "@/store/actions_type";

export default {
  name: "Login",
  components: {
    Background,
    VueRecaptcha
  },
  data() {
    return {
      username: null,
      password: null,
      sitekey: process.env.VUE_APP_SITEKEY
    };
  },
  mounted: function() {
    // this.$bvModal.show("notice");
  },
  methods: {
    login() {
      this.$refs.recaptcha.execute();
    },
    onVerify(response) {
      this.$refs.recaptcha.reset();
      let reg = /[\W]/g;
      let username = this.username;
      let password = this.password;
      if (!reg.test(username)) {
        let recaptcha_token = response;
        this.$store
          .dispatch(LOGIN, { username, password, recaptcha_token })
          .then(() => this.$router.push({ name: "Userinfo" }));
      } else {
        this.$store.dispatch(ERROR, "格式錯誤:只能英文和數字");
      }
    },
    onExpired() {
      this.$refs.recaptcha.reset();
    },
    language() {
      if ((navigator.language || navigator.userLanguage) === "zh-TW")
        return true;
      else return false;
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
.fontsize-auto {
  width: 60%;
}
@media screen and (max-width: 900px) {
  .fontsize-auto {
    width: 70%;
    font-size: 2vw;
  }
}
@media screen and (max-width: 600px) {
  .fontsize-auto {
    font-size: 3vw;
    width: 80%;
  }
}
</style>
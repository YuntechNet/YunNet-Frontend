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
                <h1>Set_password</h1>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-10 offset-1">
            <b-alert :show="errors" variant="danger">{{errors}}</b-alert>
            <b-form @submit.prevent="submit">
              <h5>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-Password"
                  label="帳號(學號)｜Username(Std. ID)："
                  label-for="username"
                >
                  <b-form-input id="username" v-model="username" required placeholder="Username"></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-Password"
                  label="新密碼｜New Password："
                  label-for="new-Password"
                >
                  <b-form-input
                    type="password"
                    id="new-Password"
                    required
                    v-model="new_Password"
                    placeholder="New"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-Password"
                  label="確認密碼｜Confirm Password："
                  label-for="confirm-Password"
                >
                  <b-form-input
                    type="password"
                    id="confirm-Password"
                    v-model="REnew_Password"
                    required
                    placeholder="Confirm"
                  ></b-form-input>
                </b-form-group>
              </h5>
              <div>
                <input class="btn btn-primary" type="submit" value="確定" />
                <input class="btn btn-danger" type="reset" value="重填" />
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background";
import { mapState } from "vuex";
import { SET_PASSWORD, ERROR } from "@/store/actions_type";

export default {
  name: "Set_password",
  components: {
    Background
  },
  data() {
    return {
      db_token: this.$route.params.token,
      username: null,
      new_Password: null,
      REnew_Password: null
    };
  },
  methods: {
    submit() {
      let username = this.username;
      let password = this.new_Password;
      let db_token = this.db_token;
      if (this.new_Password === this.REnew_Password) {
        this.$store.dispatch(SET_PASSWORD, { username, password, db_token });
      } else {
        this.$store.dispatch(ERROR, "重複密碼錯誤!");
      }
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
@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>

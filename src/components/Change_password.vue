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
                  :to="{name:'Userinfo'}"
                  class="btn btn-default btn-lg"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </router-link>
              </div>
              <div class="float-left">
                <h1>Change_password</h1>
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
                  label="舊密碼｜Old Password："
                  label-for="old-Password"
                >
                  <b-form-input
                    type="password"
                    id="old-Password"
                    maxlength="40"
                    v-model="old_Password"
                    required
                    placeholder="Old"
                  ></b-form-input>
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
                    maxlength="40"
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
                    maxlength="40"
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
          <div class="col-12" style="padding-top: 2%;"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
import { mapState } from "vuex"
import { CHANGE_PASSWORD, ERROR } from "@/store/actions_type"

export default {
  name: "Change_password",
  components: {
    Background
  },
  data() {
    return {
      old_Password: null,
      new_Password: null,
      REnew_Password: null
    }
  },
  methods: {
    submit() {
      let reg = /[\W]/g
      let old_password = this.old_Password
      let new_password = this.new_Password
      if (1) {
        if (this.new_Password === this.REnew_Password) {
          this.$store.dispatch(CHANGE_PASSWORD, { old_password, new_password })
        } else {
          this.$store.dispatch(ERROR, "重複密碼錯誤!")
        }
      } else {
        this.$store.dispatch(ERROR, "格式錯誤:只能英文和數字")
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
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

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
                <h1>Change_password</h1>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-10 offset-1">
            <b-form>
              <h5>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-Password"
                  label="舊密碼｜Old Password："
                  label-for="old-Password"
                >
                  <b-form-input id="username" v-model="username" required placeholder="Old"></b-form-input>
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
                    id="password"
                    required
                    v-model="password"
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
                  <b-form-input id="confirm-Password" v-model="username" required placeholder="Confirm"></b-form-input>
                </b-form-group>
              </h5>
              <div>
                <a class="btn btn-primary btn-lg" href="./#/" style="margin:10px 5px">送出</a>
                <a>
                  <b-button
                    type="submit"
                    variant="btn btn-success btn-lg"
                    style="margin:10px 5px;"
                  >重填</b-button>
                </a>
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

export default {
  name: "Change_password",
  components: {
    Background
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
  h1{
    font-size:30px;
  }

}
</style>

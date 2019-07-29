    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div class="col-12 offset-sm-3 col-sm-6" style="background-color: rgb(51, 51, 51,0.6);">
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>Login</h1>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-12 col-sm-10 offset-sm-1">
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

              <div align="center">
                <div>
                  <vue-recaptcha
                    sitekey="6Leyq6AUAAAAACiPhHIFI14DwDbhS1RVk0DoSIJ2"
                    @verify="recaptcha"
                    class="align-self-center"
                  ></vue-recaptcha>
                </div>
              </div>

              <div style="margin:0px auto;">
                <a
                  class="btn btn-info"
                  href="./#/regist"
                  role="button"
                  style="width:48%;margin:2% 2% 2% 0% ;"
                >
                  <p style="margin:auto auto">註冊｜Regist</p>
                </a>
                <button
                  class="btn btn-success"
                  type="submit"
                  
                  style="width:48%;margin:2% 0% 2% 2% ;"
                >
                  <p style="margin:auto auto">登入｜Login</p>
                </button>
                <a
                  class="btn btn-danger"
                  href="./#/forgot_password"
                  style="width:100%;margin:0% 0% 2% 0% ;"
                >
                  <p style="margin:auto auto">忘記密碼｜Forget Password</p>
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

p,
button,
label {
  font-family: Microsoft JhengHei;
  font-weight: 600;
}
p {
  font-size: 18px;
  color: rgba(999, 999, 999, 0.9);
}


label {
  color: white;
}

hr {
  background-color: white;
}
a {
  color: white;
  font-size: 12px;
}

@media screen and (max-width: 600px) {
}
</style>
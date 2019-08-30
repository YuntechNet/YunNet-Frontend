    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 head-padding"></div>
        <div
          class="col-12 col-sm-4 offset-sm-4 frame rounded-lg"
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
                <h1>Forgot Password</h1>
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-12" style="text-align: left;">
            <div class="alert alert-danger" role="alert" style="font-size: 16px;">
              <strong>注意!!</strong>
              <br />Before using this feature, please make sure that your school mailbox (XXXX@yuntech.edu.tw) is fully equipped and can be used normally, otherwise you will not receive a verification letter.
              <br />使用此功能前，請先確定您的學校信箱(XXXX@yuntech.edu.tw)容量充足且能正常使用，否則將無法收到驗證信。
            </div>
            <b-alert :show="errors" variant="danger">{{errors}}</b-alert>
            <b-form @submit.prevent="submit">
              <label for="student_id" style="color:white;">學號｜Student ID：</label>
              <input
                type="text"
                v-model="username"
                name="student_id"
                required
                id="student_id"
                class="form-control"
                maxlength="40"
              />
              <input class="btn btn-primary" type="submit" value="送出｜Submit" />
              <input class="btn btn-danger" value="清除｜Reset" type="reset" />
              <div class="col-12" style="padding:3%;"></div>
            </b-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
import { mapState } from "vuex"
import { FORGOT_PASSWORD, ERROR } from "@/store/actions_type"

export default {
  name: "Forgot_password",
  components: {
    Background
  },
  data() {
    return {
      username: null
    }
  },
  methods: {
    submit() {
      let reg = /[\W]/g
      let username = this.username
      if (!reg.test(username)) {
        this.$store.dispatch(FORGOT_PASSWORD, { username })
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
hr {
  background-color: white;
}
</style>

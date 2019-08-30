    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 head-padding"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 frame rounded-lg"
          style="background-color: rgb(51, 51, 51, 0.6);"
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
                <h1>Regist - Contract</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-10 offset-1" style="color: white;text-align: left;">
            <p>
              請各位住宿生注意：
              <br />申請網路前請先詳閱以上管理辦法及規定，若不同意請勿申請，以免使用上誤觸規則遭到校規處分。
              而填寫申請資料時，亦請務必依照申請表格各欄位指示確實填寫，以免因為錯誤資料而延誤您使用網路啟用的時間。
              (網路卡卡號輸入錯誤，將導致無法使用網路，請務必加以確認！)
            </p>
            <p>
              申請時若遭遇問題，請至
              <span class="title" id="egg">網路管理小組</span>求助。
            </p>

            <p class="title">請看完詳細條款再行註冊，註冊後等同您同意遵守本條款約定，請細心閱讀，以免您的權利受損!!</p>
          </div>
          <div class="col-12 col-sm-10 offset-sm-1" style="height:70vh">
            <iframe
              id="contract"
              name="contract"
              width="100%"
              height="100%"
              src="./#/contract"
              style="background-color: white;"
            ></iframe>
          </div>
          <div class="col-12" style="padding:3%;"></div>
        </div>

        <div class="col-12" style="padding:3%;"></div>

        <div
          class="col-12 col-sm-10 offset-sm-1 frame pb-4"
          style="background-color: rgb(51, 51, 51, 0.6);"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <router-link
                  class="btn btn-default btn-lg"
                  to="./"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </router-link>
              </div>
              <div class="float-left">
                <h1>Regist - Application Form</h1>
              </div>
            </div>
            <div class="col-10 offset-1">
              <hr />
            </div>
            <div class="col-10 offset-1">
              <b-alert :show="errors" variant="danger">{{errors}}</b-alert>

              <p style="color:white;margin:0px auto;white-space:nowrap;">學號格式:限定字母全大寫。</p>
              <p style="color:white;margin:0px auto;white-space:nowrap;">床位格式:</p>
              <p style="color:white;margin:0px auto;white-space:nowrap;">Example1: A3棟108房4床</p>
              <p>A3108-4 | (棟別,房號)-(床號)</p>
              <p style="color:white;margin:0px auto;white-space:nowrap;">Example2: F棟102房2床</p>
              <p>E2102-2 | (棟別,房號)-(床號)</p>

              <b-form @submit.prevent="regist">
                <div class="row">
                  <div class="col-12 form-inline d-flex justify-content-center" style="padding:1%;">
                    <b-form-group
                      id="student_id group"
                      label="學號/臨時卡號｜Student ID/Access Card Number："
                      label-for="student_id"
                      style="color:white;"
                    >
                      <b-form-input id="student_id" maxlength="40" v-model="id" required></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-12 form-inline d-flex justify-content-center" style="padding:1%;">
                    <b-form-group
                      id="bed group"
                      label="床位｜Bed："
                      label-for="bed"
                      style="color:white;"
                    >
                      <b-form-input
                        id="bed"
                        maxlength="40"
                        v-model="bed"
                        required
                        style="margin:0px "
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-12 form-inline d-flex justify-content-center" style="padding:1%;">
                    <b-form-group
                      id="password group"
                      label="密碼 | Password："
                      label-for="password"
                      style="color:white;"
                    >
                      <b-form-input
                        id="password"
                        type="password"
                        maxlength="40"
                        v-model="password"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-12 form-inline d-flex justify-content-center" style="padding:1%;">
                    <b-form-group
                      id="REpassword group"
                      label="確認密碼 | Confirm Password："
                      label-for="REpassword"
                      style="color:white;"
                    >
                      <b-form-input
                        id="REpassword"
                        type="password"
                        maxlength="40"
                        v-model="REpassword"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-12">
                    <b-button type="submit" variant="info">
                      <p style="margin:auto auto;">送出</p>
                    </b-button>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
        </div>
        <div class="col-12" style="padding:10%;"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
import { REGISTER, ERROR } from "@/store/actions_type"
import { mapState } from "vuex"
export default {
  name: "Register",
  components: {
    Background
  },
  data() {
    return {
      id: null,
      bed: null,
      password: null,
      REpassword: null
    }
  },
  methods: {
    regist() {
      let reg = /[\W]/g
      let username = this.id
      let bed = this.bed
      let password = this.password
      if (!reg.test(username)) {
        if (password === this.REpassword) {
          this.$store
            .dispatch(REGISTER, { username, bed, password })
            .then(() => this.$router.push({ name: "Index" }))
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
hr {
  background-color: white;
}
p,
b-form-group,
label {
  color: white;
  font-weight: 400;
}
.title {
  color: red;
  font-weight: 900;
}
button {
  height: 40px;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-weight: 400;
  }
}
</style>
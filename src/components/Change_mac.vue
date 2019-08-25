<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div class="col-10 offset-1 frame rounded-lg" style="background-color: rgb(51, 51, 51,0.6);">
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
                <h1>Change Mac</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-sm-4 offset-sm-4 col-10 offset-1" style="color: white;">
            <b-alert :show="errors" variant="danger">{{errors}}</b-alert>
            <div style="text-align:left;">
              <div class="form-group">
                <label>當前 MAC 卡號:</label>
                <p
                  class="form-contro-static"
                >{{macnow.match( /.{1,2}/g ).join( ':' ).toUpperCase()}}</p>
              </div>
            </div>
            <b-form
              class="mb-3"
              style="text-align:left;"
              @submit.prevent="submit(mac1+mac2+mac3+mac4+mac5+mac6)"
            >
              <label>新 MAC 卡號:</label>
              <div class="form-group">
                <div style="display:inline;float:left;">
                  <b-form-input
                    type="text"
                    id="new_mac1"
                    v-model="mac1"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                  <label>:</label>
                  <b-form-input
                    type="text"
                    id="new_mac2"
                    v-model="mac2"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                  <label>:</label>
                  <b-form-input
                    type="text"
                    id="new_mac3"
                    v-model="mac3"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                  <label>:</label>
                  <b-form-input
                    type="text"
                    id="new_mac4"
                    v-model="mac4"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                  <label>:</label>
                  <b-form-input
                    type="text"
                    id="new_mac5"
                    v-model="mac5"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                  <label>:</label>
                  <b-form-input
                    type="text"
                    id="new_mac6"
                    v-model="mac6"
                    style="height:25px;width:44px;display:inline;"
                    maxlength="2"
                    required
                  ></b-form-input>
                </div>
              </div>
              <div class="submit col-3 offset-2" style="text-align:left;display:inline;">
                <input class="btn btn-primary" type="submit" value="確定" />
                <input class="btn btn-danger" type="reset" value="重填" />
              </div>
            </b-form>
            <ul>
              <li>本系統於每日 12:00 am 和 12:00 pm 連接網路設備更新有更動之使用者網路卡卡號，請耐心等候下次更新時間。</li>
              <li>輸入之 MAC 格式可為下列型式: xx-xx-xx-xx-xx-xx, xx:xx:xx:xx:xx:xx, xxxx.xxxx.xxxx</li>
            </ul>
          </div>
          <div class="col-10 offset-1">
            <!--
            <div class="row" style="color: WHITE;">
              <div class="col-sm-4 col-12">
                <strong>Windows XP System.</strong>
                <iframe
                  style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8STVnRmF0bS0zdFE/preview"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-sm-4 col-12">
                <strong>Windows 7 / 8 / 8.1 / 10 System.</strong>
                <iframe
                  style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8Y1NsdFlLUDUybmc/preview"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-sm-4 col-12">
                <strong>MAC OS ---System.</strong>
                <iframe
                  style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8eTZJRjVnYUdVMHM/preview"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            -->
          </div>
        </div>
        <div class="col-10 offset-1 frame" style="background-color:rgb(51, 51, 51,0.6);height:6vh;"></div>
        <div class="col-12" style="padding:10%;"></div>
      </div>
    </section>
  </div>
</template>
<script>
import Background from "@/components/Background";
import { IP, CHANGE_MAC } from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "Change_mac",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(IP);
  },
  created: function() {
    let i = 0;
    for (i = 0; i < this.info_IP.length; i++) {
      if (this.info_IP[i].ip === this.$route.params.ip) {
        this.macnow = this.info_IP[i].mac;
      }
    }
    if (this.macnow === null) {
      this.$router.push({ name: "Index" });
    }
  },
  data() {
    return {
      mac1: null,
      mac2: null,
      mac3: null,
      mac4: null,
      mac5: null,
      mac6: null,
      macnow: null
    };
  },
  methods: {
    submit(mac) {
      mac = mac.toUpperCase();
      let ip = this.$route.params.ip;
      this.$store.dispatch(CHANGE_MAC, { mac, ip });
    }
  },
  computed: {
    ...mapState({
      info_IP: state => state.profile.info_IP,
      errors: state => state.auth.errors,
      textState(text) {
        return text.length === 2 ? true : false;
      }
    })
  }
};
</script>
<style scoped>
hr {
  background-color: white;
}

@media screen and (max-width: 800px) {
  iframe {
    width: 170px;
    height: 140px;
  }
}
</style>
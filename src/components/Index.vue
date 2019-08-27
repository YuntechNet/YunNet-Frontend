<template>
  <div id="index" class="row">
    <div class="display-hidden zindex" style="width:100%;">
      <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <div class="col-12">
              <div class="row">
                <div class="col-12" style="padding:7%;"></div>
                <router-link class="btn col-12" to="./" role="button">YunNET 雲科網管</router-link>
                <router-link
                  v-if="isAuthenticated"
                  class="btn col-12"
                  to="./userinfo"
                  role="button"
                >使用者資訊｜User Info</router-link>
                <router-link
                  v-if="!isAuthenticated"
                  class="btn col-12"
                  to="./login"
                  role="button"
                >登入｜Login</router-link>

                <a
                  v-if="isAuthenticated"
                  class="btn col-12"
                  @click.prevent="logout"
                  role="button"
                  style="color:rgb(192, 192, 192);"
                >登出｜Login</a>
                <div class="col-12" style="padding:7%;"></div>
                <router-link class="btn col-12" to="./" role="button">首頁｜Home</router-link>
                <router-link
                  v-if="!isAuthenticated"
                  class="btn col-12"
                  to="./register"
                  role="button"
                >註冊｜Register</router-link>
                <router-link class="btn col-12" to="./netflow" role="button">流量｜Netflow</router-link>
                <router-link class="btn col-12" to="./user_contract" role="button">規範｜Contract</router-link>
                <router-link class="btn col-12" to="./universal_lock" role="button">鎖卡列表｜Lock Table</router-link>
                <router-link class="btn col-12" to="#announce" role="button">公告｜Announce</router-link>
                <router-link class="btn col-12" to="#findus" role="button">關於｜Find Us</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10 frame" id="BK">
      <b-alert :show="errors" variant="warning" dismissible>{{errors}}</b-alert>

      <div class="col-12" style="padding:18vh;"></div>
      <div class="col-12">
        <h1 class="title" style="margin:0px auto">YunNET 雲科網管</h1>
        <div class="col-12" style="padding:18vh;"></div>
        <a href="./" class="btn btn-dark btn-lg" style="margin:0px auto">
          <b>Register Network</b>
        </a>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:rgba(63,127,191,0.85);">
      <div id="announce" class="col-12">
        <h1 class="title" style="margin:20px auto;color:white;">公告 Announce</h1>
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            controls
            indicators
          >
            <b-carousel-slide style="height:70vh;background-color:rgba(63,127,191,0.1);">
              <h2>系統表定維護時間公告</h2>
              <div class="col-12 col-sm-10 offset-sm-1 announce rounded-lg">
                <iframe
                  class="rounded-lg"
                  id="announce3"
                  name="announce3"
                  width="100%"
                  height="100%"
                  src="./#/announce3"
                  style="background-color: white;"
                ></iframe>
              </div>
            </b-carousel-slide>

            <b-carousel-slide style="height:70vh;background-color:rgba(63,127,191,0.1)">
              <h2>107暑假住宿網路註冊須知</h2>
              <div class="col-12 col-sm-10 offset-sm-1 announce rounded-lg">
                <iframe
                  class="rounded-lg"
                  id="announce1"
                  name="announce1"
                  width="100%"
                  height="100%"
                  src="./#/announce1"
                  style="background-color: white;"
                ></iframe>
              </div>
            </b-carousel-slide>

            <b-carousel-slide style="height:70vh;background-color:rgba(63,127,191,0.1)">
              <h2>107學年度宿舍暑期網路設備更換時程表</h2>
              <div class="col-12 col-sm-10 offset-sm-1 announce rounded-lg">
                <iframe
                  class="rounded-lg"
                  id="announce2"
                  name="announce2"
                  width="100%"
                  height="100%"
                  src="./#/announce2"
                  style="background-color: white;"
                ></iframe>
              </div>
            </b-carousel-slide>
          </b-carousel>
          <div class="col-12" style="padding:2%;"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:white;">
      <h1 class="title" style="margin:30px auto">關於我們 Find Us!</h1>
      <img class="map" src="https://i.imgur.com/7PChQEl.png" />
      <p style="margin:10px auto">周一至周五19:00 - 21:00&nbsp;&nbsp;&nbsp; &nbsp;C1宿舍服務中心 網管小組</p>
      <p style="margin:10px auto">逢國定假日或人事行政局公告停班停課不處理一般業務.</p>
      <div class="col-12" style="padding:2%;"></div>
    </div>

    <div class="col-12 col-sm-10" style="background-color:rgba(63,127,191,0.85);">
      <div class="row">
        <p
          style="margin:50px auto;font-size: 1em;color:	#DDDDDD"
        >Copyright © 2019 Yuntech Network Management. All rights reserved.</p>
      </div>
    </div>

    <div
      class="col-2 offset-10 display-visible frame-navigator"
      style="background-color:rgb(51,51,51);height: 100vh;position: fixed;"
    >
      <div class="row">
        <router-link class="btn col-12" to="./" role="button">YunNET 雲科網管</router-link>
        <router-link
          v-if="isAuthenticated"
          class="btn col-12"
          to="./userinfo"
          role="button"
        >使用者資訊｜User Info</router-link>
        <router-link v-if="!isAuthenticated" class="btn col-12" to="./login" role="button">登入｜Login</router-link>

        <a
          v-if="isAuthenticated"
          class="btn col-12"
          @click.prevent="logout"
          role="button"
          style="color:rgb(192, 192, 192);"
        >登出｜Login</a>
        <div class="col-12" style="padding:17vh"></div>
        <router-link class="btn col-12" to="./" role="button">首頁｜Home</router-link>
        <router-link
          v-if="!isAuthenticated"
          class="btn col-12"
          to="./register"
          role="button"
        >註冊｜Register</router-link>
        <router-link class="btn col-12" to="./netflow" role="button">流量｜Netflow</router-link>
        <router-link class="btn col-12" to="./user_contract" role="button">規範｜Contract</router-link>
        <router-link class="btn col-12" to="./universal_lock" role="button">鎖卡列表｜Lock Table</router-link>
        <router-link class="btn col-12" to="#announce" role="button">公告｜Announce</router-link>
        <router-link class="btn col-12" to="#findus" role="button">關於｜Find Us</router-link>
        <div class="col-12" style="background-color:white;height:3px;margin:25px 0px"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex"
import { mapState } from "vuex"
import { LOGOUT } from "@/store/actions_type"

export default {
  name: "index",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "Index" })
      })
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>
<style scoped>
#BK {
  background: url("https://yunnet.yuntech.edu.tw/static/stylish-portfolio/img/bg_test8_compress.jpg")
    center center no-repeat;
  margin: 0;
  padding: 0;
  height: 120vh;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
#list:hover {
  background-color: rgb(129, 187, 187);
}

.title {
  font-size: 4em;
  font-weight: 600;
}
.btn {
  text-align: left;
  padding: 5px 25px;
  color: rgb(192, 192, 192);
  font-size: 1em;
}
.btn:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(114, 112, 112);
}
.announce {
  height: 55vh;
  background-color: white;
}

.map {
  width: 40%;
}
.zindex {
  z-index: -999;
  position: absolute;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 2em;
    font-weight: 800;
  }
  .btn {
    font-size: 1.4em;
  }

  .map {
    width: 80%;
  }
  .zindex {
    z-index: 0;
    position: static;
  }
  h2 {
    font-size: 20px;
  }
}
</style>

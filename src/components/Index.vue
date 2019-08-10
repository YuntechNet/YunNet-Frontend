<template>
  <div class="row">
    <div class="display1 zindex" style="width:100%;">
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
                <a class="btn col-12" href="#top" role="button">YunNET 雲科網管</a>
                <a
                  v-if="!isAuthenticated"
                  class="btn col-12"
                  href="./#/login"
                  role="button"
                >登入｜Login</a>
                <a
                  v-if="isAuthenticated"
                  class="btn col-12"
                  @click.prevent="logout"
                  role="button"
                >登出｜Login</a>
                <div class="col-12" style="padding:7%;"></div>
                <a class="btn col-12" href="#top" role="button">首頁｜Home</a>
                <a class="btn col-12" href="./#/register" role="button">註冊｜Register</a>
                <a class="btn col-12" href="./#/netflow" role="button">流量｜Netflow</a>
                <a class="btn col-12" href="./#/user_contract" role="button">規範｜Contract</a>
                <a class="btn col-12" href="./#/universal_lock" role="button">鎖卡列表｜Lock Table</a>
                <a class="btn col-12" href="#announce" role="button">公告｜Announce</a>
                <a class="btn col-12" href="#findus" role="button">關於｜Find Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10 frame" id="BK">
      <b-alert :show="errors" variant="warning" dismissible>{{errors}}</b-alert>

      <div class="row">
        <div class="col-12" style="padding:18vh;"></div>
        <div class="col-12">
          <h1 class="title" style="margin:0px auto">YunNET 雲科網管</h1>
          <div class="col-12" style="padding:18vh;"></div>
          <a href="/regist" class="btn btn-dark btn-lg" style="margin:0px auto">
            <b>Register Network</b>
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:rgba(63,127,191,0.85);height: 100vh;">
      <div class="row">
        <div id="announce" class="col-12">
          <h1 class="title" style="margin:30px auto;color:white;">公告 Announce</h1>
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                caption="系統表定維護時間公告"
                style="height:70vh;background-color:rgba(63,127,191,0.85)"
              >
                <div class="col-12 col-sm-6 offset-sm-3 announce"></div>
              </b-carousel-slide>

              <b-carousel-slide
                caption=" 107暑假住宿網路註冊須知"
                style="height:70vh;background-color:rgba(63,127,191,0.85)"
              >
                <div class="col-12 col-sm-6 offset-sm-3 announce"></div>
              </b-carousel-slide>

              <b-carousel-slide
                caption="107學年度宿舍暑期網路設備更換時程表"
                style="height:70vh;background-color:rgba(63,127,191,0.85)"
              >
                <div class="col-12 col-sm-6 offset-sm-3 announce"></div>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:white;height: 80vh;">
      <div class="row">
        <div id="findus" class="col-12">
          <h1 class="title" style="margin:30px auto">關於我們 Find Us!</h1>
          <img class="map" src="https://i.imgur.com/7PChQEl.png" />
          <p style="margin:10px auto">周一至周五19:00 - 21:00&nbsp;&nbsp;&nbsp; &nbsp;C1宿舍服務中心 網管小組</p>
          <p style="margin:10px auto">逢國定假日或人事行政局公告停班停課不處理一般業務.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:rgba(63,127,191,0.85);height: 20vh;">
      <div class="row">
        <p
          style="margin:50px auto;font-size: 1em;background-image: linear-gradient(to right, #008b8b, #008844);"
        >Copyright © 2019 Yuntech Network Management. All rights reserved.</p>
      </div>
    </div>

    <div
      class="col-0 offset-12 col-sm-2 offset-sm-10 display"
      style="background-color:rgb(51,51,51);height: 100vh;position: fixed;"
    >
      <div class="row">
        <a class="btn col-12" href="#top" role="button">YunNET 雲科網管</a>
        <a v-if="!isAuthenticated" class="btn col-12" href="./#/login" role="button">登入｜Login</a>
        <a
          v-if="isAuthenticated"
          class="btn col-12"
          @click.prevent="logout"
          role="button"
          style="color:white;"
        >登出｜Login</a>
        <div class="col-12" style="padding:25vh;"></div>
        <a class="btn col-12" href="#top" role="button">首頁｜Home</a>
        <a class="btn col-12" href="./#/register" role="button">註冊｜Register</a>
        <a class="btn col-12" href="./#/netflow" role="button">流量｜Netflow</a>
        <a class="btn col-12" href="./#/user_contract" role="button">規範｜Contract</a>
        <a class="btn col-12" href="./#/universal_lock" role="button">鎖卡列表｜Lock Table</a>
        <a class="btn col-12" href="#announce" role="button">公告｜Announce</a>
        <a class="btn col-12" href="#findus" role="button">關於｜Find Us</a>
        <div class="col-12" style="background-color:white;height:1vh;margin:25px 0px"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { LOGOUT } from "@/store/actions_type";

export default {
  name: "index",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    //increase: function() {
    //  var x = document.getElementById("title")

    // counter++

    // if (counter == 1) {
    //   x.style.visibility = "visible"
    // }

    // if (counter == 2) {
    //  x.style.visibility = "hidden"
    //  counter = 0
    // }
    //},
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
};
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
  margin: 0;
  padding: 0;
  font-size: 4em;
  font-weight: 600;
}
.btn {
  text-align: left;
  padding: 3px 25px;
  color: rgb(192, 192, 192);
  font-size: 1em;
}
.btn:hover {
  color: black;
  background-color: sandybrown;
}
.announce {
  height: 43vh;
  background-color: white;
}
.display1 {
  visibility: hidden;
}
.map {
  height: 50%;
  width: 50%;
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
  p {
    font-size: 0.4em;
  }
  .display {
    visibility: hidden;
  }
  .display1 {
    visibility: visible;
  }
  .map {
    height: 90%;
    width: 90%;
  }
  .zindex {
    z-index: 0;
    position: static;
  }
}
</style>

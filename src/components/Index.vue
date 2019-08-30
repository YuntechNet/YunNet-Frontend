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
                  style="color:#999;"
                >登出｜Login</a>
                <div class="col-12" style="padding:7%;"></div>
                <a class="btn col-12" href="#top" role="button">首頁｜Home</a>
                <router-link
                  v-if="!isAuthenticated"
                  class="btn col-12"
                  to="./register"
                  role="button"
                >註冊｜Register</router-link>
                <router-link v-if="false" class="btn col-12" to="./netflow" role="button">流量｜Netflow</router-link>
                <router-link class="btn col-12" to="./user_contract" role="button">規範｜Contract</router-link>
                <router-link
                  v-if="false"
                  class="btn col-12"
                  to="./universal_lock"
                  role="button"
                >鎖卡列表｜Lock Table</router-link>
                <a class="btn col-12" href="#announce" role="button">公告｜Announce</a>
                <a class="btn col-12" href="#findus" role="button">關於｜Find Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-10 frame" id="BK">
      <b-alert
        class="col-12 col-sm-4 offset-sm-4"
        :show="errors"
        variant="warning"
        dismissible
      >{{errors}}</b-alert>
      <div class="col-12" style="padding:18vh;"></div>
      <div class="col-12">
        <h1 class="title" style="margin:0px auto">YunNET 雲科網管</h1>
        <b-alert
          class="col-sm-4 offset-sm-4 col-8 offset-2 alert-frame"
          :show="k"
          variant="danger"
          dismissible
        >
          <a style="color:#a94442;">
            <strong style="font-size:20px">網路管理小組歡迎你的加入</strong>
          </a>
        </b-alert>
        <div class="col-12" style="padding:16vh;"></div>
        <router-link
          v-if="!isAuthenticated"
          :to="{name:'Register'}"
          class="btn-dark btn-lg"
          style="margin:0px auto"
        >Register Network</router-link>
      </div>
    </div>
    <div class="col-12 col-sm-10" style="background-color:rgba(63,127,191,0.85);">
      <div id="announce" class="col-12">
        <div class="col-10 offset-1 text-center" style="margin:5% auto 0% auto">
          <h1 class="font-size" style="color:white;">公告｜Announce</h1>
          <hr />
        </div>
        <div>
          <b-carousel id="carousel-1" v-model="slide" controls indicators>
            <b-carousel-slide style="height:62vh;background-color:rgba(63,127,191,0.1);">
              <iframe
                class="col-12 col-sm-10 offset-sm-1 announce rounded-lg"
                id="announce3"
                name="announce3"
                width="100%"
                height="100%"
                src="./#/announce3"
                style="background-color: white;margin:0px auto;"
              ></iframe>
            </b-carousel-slide>

            <b-carousel-slide style="height:62vh;background-color:rgba(63,127,191,0.1)">
              <iframe
                class="col-12 col-sm-10 offset-sm-1 announce rounded-lg"
                id="announce1"
                name="announce1"
                width="100%"
                height="100%"
                src="./#/announce1"
                style="background-color: white;margin:0px auto;"
              ></iframe>
            </b-carousel-slide>
            <b-carousel-slide style="height:62vh;background-color:rgba(63,127,191,0.1);">
              <iframe
                class="col-12 col-sm-10 offset-sm-1 announce rounded-lg"
                id="announce2"
                name="announce2"
                width="100%"
                height="100%"
                src="./#/announce2"
                style="background-color: white;margin:0px auto;"
              ></iframe>
            </b-carousel-slide>
          </b-carousel>
          <div class="col-12" style="padding:2%;"></div>
        </div>
      </div>
    </div>
    <div id="findus" class="col-12 col-sm-10" style="background-color:white;">
      <div class="col-10 offset-1 text-center" style="margin:2% auto 0% auto">
        <h1 class="font-size">關於我們｜Find Us!</h1>
        <hr />
      </div>
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
          style="color:#999;"
        >登出｜Login</a>

        <div style="position: fixed;bottom: 0px;">
          <a class="btn col-12" href="#top" role="button">首頁｜Home</a>
          <router-link
            v-if="!isAuthenticated"
            class="btn col-12"
            to="./register"
            role="button"
          >註冊｜Register</router-link>
          <router-link v-if="false" class="btn col-12" to="./netflow" role="button">流量｜Netflow</router-link>
          <router-link class="btn col-12" to="./user_contract" role="button">規範｜Contract</router-link>
          <router-link
            v-if="false"
            class="btn col-12"
            to="./universal_lock"
            role="button"
          >鎖卡列表｜Lock Table</router-link>
          <a class="btn col-12" href="#announce" role="button">公告｜Announce</a>
          <a class="btn col-12" href="#findus" role="button">關於｜Find Us</a>
          <div class="col-12" style="background-color:white;height:3px;margin:25px 0px"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { LOGOUT, WAN_DOWN, IP } from "@/store/actions_type";
export default {
  name: "index",
  data() {
    return {
      slide: 0,
      sliding: null,
      k: true
    };
  },
  beforeMount: function() {
    this.$store.dispatch(IP).then(() => {
      this.$store.dispatch(WAN_DOWN);
    });
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "Index" });
      });
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
hr {
  background-color: #fff;
}
#list:hover {
  background-color: rgb(129, 187, 187);
}
.btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-dark {
  border-radius: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}
.btn-dark:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.title {
  font-size: 4em;
  font-weight: 600;
}
.btn {
  text-align: left;
  padding: 5px 25px;
  color: #999;
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
  width: 35%;
}
.zindex {
  z-index: -999;
  position: absolute;
}
.alert-frame {
  animation-name: alert-frame;
  animation-delay: 2s;
  animation-duration: 3s;
  animation-fill-mode: both;
  left: 0;
}
@keyframes alert-frame {
  from,
  25% {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@media screen and (max-width: 600px) {
  .title {
    font-size: 2em;
    font-weight: 800;
  }
  .btn {
    font-size: 1.4em;
  }
  .font-size {
    font-size: 24px;
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
  p {
    font-size: 12px;
  }
}
</style>

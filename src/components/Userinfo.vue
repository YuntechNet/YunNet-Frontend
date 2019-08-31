<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="col-12 head-padding"></div>
      <div
        class="col-12 col-sm-10 offset-sm-1 frame rounded-lg"
        style="background-color: rgb(51,51,51,0.6);"
      >
        <div class="row">
          <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
            <div class="float-right">
              <router-link to="./" class="btn btn-default btn-lg" style="background-color: white;">
                <font-awesome-icon icon="times" />
              </router-link>
            </div>
            <div class="float-left">
              <h1>使用者資訊｜User Info.</h1>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-sm-6 offset-sm-3 col-10 offset-1" style="text-align: left;color:white;">
            <div class="row">
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">學號</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">UID</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.username}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">姓名</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Name</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.name}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">部門</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Department</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.department}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">類型</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Type</p>
              </div>
              <div class="col-4 font-weight-bold">
                <div v-for="(item,index) in info.group" :key="index">
                  <p style="white-space:nowrap;" class="fontsize-auto-user">{{item}}</p>
                </div>
              </div>
            </div>
          </div>
          <router-link
            :to="`./Change_password/`"
            class="col-sm-4 offset-sm-4 col-6 offset-3 btn btn-danger"
          >更改密碼</router-link>
          <div class="col-12" style="padding-top: 2%;"></div>
          <div class="col-sm-10 offset-sm-1 col-12" style="text-align:left;">
            <div class="card-deck" v-for="(item,index) in info_IP" :key="index">
              <div :class="['card bg-light', index===0?'border-warning':'' ,'text-dark']">
                <div :class="[index === 0?'bg-warning':'bg-light','card-header']">
                  <button
                    class="btn btn-block"
                    data-toggle="collapse"
                    :data-target="`#id${index}`"
                    aria-expanded="true"
                    :aria-controls="`#id${index}`"
                  >
                    <div class="row">
                      <h4
                        class="col-sm-6 col-12 text-left font-weight-bold fontsize-auto"
                        style="white-space:nowrap;font-size:"
                      >{{item.ip}}</h4>
                      <h4
                        class="col-sm-6 col-12 text-right dropdown-toggle fontsize-auto"
                        style="white-space:nowrap;font-size:"
                      >{{item.description}}</h4>
                    </div>
                  </button>
                </div>
                <div
                  :class="['card-body','collapse',index===0|item.lock_status==='鎖定'?'show':'hide']"
                  :id="['id'+index]"
                >
                  <div class="row">
                    <h5 class="col-sm-2 col-4" style="white-space:nowrap;width:100%;">MAC</h5>
                    <div class="row col-sm-10 col-8">
                      <div class="d-inline pr-2">
                        <p
                          class="fontsize-auto-user"
                          style="white-space:nowrap;text-align:left;"
                        >{{item.mac!=null?item.mac.match( /.{1,2}/g ).join( ':' ).toUpperCase():"未設定 (請按下方更改MAC)" }}</p>
                      </div>
                      <div class="d-inline">
                        <p style="white-space:nowrap;text-align:left;">
                          <kbd
                            :class="[item.is_updated?'bg-success':'bg-danger']"
                          >{{item.is_updated?"已更新":"未更新"}}</kbd>
                        </p>
                      </div>
                    </div>

                    <!-- <h5 class="col-sm-2 col-6" style="white-space:nowrap;width:100%;">校外總量</h5>
                    <div class="col-sm-10 col-6">{{readablizeBytes(wan[index])}}</div>-->

                    <h5 class="col-sm-2 col-4" style="white-space:nowrap;width:100%;">狀態</h5>
                    <div
                      style="white-space:nowrap;width:100%;"
                      :class="['row','col-sm-10 col-8', item.locked?'text-danger':'text-success']"
                    >{{item.locked?"鎖卡":"未鎖卡"}}</div>

                    <div class="btn-group btn-right mx-3" role="group" aria-label="功能">
                      <router-link :to="`./change_mac/${item.ip}`" class="btn btn-success">更改MAC</router-link>
                      <router-link
                        v-show="false"
                        :to="`./user_netflow/${item.ip}`"
                        class="btn btn-primary"
                      >流量紀錄</router-link>
                      <router-link :to="`./user_lock/${item.ip}`" class="btn btn-secondary">鎖卡紀錄</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-100 py-1"></div>
            </div>
          </div>
        </div>
        <div class="col-12" style="padding-top: 2%;"></div>
      </div>

      <div class="col-12" style="padding-top: 20%;"></div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background";
import { INFO, IP, WAN_DOWN } from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "Userinfo",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(INFO).then(() => {
      this.$store.dispatch(IP).then(() => {
        this.$store.dispatch(WAN_DOWN);
      });
    });
  },
  methods: {
    readablizeBytes(bytes) {
      let s = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
      let e = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    }
  },
  computed: {
    ...mapState({
      info: state => state.profile.info,
      info_IP: state => state.profile.info_IP,
      wan: state => state.profile.wan
    })
  }
};
</script>


<style scoped>
h1,
tr,
td {
  color: white;
}
hr {
  background-color: white;
}
div.column {
  margin: 0px 20px;
  width: 25%;
}

a.display {
  display: block;
}

@media screen and (max-width: 700px) {
  .fontsize-auto {
    font-size: 3vw;
  }
}

@media screen and (max-width: 550px) {
  p {
    font-size: 18px;
  }

  div.column {
    width: 50%;
  }

  a.display {
    display: none;
  }
  .fontsize-auto-user {
    font-size: 4vw;
  }
  .fontsize-auto {
    font-size: 7vw;
  }
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
#tbody:hover {
  background-color: rgba(199, 244, 244, 0.5);
}
</style>

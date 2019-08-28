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
                <p>學號</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>ID</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>{{info.username}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p>姓名</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>Name</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>{{info.name}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p>部門</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p class="fontsize">Department</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>{{info.department}}</p>
              </div>

              <div class="col-4 font-weight-bold">
                <p>類型</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p>Type</p>
              </div>
              <div class="col-4 font-weight-bold">
                <div v-for="(item,index) in info.group" :key="index">
                  <p>{{item}}</p>
                </div>
              </div>
            </div>
          </div>
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
                      <h4 class="col text-left font-weight-bold">{{item.ip}}</h4>
                      <h4 class="dropdown-toggle">{{item.description}}</h4>
                    </div>
                  </button>
                </div>
                <div
                  :class="['card-body','collapse',index===0|item.lock_status==='鎖定'?'show':'hide']"
                  :id="['id'+index]"
                >
                  <div class="row">
                    <h5 class="col-sm-2 col-6">MAC</h5>
                    <div class="col-sm-10 col-6">
                      <div>
                        {{item.mac!=null?item.mac.match( /.{1,2}/g ).join( ':' ).toUpperCase():"未設定 (請按下方更改MAC)" }}
                        <kbd
                          :class="[item.is_updated?'bg-success':'bg-danger']"
                        >{{item.is_updated?"已更新":"未更新"}}</kbd>
                      </div>
                    </div>

                    <h5 class="col-sm-2 col-6">校外總量</h5>
                    <div class="col-sm-10 col-6">{{readablizeBytes(wan[index])}}</div>

                    <h5 class="col-sm-2 col-6">狀態</h5>
                    <div
                      :class="['col-sm-10 col-6', item.lock_status==='LOCKED'?'text-danger':'text-success']"
                    >{{item.lock_status}}</div>

                    <div class="btn-group btn-right mx-3" role="group" aria-label="功能">
                      <router-link :to="`./change_mac/${item.ip}`" class="btn btn-success">更改MAC</router-link>
                      <router-link :to="`./user_netflow/${item.ip}`" class="btn btn-primary">流量紀錄</router-link>
                      <router-link :to="`./user_lock/${item.ip}`" class="btn btn-secondary">鎖卡紀錄</router-link>
                      <router-link :to="`./Change_password/`" class="btn btn-danger">更改密碼</router-link>
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
th.text-size {
  font-size: 15px;
}
a.display {
  display: block;
}

@media screen and (max-width: 600px) {
  p {
    font-size: 18px;
  }

  div.column {
    width: 50%;
  }
  th.text-size {
    font-size: 12px;
  }
  a.display {
    display: none;
  }
  .fontsize {
    font-size: 15px;
  }
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
#tbody:hover {
  background-color: rgba(199, 244, 244, 0.5);
}
</style>

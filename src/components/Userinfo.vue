<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding-top: 5%;"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 frame"
          style="background-color: rgb(51,51,51,0.6);"
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
                <h1>使用者資訊｜User Info.</h1>
              </div>
            </div>
            <div class="col-10 offset-1">
              <hr />
            </div>
            <div class="col-10 offset-1">
              <div class="row mb-5">
                <div class="col-12" style="text-align: left;">
                  <div>
                    <div class="row justify-content-md-center pt-5" style="color:white;">
                      <div class="w-100"></div>
                      <div class="col-sm-1 font-weight-bold">學號</div>
                      <div class="col-sm-1 font-weight-bold">ID</div>
                      <div class="col-sm-2 offset-sm-1">{{info.username}}</div>
                      <div class="w-100 mb-2"></div>
                      <div class="col-sm-1 font-weight-bold">姓名</div>
                      <div class="col-sm-1 font-weight-bold">Name</div>
                      <div class="col-sm-2 offset-sm-1">{{info.name}}</div>
                      <div class="w-100 mb-2"></div>
                      <div class="col-sm-1 font-weight-bold">部門</div>
                      <div class="col-sm-1 font-weight-bold">Department</div>
                      <div class="col-sm-2 offset-sm-1">{{info.department}}</div>
                      <div class="w-100 mb-2"></div>
                      <div class="col-sm-1 font-weight-bold">類型</div>
                      <div class="col-sm-1 font-weight-bold">Type</div>
                      <div class="col-sm-2 offset-sm-1">
                        <div v-for="(item,index) in info.group" :key="index">{{item}}</div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div
                        class="card-deck mx-xl-8 pt-2"
                        v-for="(item,index) in info_IP"
                        :key="index"
                      >
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
                            <div class="row mt-xs-1">
                              <h5 class="col-3 card-title">MAC</h5>
                              <div class="col card-text">
                                <div>
                                  {{item.mac.match( /.{1,2}/g ).join( ':' ).toUpperCase() }}
                                  <kbd
                                    :class="['ml-2',item.is_updated?'bg-success':'bg-danger']"
                                  >{{item.is_updated?"已更新":"未更新"}}</kbd>
                                </div>
                              </div>
                              <div class="w-100"></div>
                              <h5 class="col-3 card-title">校外總量</h5>
                              <div class="col card-text">??GB</div>
                              <div class="w-100"></div>
                              <h5 class="col-3 card-title">狀態</h5>
                              <div
                                :class="['col' ,'card-text', item.lock_status==='鎖定'?'text-danger':'text-success']"
                              >{{item.lock_status}}</div>
                              <div class="w-100"></div>
                            </div>
                            <div class="btn-group btn-right" role="group" aria-label="功能">
                              <router-link
                                :to="`./change_mac/${item.ip}`"
                                class="btn btn-success"
                              >更改MAC</router-link>
                              <a href="#" class="btn btn-primary">流量紀錄</a>
                              <a href="#" class="btn btn-secondary">鎖卡紀錄</a>
                            </div>
                          </div>
                        </div>
                        <div class="w-100 py-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-12" style="padding-top: 20%;"></div>
      </div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background";
import { INFO, IP } from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "Userinfo",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(IP);
    this.$store.dispatch(INFO);
  },

  computed: {
    ...mapState({
      info: state => state.profile.info,
      info_IP: state => state.profile.info_IP
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
  div.column {
    width: 50%;
  }
  th.text-size {
    font-size: 12px;
  }
  a.display {
    display: none;
  }
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
#tbody:hover {
  background-color: rgba(199, 244, 244, 0.5);
}
</style>

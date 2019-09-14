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
          <b-modal
            id="modalUnlock"
            ref="modal"
            title="解卡類型"
            @show="resetModal"
            @hidden="resetModal"
            @ok="UnlockOK"
          >
            <b-form ref="form" @submit.stop.prevent="UnlockSubmit">
              <b-form-radio-group
                v-model="selected"
                :options="[{ text: '立即解卡', value: false },{ text: '設定解卡日期', value: true }]"
                :state="state"
                class="pb-2"
                name="radio-validation"
              >
                <b-form-invalid-feedback
                  :state="state"
                >{{ selected === true & date === null ? "Please select date" : "Please select one" }}</b-form-invalid-feedback>
              </b-form-radio-group>
              <b-form-input v-model="date" v-show="selected" class="mr-1" id="date" type="date"></b-form-input>
            </b-form>
          </b-modal>
          <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
            <div class="float-right">
              <router-link
                :to="{name:'Index'}"
                class="btn btn-default btn-lg"
                style="background-color: white;"
              >
                <font-awesome-icon icon="times" />
              </router-link>
            </div>
            <div class="float-left">
              <h1>System Query</h1>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <b-alert
            class="col-12 col-sm-4 offset-sm-4"
            :show="errors"
            variant="warning"
            dismissible
          >{{errors}}</b-alert>
          <b-form
            inline
            class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-4 offset-xl-4"
            @submit.prevent="submit()"
          >
            <b-form-group class="col-12">
              <b-form-input
                id="username"
                class="d-inline"
                maxlength="40"
                v-model="username"
                required
                placeholder="ID/IP/Bed"
              ></b-form-input>
              <button type="submit" class="btn btn-primary d-inline">Query</button>
            </b-form-group>
          </b-form>
          <div class="col-12 mt-5" v-show="info.ip.length!=0">
            <div class="col-sm-6 offset-sm-3 col-10 offset-1" style="text-align: left;color:white;">
              <div v-show="info.user.length!=0" class="row">
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">學號</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">UID</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.user.username}}</p>
                </div>

                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">姓名</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Name</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.user.nick}}</p>
                </div>

                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">部門</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p
                    style="white-space:nowrap;margin-right:15%"
                    class="fontsize-auto-user"
                  >Department</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.user.department}}</p>
                </div>

                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">類型</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Type</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <div v-for="(item,index) in info.user.group" :key="index">
                    <p style="white-space:nowrap;" class="fontsize-auto-user">{{item}}</p>
                  </div>
                </div>
                <div class="col-sm-4 offset-sm-4 col-12">
                  <router-link :to="`./all_log/${info.user.username}`" class="btn btn-info">帳號紀錄</router-link>
                </div>
              </div>
            </div>
            <div class="col-12" style="padding-top: 2%;"></div>
            <div class="col-sm-10 offset-sm-1 col-12" style="text-align:left;">
              <div class="card-deck" v-for="(item,index) in info.ip" :key="index">
                <div :class="['card bg-light', item.lock_status==='LOCKED'?'border-warning':'']">
                  <div :class="[item.lock_status==='LOCKED'?'bg-warning':'bg-light','card-header']">
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
                    :class="['card-body','collapse',index===0|item.lock_status==='LOCKED'?'show':'hide']"
                    :id="['id'+index]"
                  >
                    <div class="row">
                      <h5 class="col-sm-2 col-4" style="white-space:nowrap;width:100%;">MAC</h5>
                      <div class="row col-sm-10 col-8">
                        <div class="d-inline pr-2">
                          <p
                            class="fontsize-auto-user"
                            style="white-space:nowrap;text-align:left;"
                          >{{item.mac!=null?item.mac.match( /.{1,2}/g ).join( ':' ).toUpperCase():"未設定" }}</p>
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

                      <h5 class="col-sm-2 col-4" style="white-space:nowrap;width:100%;">Port</h5>
                      <div
                        style="white-space:nowrap;width:100%;"
                        class="row col-sm-10 col-8"
                      >{{item.port}}</div>

                      <h5
                        class="col-sm-2 col-4"
                        style="font-size:15px;white-space:nowrap;width:100%;"
                      >Switch ID</h5>
                      <div
                        style="white-space:nowrap;width:100%;"
                        class="row col-sm-10 col-8"
                      >{{item.switch_id}}</div>

                      <h5
                        v-show="item.is_unlimited"
                        class="col-sm-2 col-4"
                        style="white-space:nowrap;width:100%;"
                      >無限</h5>
                      <div
                        v-show="item.is_unlimited"
                        style="white-space:nowrap;width:100%;"
                        class="row col-sm-10 col-8"
                      >{{item.is_unlimited?"True":"False"}}</div>

                      <h5 class="col-sm-2 col-4" style="white-space:nowrap;width:100%;">鎖卡</h5>
                      <div
                        style="white-space:nowrap;width:100%;"
                        :class="['row','col-sm-10 col-8', item.lock_status==='LOCKED'?'text-danger':'text-success']"
                      >{{item.lock_status==='LOCKED'?"鎖卡":"未鎖卡"}}</div>

                      <div class="btn-group btn-right mx-3" role="group" aria-label="功能">
                        <router-link
                          v-show="true"
                          :to="`./system_user_lock/${item.ip}`"
                          class="btn btn-secondary"
                        >鎖卡紀錄</router-link>
                        <router-link
                          v-show="false"
                          :to="`./user_netflow/${item.ip}`"
                          class="btn btn-primary"
                        >流量紀錄</router-link>
                        <router-link :to="`./IP_Log/${item.ip}`" class="btn btn-info">使用紀錄</router-link>
                        <a
                          class="btn btn-primary"
                          :href="`http://cnms.yuntech.edu.tw/netflow.pl?action=ShowIP&IP=${item.ip}`"
                        >流量紀錄</a>
                        <button
                          @click="()=>{
                            $bvModal.show('modalUnlock')
                            ip=item.ip
                          }"
                          v-show="item.lock_status==='LOCKED'&unlock"
                          class="btn btn-success"
                        >解卡</button>
                        <router-link
                          v-show="abuse"
                          :to="`./system_abuse/${username}/${item.ip}`"
                          class="btn btn-danger"
                        >Abuse</router-link>
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
      </div>

      <div class="col-12" style="padding-top: 20%;"></div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background";
import PermissionService from "@/util/permission_service";
import {
  SYSTEM_QUERY,
  /* WAN_DOWN,*/ SYSTEM_CLEAR,
  SYSTEM_UNLOCK
} from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "System_query",
  components: { Background },
  created: function() {
    this.$store.dispatch(SYSTEM_CLEAR);
  },
  methods: {
    eadablizeBytes(bytes) {
      let s = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
      let e = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    },
    submit() {
      let username = this.username;
      this.$store.dispatch(SYSTEM_QUERY, username).then(() => {
        //this.$store.dispatch(WAN_DOWN);
      });
    },
    resetModal() {
      this.date = null;
      this.selected = null;
    },
    UnlockOK(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.UnlockSubmit();
    },
    UnlockSubmit() {
      let date = this.date;
      let ip = this.ip;
      if (!this.state) {
        return;
      }
      this.$store.dispatch(SYSTEM_UNLOCK, { ip, date });
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  },
  data() {
    return {
      selected: null,
      date: null,
      username: null,
      ip: null,
      abuse: PermissionService.Check("api.ip.lock.add"),
      unlock: PermissionService.Check("api.ip.lock.edit")
    };
  },
  computed: {
    state: function() {
      if (this.selected === false) return true;
      if ((this.selected === true) & (this.date != null)) return true;
      else return false;
    },
    ...mapState({
      info: state => state.system.info,
      errors: state => state.auth.errors
      //wan: state => state.system.wan
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

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
              <button
                class="btn btn-default btn-lg"
                style="background-color: white;"
                @click="$router.go(-1)"
              >
                <font-awesome-icon icon="times" />
              </button>
            </div>
            <div class="float-left">
              <h1>IP Log</h1>
            </div>
          </div>

          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-12" style="padding-top: 2%;"></div>

          <div class="col-12 mt-5" style="text-align:left;color:white;">
            <div class="col-sm-6 offset-sm-3 col-10 offset-1" style="text-align: left;color:white;">
              <div class="row">
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
                  <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">IP</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">IP</p>
                </div>
                <div class="col-4 font-weight-bold">
                  <p style="white-space:nowrap;" class="fontsize-auto-user">{{info.ip[0].ip}}</p>
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
              </div>
            </div>
          </div>

          <div class="pt-5 col-10 offset-1 table-responsive">
            <table class="table table-sm" cellspacing="0">
              <thead>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <td id="thead" colspan="6" class="text-size" style="text-align:center;">Lock Log</td>
                </tr>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <th id="thead" class="text-size" style="text-align:center;">Type</th>
                  <th id="thead" class="text-size" style="text-align:center;">IP</th>
                  <th id="thead" class="text-size" style="text-align:center;">Current ip owner</th>
                  <th id="thead" class="text-size" style="text-align:center;">Pperator</th>
                  <th id="thead" class="text-size" style="text-align:center;">Lock until</th>
                  <th id="thead" class="text-size" style="text-align:center;">ID</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style="background-color:#FAFAD2;color:#444444;"
                  v-for="(item,index) in log[0]"
                  :key="index"
                >
                  <th class="text-size" style="text-align:center;">{{item.type}}</th>
                  <th class="text-size" style="text-align:center;">{{item.ip}}</th>
                  <th class="text-size" style="text-align:center;">{{item.current_ip_owner}}</th>
                  <th class="text-size" style="text-align:center;">{{item.operator}}</th>
                  <th class="text-size" style="text-align:center;">{{item.lock_until}}</th>
                  <th class="text-size" style="text-align:center;">{{item.id}}</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pt-5 col-10 offset-1 table-responsive">
            <table class="table table-sm" cellspacing="0">
              <thead>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <td id="thead" colspan="6" class="text-size" style="text-align:center;">MAC Log</td>
                </tr>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <th id="thead" class="text-size" style="text-align:center;">IP</th>
                  <th id="thead" class="text-size" style="text-align:center;">Owner</th>
                  <th id="thead" class="text-size" style="text-align:center;">Old mac</th>
                  <th id="thead" class="text-size" style="text-align:center;">New mac</th>
                  <th id="thead" class="text-size" style="text-align:center;">Date</th>
                  <th id="thead" class="text-size" style="text-align:center;">ID</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style="background-color:#FAFAD2;color:#444444;"
                  v-for="(item,index) in log[1]"
                  :key="index"
                >
                  <th class="text-size" style="text-align:center;">{{item.ip}}</th>
                  <th class="text-size" style="text-align:center;">{{item.owner}}</th>
                  <th
                    class="text-size"
                    style="text-align:center;"
                  >{{item.old_mac!=null?item.old_mac.match( /.{1,2}/g ).join( ':' ).toUpperCase():"未設定"}}</th>
                  <th
                    class="text-size"
                    style="text-align:center;"
                  >{{item.new_mac!=null?item.new_mac.match( /.{1,2}/g ).join( ':' ).toUpperCase():"未設定"}}</th>
                  <th class="text-size" style="text-align:center;">{{dateformat(item.id)}}</th>
                  <th class="text-size" style="text-align:center;">{{item.id}}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12" style="padding-top: 1%;"></div>
      </div>

      <div class="col-12" style="padding-top: 20%;"></div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background"
import { mapState } from "vuex"
import { SYSTEM_IP_LOG, SYSTEM_QUERY } from "@/store/actions_type"

export default {
  name: "IP_Log",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(SYSTEM_QUERY, this.$route.params.ip)
    this.$store.dispatch(SYSTEM_IP_LOG, this.$route.params.ip)
  },
  methods: {
    dateformat(objectId) {
      return new Date(
        parseInt(objectId.substring(0, 8), 16) * 1000
      ).toLocaleString("zh-TW", { timeZone: "Asia/Taipei", hour12: false })
    }
  },
  computed: {
    ...mapState({
      info: state => state.system.info,
      log: state => state.system.log
    })
  }
}
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
a {
  font-size: 20px;
}
@media screen and (max-width: 600px) {
  div.column {
    width: 50%;
  }
  h1 {
    font-size: 35px;
  }
  .fontsize {
    font-size: 15px;
  }
}
#thead:hover {
  background-color: rgba(181, 215, 255, 0.5);
}
</style>

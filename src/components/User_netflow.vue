<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 head-padding"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 frame rounded-lg"
          style="background-color: rgb(51,51,51,0.6);"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <router-link
                  :to="{name:'Userinfo'}"
                  class="btn btn-default btn-lg"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </router-link>
              </div>
              <div class="float-left">
                <h1>流量紀錄｜User_netflow</h1>
              </div>
            </div>

            <div class="col-10 offset-1">
              <hr />
            </div>
            <div class="col-12" style="padding-top: 2%;"></div>
            <div class="col-10 offset-1">
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
                <div class="col-sm-1 font-weight-bold">IP</div>
                <div class="col-sm-1 font-weight-bold">IP</div>
                <div class="col-sm-2 offset-sm-1">{{ipnow}}</div>
                <div class="w-100 mb-2"></div>
                <div class="col-sm-1 font-weight-bold">類型</div>
                <div class="col-sm-1 font-weight-bold">Type</div>
                <div class="col-sm-2 offset-sm-1">
                  <div v-for="(item,index) in info.group" :key="index">{{item}}</div>
                </div>
                <div class="col-12" style="padding-top: 3%;"></div>
                <div class="col-12 table-responsive">
                  <table class="table table-sm" cellspacing="0">
                    <thead>
                      <tr style="white-space:nowrap;background-color:#337ab7;">
                        <th id="thead" class="text-size" style="text-align:center;">日期</th>
                        <th id="thead" class="text-size" style="text-align:center;">校內下載</th>
                        <th id="thead" class="text-size" style="text-align:center;">校內上傳</th>
                        <th id="thead" class="text-size" style="text-align:center;">校外下載</th>
                        <th id="thead" class="text-size" style="text-align:center;">校外上傳</th>
                        <th id="thead" class="text-size" style="text-align:center;">總流量</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style="background-color:#FAFAD2;color:#444444;"
                        v-for="(item,index) in netflow.netflow"
                        :key="index"
                      >
                        <th class="text-size" style="text-align:center;">{{item.date}}</th>
                        <th class="text-size" style="text-align:center;">{{(item.lan_download/1)}}</th>
                        <th class="text-size" style="text-align:centerS;">{{(item.lan_upload/1)}}</th>
                        <th class="text-size" style="text-align:center;">{{(item.wan_download/1)}}</th>
                        <th class="text-size" style="text-align:center;">{{(item.wan_upload/1)}}</th>
                        <th
                          class="text-size"
                          style="text-align:center;"
                        >{{((item.lan_download+item.lan_upload+item.wan_download+item.wan_upload)/1)}}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        
            </div>
          </div>
           <div class="col-12" style="padding-top: 1%;"></div>
        </div>
        
        <div class="col-12" style="padding-top: 20%;"></div>
      </div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background";
import { INFO, NETFLOW_USER, IP } from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "User_netflow",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(INFO);
    this.$store.dispatch(IP);
  },
  created: function() {
    let i = 0;
    for (i = 0; i < this.info_IP.length; i++) {
      if (this.info_IP[i].ip === this.$route.params.ip) {
        this.ipnow = this.info_IP[i].ip;
      }
    }
    if (this.ipnow === null) {
      this.$router.push({ name: "Index" });
    }
    this.$store.dispatch(NETFLOW_USER, this.ipnow);
  },
  data() {
    return {
      ipnow: null
    };
  },
  computed: {
    ...mapState({
      info: state => state.profile.info,
      info_IP: state => state.profile.info_IP,
      netflow: state => state.profile.netflow
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
a {
  font-size: 20px;
}
@media screen and (max-width: 600px) {
  div.column {
    width: 50%;
  }
}
#thead:hover {
  background-color: rgba(181, 215, 255, 0.5);
}
</style>

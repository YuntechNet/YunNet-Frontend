<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding-top: 5%;"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 frame rounded-lg"
          style="background-color: rgb(51,51,51,0.6);"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a
                  class="btn btn-default btn-lg"
                  href="./#/Userinfo"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>使用者資訊｜User_netflow</h1>
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
                        v-for="(item,index) in netflow"
                        :key="index"
                      >
                        <th class="text-size" style="text-align:center;">{{item.date}}</th>
                        <th class="text-size" style="text-align:center;">{{item.lan_download}}</th>
                        <th class="text-size" style="text-align:center;">{{item.lan_upload}}</th>
                        <th class="text-size" style="text-align:center;">{{item.wan_download}}</th>
                        <th class="text-size" style="text-align:center;">{{item.wan_upload}}</th>
                        <th class="text-size" style="text-align:center;">0</th>
                      </tr>
                    </tbody>
                  </table>
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
import Background from "@/components/Background"
import { INFO, IP } from "@/store/actions_type"
import { mapState } from "vuex"

export default {
  name: "User_netflow",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(IP)
    this.$store.dispatch(INFO)
  },
  computed: {
    ...mapState({
      info: state => state.profile.info,
      info_IP: state => state.profile.info_IP,
      netflow: state => state.profile.netflow
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
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
#tbody:hover {
  background-color: rgba(199, 244, 244, 0.5);
}
</style>

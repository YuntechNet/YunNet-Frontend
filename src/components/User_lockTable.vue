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
              <h1>鎖卡紀錄｜UserlockTable.</h1>
            </div>
          </div>

          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-12" style="padding-top: 2%;"></div>

          <div class="col-sm-6 offset-sm-3 col-10 offset-1" style="text-align:left;color:white;">
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
                <p style="white-space:nowrap;text-align: center;" class="fontsize-auto-user">ip</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;margin-right:15%;" class="fontsize-auto-user">ip</p>
              </div>
              <div class="col-4 font-weight-bold">
                <p style="white-space:nowrap;font-size:12px;" class="fontsize-auto-user">{{ipnow}}</p>
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
          <div v-show="(this.lock[0].lock_type)" class="col-sm-4 offset-sm-4 col-12">
            <p style="font-size:20px;color:white;background-color:red;">永鎖/中毒申請書</p>
            <button
              type="button"
              class="col-3 btn btn-danger"
              data-toggle="tooltip"
              data-placement="top"
              title="DOC"
              style="margin:1% 1%"
            >DOC</button>
            <button
              type="button"
              class="col-3 btn btn-danger"
              data-toggle="tooltip"
              data-placement="top"
              title="PDF"
              style="margin:1% 1%"
            >PDF</button>
            <button
              type="button"
              class="col-3 btn btn-danger"
              data-toggle="tooltip"
              data-placement="top"
              title="ODT"
              style="margin:1% 1%"
            >ODT</button>
          </div>
          <div class="col-12" style="padding-top: 3%;"></div>
          <div class="col-10 offset-1 table-responsive">
            <table class="table table-sm" cellspacing="0">
              <thead>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <th id="thead" class="text-size" style="text-align:center;">lock_id</th>
                  <th id="thead" class="text-size" style="text-align:center;">lock_type</th>
                  <th id="thead" class="text-size" style="text-align:center;">lock_date</th>
                  <th id="thead" class="text-size" style="text-align:center;">unlock_date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style="background-color:#FAFAD2;color:#444444;"
                  v-for="(item,index) in lock"
                  :key="index"
                >
                  <th class="text-size" style="text-align:center;">{{item.lock_id}}</th>
                  <th class="text-size" style="text-align:center;">{{item.lock_type}}</th>
                  <th class="text-size" style="text-align:center;">{{item.lock_date}}</th>
                  <th class="text-size" style="text-align:center;">{{item.unlock_date}}</th>
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
import { INFO, LOCK, IP } from "@/store/actions_type"
import { mapState } from "vuex"

export default {
  name: "User_lockTable",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(INFO)
    this.$store.dispatch(IP)
  },
  created: function() {
    let i = 0
    for (i = 0; i < this.info_IP.length; i++) {
      if (this.info_IP[i].ip === this.$route.params.ip) {
        this.ipnow = this.info_IP[i].ip
      }
    }
    if (this.ipnow === null) {
      this.$router.push({ name: "Index" })
    }
    this.$store.dispatch(LOCK, this.ipnow)
  },
  data() {
    return {
      ipnow: null
    }
  },
  computed: {
    ...mapState({
      info: state => state.profile.info,
      info_IP: state => state.profile.info_IP,
      lock: state => state.profile.lock
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

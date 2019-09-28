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
              <h1>User Log</h1>
            </div>
          </div>

          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-12" style="padding-top: 2%;"></div>

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

          <div class="pt-5 col-10 offset-1 table-responsive">
            <table class="table table-sm" cellspacing="0">
              <thead>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <th id="thead" class="text-size" style="text-align:center;">Action</th>
                  <th id="thead" class="text-size" style="text-align:center;">Username</th>
                  <th id="thead" class="text-size" style="text-align:center;">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style="background-color:#FAFAD2;color:#444444;"
                  v-for="(item,index) in log[0]"
                  :key="index"
                >
                  <th class="text-size" style="text-align:center;">{{item.action}}</th>
                  <th class="text-size" style="text-align:center;">{{item.username}}</th>
                  <th class="text-size" style="text-align:center;">{{dateformat(item.id)}}</th>
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
import { USER_LOG, INFO } from "@/store/actions_type"

export default {
  name: "User_Log",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(INFO)
    this.$store.dispatch(USER_LOG, this.$route.params.username)
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
      info: state => state.profile.info,
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

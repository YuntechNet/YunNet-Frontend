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
              <h1>System Abuse</h1>
            </div>
          </div>

          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-12" style="padding-top: 2%;"></div>

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
                <p style="white-space:nowrap;margin-right:15%" class="fontsize-auto-user">Department</p>
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
                <p style="white-space:nowrap;" class="fontsize-auto-user">{{ipnow}}</p>
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
          <div class="col-10 offset-1 col-sm-4 offset-sm-4" style="color:white;">
            <b-form @submit.prevent="submit(title,text,date)">
              <b-form-group style="text-align: left;" id="option_group" label="類型">
                <b-form-select v-model="title" :options="options"></b-form-select>
                <b-form-radio
                  v-model="selected"
                  name="some-radios"
                  value="true"
                  style="margin-top:5%;text-align: left;"
                >設定解卡日期</b-form-radio>
                <b-form-radio
                  v-model="selected"
                  name="some-radios"
                  value
                  style="margin-botton:5%;text-align: left;"
                >沒有解卡日期</b-form-radio>
              </b-form-group>
              <b-form-input v-model="date" v-show="!!selected" class="mr-1" id="date" type="date"></b-form-input>

              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="6"
                max-rows="6"
                required
                style="margin-top:5%;"
              ></b-form-textarea>
              <b-button type="submit" variant="btn btn-success btn-lg" style="margin:10px 5px;">送出</b-button>
            </b-form>
          </div>
          <div class="col-12" style="padding-top: 3%;"></div>
        </div>
        <div class="col-12" style="padding-top: 1%;"></div>
      </div>

      <div class="col-12" style="padding-top: 20%;"></div>
    </section>
  </div>
</template>


<script>
import Background from "@/components/Background";
import { SYSTEM_QUERY, SYSTEM_ABUSE } from "@/store/actions_type";
import { mapState } from "vuex";

export default {
  name: "system_abuse",
  components: { Background },
  beforeCreate: function() {
    this.$store.dispatch(SYSTEM_QUERY, this.$route.params.uid);
  },
  created: function() {
    let i = 0;
    for (i = 0; i < this.info.ip.length; i++) {
      if (this.info.ip[i].ip === this.$route.params.ip) {
        this.ipnow = this.info.ip[i].ip;
      }
    }
    if (this.ipnow === null) {
      this.$router.push({ name: "Index" });
    }
  },
  data() {
    return {
      ipnow: null,
      selected: null,
      date: null,
      title: null,
      text: null,
      options: [
        { value: "Overflow", text: "Overflow" },
        { value: "Abuse智慧財產權", text: "Abuse智慧財產權" },
        { value: "Abuse病毒", text: "Abuse病毒" },
        { value: "Abuse其他", text: "Abuse其他" }
      ]
    };
  },
  methods: {
    submit(title, text) {
      let reason = text;
      let ip = this.ipnow;
      let datenow = this.date;
      this.$store.dispatch(SYSTEM_ABUSE, { datenow, reason, title, ip });
    }
  },

  computed: {
    ...mapState({
      info: state => state.system.info
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

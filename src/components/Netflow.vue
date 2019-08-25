<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding-top: 5%;"></div>
        <div class="col-10 offset-1 frame rounded-lg" style="background-color:rgb(51,51,51,0.6);">
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
                <h1>Netflow</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div>
            <div>
              <div class="d-flex justify-content-center">
                <b-form inline class="mb-2" @submit="query">
                  <b-form-input v-model="form.date" class="mr-1" id="date" type="date"></b-form-input>
                  <b-input v-model="form.ip" class="mr-1" id="ip" placeholder="Ipv4 / Ipv6"></b-input>
                  <b-button type="submit" variant="btn btn-primary">查詢</b-button>
                </b-form>
              </div>
            </div>
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
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
export default {
  name: "Netflow",
  components: {
    Background
  },
  data() {
    return {
      form: {
        date: "",
        ip: ""
      },
      netflow: [
        {
          date: "2020-1-4",
          lan_download: 500,
          lan_upload: 600,
          wan_download: 32767,
          wan_upload: 1024
        },
        {
          date: "2020-1-3",
          lan_download: 7,
          lan_upload: 87,
          wan_download: 6,
          wan_upload: 3
        },
        {
          date: "2020-1-2",
          lan_download: 500,
          lan_upload: 600,
          wan_download: 32767,
          wan_upload: 1024
        },
        {
          date: "2020-1-1",
          lan_download: 7,
          lan_upload: 87,
          wan_download: 6,
          wan_upload: 3
        }
      ]
    }
  },
  methods: {
    query: function() {}
  }
}
</script>

<style scoped>
tr {
  color: white;
}
hr {
  background-color: white;
}
#thead:hover {
  background-color: rgba(181, 215, 255, 0.5);
}
</style>

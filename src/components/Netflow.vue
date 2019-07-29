<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding-top: 5%;"></div>
        <div class="col-10 offset-1" style="background-color:rgb(51,51,51,0.6);">
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
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
                <tr class="bg-warning" style="white-space:nowrap;">
                  <th id="thead" class="text-size" style="text-align:center;">Rank</th>
                  <th id="thead" class="text-size" style="text-align:center;">IP</th>
                  <th id="thead" class="text-size" style="text-align:center;">校內上傳</th>
                  <th id="thead" class="text-size" style="text-align:center;">校內下載</th>
                  <th id="thead" class="text-size" style="text-align:center;">校外上傳</th>
                  <th id="thead" class="text-size" style="text-align:center;">校外下載</th>
                  <th id="thead" class="text-size" style="text-align:center;">校內總量</th>
                  <th id="thead" class="text-size" style="text-align:center;">校外總量</th>
                  <th id="thead" class="text-size" style="text-align:center;">總共流量</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-info">
                  <th class="text-size" style="text-align:center;">1</th>
                  <th class="text-size" style="text-align:center;">140.125.111.111</th>
                  <th class="text-size" style="text-align:center;">0.0B</th>
                  <th class="text-size" style="text-align:center;">0.0B</th>
                  <th class="text-size" style="text-align:center;">0.0B</th>
                  <th class="text-size" style="text-align:center;">16.89KB</th>
                  <th class="text-size" style="text-align:center;">0.0B</th>
                  <th class="text-size" style="text-align:center;">16.89KB</th>
                  <th class="text-size" style="text-align:center;">16.89KB</th>
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
      }
    }
  },
  methods: {
    query: function() {}
  }
}
</script>

<style >
32
tr {
  color: white;
}
hr {
  background-color: white;
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
@media screen and (max-width: 600px) {
  th {
    font-size: 10px;
  }
}
</style>

<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div
          class="col-10"
          style="margin:0px auto; padding:40px 50px 0px; top:60px;background-color:rgb(51,51,51,0.6);"
        >
          <div class="row">
            <div class="col-12">
              <div class="float-left">
                <h1>Lock Table - Dormitory</h1>
              </div>
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div style="text-align:left;">
            <a href="./#/universal_lock" class="btn btn-primary active">Universal</a>
            <a style="padding:0px 5px;"></a>
            <a href="./#/dormitory_lock" class="btn btn-primary active">Dormitory</a>
          </div>
          <hr />
          <div class="d-flex justify-content-center">
            <b-form inline class="mb-2" @submit="query">
              <b-form-input v-model="form.date" class="mr-1" id="date" type="date"></b-form-input>
              <b-input v-model="form.ip" class="mr-1" id="ip" placeholder="Ipv4 / Ipv6"></b-input>
              <b-button type="submit" variant="btn btn-primary">查詢</b-button>
            </b-form>
          </div>
          <div class="col-12 table-responsive">
            <table class="table sortable table-sm" style="color: black;" cellspacing="0">
              <thead>
                <tr class="bg-primary" style="white-space:nowrap;">
                  <th style="text-align:center;" class="nosort">Lock_Date</th>
                  <th style="text-align:center;" class="nosort">Unlock_Date</th>
                  <th style="text-align:center;" class="nosort">IP</th>
                  <th style="text-align:center;" class="nosort">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-info">
                  <th class="text-size" style="text-align:center;">2019/7/6</th>
                  <th class="text-size" style="text-align:center;">140.125.444.444</th>
                  <th class="text-size" style="text-align:center;">453254.0B</th>
                  <th class="text-size" style="text-align:center;">0453453.0B</th>
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
  name: "Dormitory_lock",
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
h1,
tr {
  color: white;
}
hr {
  background-color: white;
}
@media screen and (max-width: 600px) {
  th {
    font-size: 15px;
  }
}
</style>

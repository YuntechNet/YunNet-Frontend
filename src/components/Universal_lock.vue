<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:5%;"></div>
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
                <h1>Lock Table - Universal</h1>
              </div>
            </div>
          </div>
          <hr />

          <div class="col-12 col-sm-10 offset-sm-1" style="text-align:left;">
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
            <table class="table table-sm" style="color: black;" cellspacing="0">
              <thead>
                <tr style="white-space:nowrap;background-color:#337ab7;">
                  <th id="thead" style="text-align:center;" class="nosort">Lock_Date</th>
                  <th id="thead" style="text-align:center;" class="nosort">IP</th>
                  <th id="thead" style="text-align:center;" class="nosort">Department</th>
                  <th id="thead" style="text-align:center;" class="nosort">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background-color:#FAFAD2;color:#444444;">
                  <th id="tbody" style="text-align:center;">2019/7/6</th>
                  <th id="tbody" style="text-align:center;">140.125.444.444</th>
                  <th id="tbody" style="text-align:center;">453254.0B</th>
                  <th id="tbody" style="text-align:center;">0453453.0B</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12" style="padding:5%;"></div>
      </div>
    </section>
  </div>
</template>
   
<script>
import Background from "@/components/Background"
export default {
  name: "Universal_lock",
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

<style scoped>
h1,
tr {
  color: white;
}
hr {
  background-color: white;
}
#thead:hover {
  background-color: rgba(181, 215, 255, 0.5);
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 35px;
  }
  th {
    font-size: 15px;
  }
}
</style>

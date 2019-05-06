<template>
  <div class="row">
    <div id="BK" class="col-12 " style="position:fixed">
    <section class="container-fluid">
      <div class="row">
        <div class="col-10" style="margin:0px auto; padding:40px 50px 0px; top:60px;background-color:rgb(51,51,51,0.6);">
          <div class="row">
            <div class="col-12">
              <div class="float-left">
                <h1>Lock Table - Universal</h1>
              </div>
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;"><font-awesome-icon icon="times" /></a>
              </div>
            </div>
          </div>
          <hr>
          <div style="text-align:left;">
            <a href="./#/universal_lock" class="btn btn-primary active">Universal</a>
            <a href="./#/dormitory_lock" class="btn btn-primary active" style="margin:0px 4px;">Dormitory</a>
          </div>
          <hr> 
          <div class="form-group" >
            <div class="form-inline">
              <div style="margin:0px 0px 0px 340px;"><date-picker v-model="time1" valueType="format" :first-day-of-week="1"placeholder="Date"></date-picker></div>
                <input type="text" name="query_ip" style="width: 170px; margin:0px 4px; display: inline;" placeholder="Ipv4 / Ipv6" id="query_ip" class="form-control input-lg">
                <input id="query_btn" class="btn btn-primary" type="submit" value="查詢">
            </div>
          </div>
          <table class="table table-hover sortable" style="color: black;" cellspacing="0" width="100%">
            <thead>
              <tr class="bg-primary">
                <th style="text-align:center;" class="nosort" >Lock Date</th>
                <th style="text-align:center;" class="nosort" >Unlock Date</th>
                <th style="text-align:center;" class="nosort" >IP</th>
                <th style="text-align:center;" class="nosort" >Reason</th>
              </tr>
            </thead>
          <tbody>
          </tbody>
          </table>
        </div> 
      </div>
    </section>
  </div>
 </div> 
</template>


<script>

export default {
  name: 'Dormitory_lock',
  data: function () {
    return {
      User: '123',
      Depart: '123',
      Name: '123',
      IP: '123',
      Mac: '123',
      Portal: '123',
      Type: '123',
      Status: '123'
    }
  }
}

</script>
<script>
  
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Universal_lock',
  components: { DatePicker },
  data() {
    return {
      time1: '',
      time2: '',
      time3: '',
      // custom lang
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Select Date',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
    }
  }
}
</script> 


<style >
  h1, tr {
   color: white;
  }
  hr{
    background-color: white;
  }
   #BK{
    background: url('https://yunnet.yuntech.edu.tw/static/stylish-portfolio/img/bg_test8_compress.jpg') center center fixed no-repeat;
    margin: 0;
    padding: 0;
    height:100vh;
    -moz-background-size:cover;
    background-size:cover;
    background-repeat:no-repeat;
  }
</style>

<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding-top: 5%;"></div>
        <div class="col-12 col-sm-10 offset-sm-1 frame" style="background-color: rgb(51,51,51,0.6);">
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
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
              <div class="row">
                <div class="col-11 offset-1">
                <center>
                    <table style="text-align:left;">
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a>使用者｜User</a>
                          </th>
                          <td align="left">
                            <div style="margin:0px 20px"><a>{{ User }}</a></div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row"><a>部門｜Depart</a></th>
                          <td align="left">
                            <div style="margin:0px 20px"><a>{{ Depart }}</a></div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row"><a>姓名｜Name</a></th>
                          <td align="left">
                            <div style="margin:0px 20px"><a>{{ Name }}</a></div>
                          </td>
                        </tr>
                       
                     
                        <tr align="left">
                          <th scope="row"><a>狀態｜Status</a></th>
                          <td>
                            <div style="margin:0px 20px"><a>{{ Status }}</a></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                   </center>
                  
                </div>
                <div class="col-12" style="padding-top: 3%;"></div>
                <div class="col-12 table-responsive">
                  <table class="table table-sm" cellspacing="0">
                    <thead>
                      <tr class="bg-warning" style="white-space:nowrap;">
                        <th id="thead" class="text-size" style="text-align:center;">管理IP</th>
                        <th id="thead" class="text-size" style="text-align:center;">MAC</th>
                        <th id="thead" class="text-size" style="text-align:center;">編輯</th>
                        <th id="thead" class="text-size" style="text-align:center;">敘述</th>
                        <th id="thead" class="text-size" style="text-align:center;">校外總量</th>
                        <th id="thead" class="text-size" style="text-align:center;">瀏覽紀錄</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="tbody" class="bg-info">
                        <th class="text-size" style="text-align:center;">140.125.207.210</th>
                        <th class="text-size" style="text-align:center;">111111111111</th>
                        <th class="text-size" style="text-align:center;">000</th>
                        <th class="text-size" style="text-align:center;">SWgsfdgsegaergrweagreg</th>
                        <th class="text-size" style="text-align:center;">16.89KB</th>
                        <th class="text-size" style="text-align:center;">檢視</th>
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
export default {
  name: "Userinfo",
  components: { Background },
   data() {
    return {
      User: " B10713104",
      Depart: " 四電子一B",
      Name: "林子崴",

      Status: "已使用/已註冊"
    }
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
a{
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

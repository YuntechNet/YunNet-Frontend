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
                <h1>使用者資訊｜User Info.</h1>
              </div>
            </div>

            <div class="col-10 offset-1">
              <hr />
            </div>
            <div class="col-12">
              <div class="d-flex justify-content-center">
                <div class="btn btn-info column" href="./#/change_password">
                  更改密碼
                  <br />Change Password
                </div>

                <div class="btn btn-info column" href="./#/change_mac">
                  更換MAC卡號
                  <br />Change MAC
                </div>
              </div>
            </div>
            <div class="col-12" style="padding-top: 2%;"></div>
            <div class="col-10 offset-1">
              <div class="row">
                <div class="col-11 offset-1">
                  <div class="d-flex justify-content-center">
                    <table style="text-align:left;">
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a style="font-size:13px;">使用者</a>
                            <a style="margin:0px 2px;">|</a> User
                          </th>
                          <td align="left">
                            <div style="margin:0px 20px">{{ User }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">部門｜Depart</th>
                          <td align="left">
                            <div style="margin:0px 20px">{{ Depart }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">姓名｜Name</th>
                          <td align="left">
                            <div style="margin:0px 20px">{{ Name }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">IP&nbsp; &nbsp;</th>
                          <td>
                            <div style="margin:0px 20px">{{ IP }}&nbsp; &nbsp;&nbsp; &nbsp;</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">Mac</th>
                          <td>
                            <div style="margin:0px 20px">{{ Mac }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">戶號｜Portal</th>
                          <td>
                            <div style="margin:0px 20px">{{ Portal }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">床型｜Type</th>
                          <td>
                            <div style="margin:0px 20px">{{ Type }}</div>
                          </td>
                        </tr>
                        <tr align="left">
                          <th scope="row">狀態｜Status</th>
                          <td>
                            <div style="margin:0px 20px">{{ Status }}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                   
                  </div>
                </div>
                <div class="col-12" style="padding-top: 3%;"></div>
                <div class="col-12 table-responsive">
                  <table class="table table-sm" cellspacing="0">
                    <thead>
                      <tr class="bg-warning">
                        <th id="thead" class="text-size" style="text-align:center;">月份日期</th>
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
                      <tr id="tbody" class="bg-info">
                        <th class="text-size" style="text-align:center;">2019/7/6</th>
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
      IP: "140.125.201.107",
      Mac: "70-8B-CD-12-F5-DC",
      Portal: "A2101",
      Type: "一般房 ",
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
th.text-size {
  font-size: 15px;
}
a.display {
  display: block;
}

@media screen and (max-width: 600px) {
  div.column {
    width: 50%;
  }
  th.text-size {
    font-size: 12px;
  }
  a.display {
    display: none;
  }
}
#thead:hover {
  background-color: rgba(245, 233, 132, 0.5);
}
#tbody:hover {
  background-color: rgba(199, 244, 244, 0.5);
}
</style>

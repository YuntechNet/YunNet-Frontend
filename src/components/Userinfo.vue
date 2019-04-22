<template>
  <div class="row">
    <background /> 
    <section class="container-fluid">
      <div class="row">
        <div class="col-8" style="margin:0px auto; padding:40px 50px 0px; top:60px;background-color:#3d3d3d;">
          <div class="row">
            <div class="col-12">
              <div class="float-left">
                <h1>使用者資訊｜User Info.</h1>
              </div>
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;"><font-awesome-icon icon="times" /></a>
              </div>
            </div>
          </div>
          <hr>  
          <div style="text-align:left;">
            <div class="d-inline-block" >
              <a class="btn btn-primary " href="./#/change_password">更改密碼<br>Change Password</a>
            </div> 
            &nbsp
            <div class="d-inline-block">
              <a class="btn btn-primary" href="./#/change_mac">更換MAC卡號<br>Change MAC</a>
            </div>
          </div>
          <div style="text-align:center;" > 
            <div class="d-inline-block" style="height:300px;">
              <table  align="center">
                <tr align="left">使用者｜User
                  <td align="left"> &nbsp&nbsp&nbsp&nbsp{{ User }}</td>
                </tr>
                <tr align="left">部門｜Depart
                  <td align="left"> &nbsp&nbsp&nbsp&nbsp{{ Depart }}</td>
                </tr>
                <tr align="left">姓名｜Name
                  <td align="left"> &nbsp&nbsp&nbsp&nbsp{{ Name }}</td>
                </tr>
                <tr align="left">IP｜IP
                  <td> &nbsp&nbsp&nbsp&nbsp{{ IP }}</td>
                </tr>
                <tr align="left">MAC｜Mac
                  <td> &nbsp&nbsp&nbsp&nbsp{{ Mac }}</td>
                </tr> 
                <tr align="left">戶號｜Portal
                  <td> &nbsp&nbsp&nbsp&nbsp{{ Portal }}</td>
                </tr> 
                <tr align="left">Type
                  <td> &nbsp&nbsp&nbsp&nbsp{{ Type }}</td>
                </tr> 
                <tr align="left">狀態｜Status
                  <td> &nbsp&nbsp&nbsp&nbsp{{ Status }}</td> 
                </tr>
              </table>
            </div>
            &nbsp&nbsp
            <div class="d-inline-block" style="height:300px;">
              <td rowspan="9" style="width: 50px;">
                <center><a style="color: pink;" href="http://www.google.com.tw"><img class="hidden-xs" src="https://ppt.cc/qr/fW46Dx">
                <p>點擊加入YunTech網路流量粉絲團。<br></p><div class="hidden-xs">掃描QRCode即可隨時追蹤網路狀態！</div><p></p></a>    
                </center>
              </td>
            </div>
          </div>
          <div style="text-align:left;">
            <table class="table table-hover" style="color: black;" cellspacing="0">
              <tr class="bg-primary">
                  <th style="text-align:center;">日期</th>
                  <th style="text-align:center;">校內上傳</th>
                  <th style="text-align:center;">校內下載</th>
                  <th style="text-align:center;">校外上傳</th>
                  <th style="text-align:center;">校外下載</th>
                  <th style="text-align:center;">校內總量</th>
                  <th style="text-align:center;">校外總量</th>
                  <th style="text-align:center;">總流量</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Background from '@/components/Background'
export default {
  name: 'Userinfo',
  components: { Background },
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


<style >
  h1, tr ,td{
   color: white;
  }
  hr{
    background-color: white;
  }
</style>

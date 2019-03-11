<template>
  <div class="row">
    <div id="BK" class="col-12">
      <div class="col-9 " style="margin:0px auto; top: 60px;background-color:#3d3d3d;">
        <div style="text-align:left;">
          <br>
          <h1>使用者資訊｜User Info.</h1>
          <hr>  
          <br>
        </div>
        <div style="text-align:left;">
          <div class="d-inline-block" >
            <a class="btn btn-primary " href="/#/change_password">更改密碼<br>Change Password</a>
          </div> 
          &nbsp
          <div class="d-inline-block">
            <a class="btn btn-primary" href="/#/change_mac">更換MAC卡號<br>Change MAC</a>
          </div>
        </div>
        <div style="text-align:center;"> 
          <table  align="center">
            <tr align="left">使用者｜User
              <td align="left"> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr>
            <tr align="left">部門｜Depart
              <td align="left"> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr>
            <tr align="left">姓名｜Name
              <td align="left"> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr>
            <tr align="left">IP｜IP
              <td> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr>
            <tr align="left">MAC｜Mac
              <td> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr> 
            <tr align="left">戶號｜Portal
              <td> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr> 
            <tr align="left">Type
              <td> &nbsp&nbsp&nbsp&nbsp123</td>
            </tr> 
            <tr align="left">狀態｜Status
              <td> &nbsp&nbsp&nbsp&nbsp123</td> 
            </tr>                                                                                             
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Userinfo',
}


</script>


<style >
  #BK{
    background: url('https://yunnet.yuntech.edu.tw/static/stylish-portfolio/img/bg_test8_compress.jpg') center center fixed no-repeat;
    margin: 0;
    padding: 0;
    height:100vh;
    -moz-background-size:cover;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: scroll; 
  }
  h1{
   color: white;
  }
  hr{
    background-color: white;
  }
 tr,td{
   color: white;
 }
</style>

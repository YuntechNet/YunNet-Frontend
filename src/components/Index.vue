<template>
  <div id="index" class="row">
    <div id="content" class=" col-10 " >  
      <div class="container-fluid">
        <div class="row">
          <div id="top" class="col-12">
            <div style="height: 70px; position: absolute; top:50%; left: 50%; margin: -40px 0 0 -255px;top: 40%;">                    
              <h1 style="margin: 0; padding: 0; font-size: 3.8em; font-weight: 600;">YunNET 雲科網管</h1>
            </div>
            <div  style="height:46px; position: absolute; left: 50%; bottom: 30px; margin: 0 0 0 -91px;">
              <a href="./#/regist" class="btn btn-dark btn-lg"><b>Register Network</b></a>    
            </div>
          </div>
          <div id="announce" class="col-12 bg-primary">
            <br>
            <span style="color:#e0e0e0;"><h1>公告｜Announce</h1></span>
            <hr style="background-color: #e0e0e0">
          </div>
          <div id="find_us" class="col-12 ">
            <p></p>
            <h1>關於我們｜Find Us!</h1>
            <hr>
            <img src="https://i.imgur.com/7PChQEl.png" height="300vh">
            <table align="center">
              <tbody><tr>
                <td>周一至周五</td>
                <td rowspan="2"><div style="padding: 10px;">C1 宿舍服務中心 網管小組</div></td>
              </tr>
              <tr><td style="padding-bottom: 7px;">19:00 - 21:00</td></tr>
              <tr><td colspan="3">逢國定假日或人事行政局公告停班停課不處理一般業務.</td></tr>
              <tr></tr><tr></tr><tr></tr>
              </tbody>
            </table>
            <p></p>
            <p></p>
          </div> 
          <div class="col-12 bg-primary">
            <footer>
              <p></p>
              <p  style="color:#ffffff;">Copyright © 2019 Yuntech Network Management. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>  
    </div> 
    <navigator class="col-2"/> 
  </div>  
</template>


<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'Index',
  components: { Navigator }
}
</script>


<style scoped>
  #index #content{
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #top{
    background: url('https://yunnet.yuntech.edu.tw/static/stylish-portfolio/img/bg_test8_compress.jpg') center center fixed no-repeat;
    margin: 0;
    padding: 0;
    height:100vh;
    -moz-background-size:cover;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: scroll; 
  }
</style>

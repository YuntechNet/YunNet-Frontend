<template>
  <div id="index" class="row">
    <div id="index-content" class="col-10">
      <div id="top" class="col-xs-12 header transition-0-5 background" style="height: 979px;">
        <div style="height: 70px; width:510px; position: absolute; top:50%; left: 50%; margin: -35px 0 0 -255px;top: 40%;">                    
          <h1 style="margin: 0; padding: 0; font-size: 4em; font-weight: 600;">YunNET 雲科網管</h1>
        </div>
        <div style="width: 106px; height:46px; position: absolute; left: 50%; bottom: 30px; margin: 0 0 0 -91px;">
          <a href="/regist" class="btn btn-dark btn-lg"><b>Register Network</b></a>
        </div>
      </div>
    </div>
    <navigator class="col-2"/>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'index',
  components: { Navigator }
}
</script>

<style scoped>
  #navigator, #index-content {
    margin: 0;
    padding: 0;
  }
  #top {
    background: url('https://yunnet.yuntech.edu.tw/static/stylish-portfolio/img/bg_test8_compress.jpg') no-repeat center center scroll;
  }
</style>
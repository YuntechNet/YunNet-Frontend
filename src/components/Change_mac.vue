<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div class="col-10 offset-1 frame" style="background-color: rgb(51, 51, 51,0.6);">
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>Change Mac</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>

          <div class="col-sm-4 offset-sm-4 col-10 offset-1" style="color: white;">
            <div style="text-align:left;">
              <div class="form-group">
                <label>當前 MAC 卡號</label>
                <p class="form-contro-static">70-8B-CD-12-F5-DC</p>
              </div>
              <label>新 MAC 卡號</label>
            </div>
            <div class="form-group">
              <div style="display:inline;float:left;">
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
                <label>:</label>
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
                <label>:</label>
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
                <label>:</label>
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
                <label>:</label>
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
                <label>:</label>
                <b-form-input
                  type="text"
                  id="new_mac1"
                  v-model="mac"
                  style="height:25px;width:44px;display:inline;"
                  maxlength="2"
                ></b-form-input>
              </div>
            </div>

            <div class="submit" style="margin-top:60px;text-align:left;">
              <input class="btn btn-primary" type="submit" value="確定" />
              <input class="btn btn-danger" type="reset" value="重填" />
            </div>

            <ul>
              <li>本系統於每日 12:00 am 和 12:00 pm 連接網路設備更新有更動之使用者網路卡卡號，請耐心等候下次更新時間。</li>
              <li>輸入之 MAC 格式可為下列型式: xx-xx-xx-xx-xx-xx, xx:xx:xx:xx:xx:xx, xxxx.xxxx.xxxx</li>
            </ul>
          </div>
          <div class="col-10 offset-1">
            <div class="row" style="color: WHITE;">
              <div class="col-sm-4 col-12">
                <strong>Windows XP System.</strong>
                <iframe style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8STVnRmF0bS0zdFE/preview"
                
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-sm-4 col-12" >
                <strong>Windows 7 / 8 / 8.1 / 10 System.</strong>
                <iframe style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8Y1NsdFlLUDUybmc/preview"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-sm-4 col-12">
                <strong>MAC OS ---System.</strong>
                <iframe style="width:100%;height:80%"
                  src="https://drive.google.com/file/d/0B7hvpkydNrx8eTZJRjVnYUdVMHM/preview" 
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
         <div class="col-10 offset-1 frame " style="background-color:rgb(51, 51, 51,0.6);height:6vh;"></div>
        <div class="col-12" style="padding:10%;"></div>
      </div>
    </section>
  </div>
</template>
<script>
import Background from "@/components/Background"
export default {
  name: "Change_mac",
  components: {
    Background
  }
}
</script>
<style scoped>
hr {
  background-color: white;
}

@media screen and (max-width: 800px) {
  iframe {
    width: 170px;
    height: 140px;
  }
}
</style>

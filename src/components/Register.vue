    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 regist frame"
          
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon class="icon" icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>Regist - Contract</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-10 offset-1" style="color: white;text-align: left;">
            <p>
              請各位住宿生注意：
              <br />申請網路前請先詳閱以上管理辦法及規定，若不同意請勿申請，以免使用上誤觸規則遭到校規處分。
              而填寫申請資料時，亦請務必依照申請表格各欄位指示確實填寫，以免因為錯誤資料而延誤您使用網路啟用的時間。
              (網路卡卡號輸入錯誤，將導致無法使用網路，請務必加以確認！)
            </p>
            <p>
              申請時若遭遇問題，請至
              <span class="title" id="egg">網路管理小組</span>求助。
            </p>

            <p class="title">請看完詳細條款再行註冊，註冊後等同您同意遵守本條款約定，請細心閱讀，以免您的權利受損!!</p>
            <div style="height:80vh;">
              <iframe
                id="contract"
                name="contract"
                width="100%"
                height="100%"
                src="./#/contract"
                style="background-color: white;"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 regist1 frame"
         
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>Regist - Application Form</h1>
              </div>
            </div>
            <div class="col-10 offset-1">
              <hr />
            </div>
            <div class="col-10 offset-1">
              <p style="color:white;margin:0px auto;white-space:nowrap;">學號格式:限定字母全大寫。</p>
              <p style="color:white;margin:0px auto;white-space:nowrap;">床位格式:</p>
              <p
                style="color:white;margin:0px auto;white-space:nowrap;"
              >Example1: A3棟108房4床 </p>
              <p>A3108-4 | (棟別,房號)-(床號)</p>
              <p
                style="color:white;margin:0px auto;white-space:nowrap;"
              >Example2: F棟102房2床</p>
               <p>E2102-2 | (棟別,房號)-(床號)</p>
              <div class="row">
                <div class="col-12">
                  <p>
                    <label for="student_id">學號/臨時卡號｜Student ID/Access Card Number：</label>
                    <input type="text" name="student_id" required id="student_id" class="input" />
                  </p>
                </div>
                <div class="col-12">
                  <p>
                    <label for="bed">床位｜Bed：</label>

                    <input class="input" type="text" name="bed" required id="bed" />
                  </p>
                </div>

                <div class="col-12">
                  <b-button class="button" variant="info">
                    <p style="margin:auto auto;">Button</p>
                  </b-button>
                </div>
              </div>
          
            </div>
          </div>
        </div>
        <div class="col-12" style="padding:10%;"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"

export default {
  name: "Register",
  components: {
    Background
  }
}
</script>

<style scoped>
hr {
  background-color: white;
}
p,
label {
  color: white;
  font-size: 1em;
  font-weight: 400;
}
.title {
  font-size: 1.2em;
  color: red;
  font-weight: 900;
}
button {
  height: 40px;
}
.regist{background-color: rgb(51, 51, 51,0.6);
height:140vh;

}
.regist1{
   background-color: rgb(51, 51, 51,0.6);height:70vh;
}

@media screen and (max-width: 600px) {
  p {
    
    font-weight: 400;
  }
  .title {
  
    color: red;
    font-weight: 400;
  }
  
  .input {
    
  }
  .button {
 
  }
  .regist{background-color: rgb(51, 51, 51,0.6);
height:180vh;

}
.regist1{
   background-color: rgb(51, 51, 51,0.6);height:100vh;
}
}
</style>
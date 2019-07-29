    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div class="col-12 col-sm-4 offset-sm-4" style="background-color: rgb(51, 51, 51,0.6);">
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./#/login" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>Set Password</h1>
              </div>
            </div>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-12" style="text-align: left;">
            <div class="alert alert-danger" role="alert" style="font-size: 16px;">
              <strong>注意!!</strong>
              <br />Before using this feature, please make sure that your school mailbox (XXXX@yuntech.edu.tw) is fully equipped and can be used normally, otherwise you will not receive a verification letter.
              <br />使用此功能前，請先確定您的學校信箱(XXXX@yuntech.edu.tw)容量充足且能正常使用，否則將無法收到驗證信。
            </div>
            <label for="student_id" style="color:white;">學號｜Student ID：</label>
            <input type="text" name="student_id" required id="student_id" class="form-control" />
            <input class="btn btn-primary" type="submit" value="送出｜Submit" />
            <input class="btn btn-danger" value="清除｜Reset" type="reset" />
            <div class="col-12" style="padding:3%;"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"

export default {
  name: "Forgot_password",
  components: {
    Background
  },
  data() {
    return {}
  }
}
</script>

<style>
hr {
  background-color: white;
}
</style>

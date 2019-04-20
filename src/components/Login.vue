<template>
  
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div  class="col-6"style="margin:0px auto; padding:40px 50px; top:60px;background-color:#3d3d3d;">
          <div class="row">
            <div class="col-12">
              <div class="float-left">
                <h1>Login</h1>
              </div>
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="/" style="background-color: white;"><font-awesome-icon icon="times" /></a>
              </div>
            </div>
          </div>
          <hr>
          <div>
            <form id="query_form" action="/login" method="POST" accept-charset="utf-8" style="font-size:20px;">
              <div class="form-group">
                <p>
                  <label for="account" class="float-left" >帳號(學號) / 床位｜Username(Std. ID)/Bed：</label>
                  <input type="text" name="account" style="height: 40px; font-size: 16px;" maxlength="12" required="" placeholder="Account" class="form-control" id="account">
                </p>
                <p>
                  <label for="password" class="float-left">密碼｜Password：</label>
                  <input type="password" name="password" style="height: 40px; font-size: 16px;" maxlength="40" required="" placeholder="Password" class="form-control" id="password">
                </p>
                  <div class="row" style="padding:10px">
                    <div style="margin:0px auto;">
                      <vue-recaptcha sitekey="6LdzRp8UAAAAADpyIETm-RB-W7I44aPP9EAErIhH" class="align-self-center">  
                      </vue-recaptcha>
                    </div>
                  </div>
                <div>
                  <a class="btn btn-primary btn-lg" href="/regist">註冊｜Regist</a>
                  <a class="btn btn-danger btn-lg" href="/forgot_password">忘記密碼｜Forget Password</a>
                  <a class="btn btn-success btn-lg"type="submit">登入｜Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from '@/components/Background'
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: 'Login',
  components: { Background,VueRecaptcha},
}
</script>

<style>
  h1, tr ,td, label{
   color: white;
  }
  hr{
    background-color: white;
  }
</style>


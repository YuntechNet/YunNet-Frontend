<template>
  <div id="navigator">
    <div id="navbar" class="transition-0-5 background" style="position: fixed; width: 100%; background-color: rgb(51, 51, 51); height: 979px;">
      <div style="margin: 2% 0;">
        <ul class="sidebar-nav">
          <li class="visible-sm visible-lg visible-md sidebar-brand"><a href="#top">YunNET 雲科網管</a></li>                  
          <li>
            <a href="/login">
              <div class="visible-sm visible-md visible-lg"><span class="glyphicon glyphicon-log-in"> 登入｜Login</span></div>
              <div class="hidden-sm hidden-md hidden-lg"> 登入｜Login</div>
            </a>
          </li>                                   
          <div style="position: fixed; bottom: 0px; width: 100%;">
            <li><a href="#top">首頁｜Home</a></li>
            <li><a href="/regist">註冊｜Register</a></li>
            <li><a href="/netflow?page=ipv4">流量｜Netflow</a></li>
            <li><a href="/user_contract">規範｜Contract</a></li>
            <li><a href="/universal_lock">鎖卡列表｜Lock Table</a></li>
            <li><a href="#announce">公告｜Announce</a></li>
            <li><a href="#find_us">關於｜Find Us</a></li>
            <hr>                    
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator'
}
</script>

<style>
  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>

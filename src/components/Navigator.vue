<template>
  <div id="navigator" class="row">
    <div id="navbar" class="transition-0-5 background" style="position: fixed; width: 100%; background-color: rgb(51, 51, 51); height: 100%;">
      <div style="margin: 2% 0;">
        <ul class="sidebar-nav">
          <li class="visible-sm visible-lg visible-md sidebar-brand"><a href="#top" style="font-size:19px;"><div id="yunnet-button">YunNET 雲科網管</div></a></li>                  
          
          <li>           
            <a href="/login">
                <div class="visible-sm visible-md visible-lg"><octicon name="zap" flip="vertical"> 登入｜Login</octicon></div>
                <div class="hidden-sm hidden-md hidden-lg"> 登入｜Login</div>
            </a>
            
          </li>                                   
          <div style="position: fixed; bottom: 0px; width: 100%;">
            <li><a href="#top"><div id="button">首頁｜Home</div></a></li>
            <li><a href="/regist"><div id="button">註冊｜Register</div></a></li>
            <li><a href="/netflow?page=ipv4"><div id="button">流量｜Netflow</div></a></li>
            <li><a href="/user_contract"><div id="button">規範｜Contract</div></a></li>
            <li><a href="/universal_lock"><div id="button">鎖卡列表｜Lock Table</div></a></li>
            <li><a href="#announce"><div id="button">公告｜Announce</div></a></li>
            <li><a href="#find_us"><div id="button">關於｜Find Us</div></a></li> 
            <hr style="background-color: #e0e0e0">                  
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
    -moz-background-size: cover;
    background-size: cover;
  }
  #yunnet-button {
    background-color:rgb(51, 51, 51);
    border: none;
    color: rgba(255, 255, 255, 0.432);
    padding: 0px 18px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    width:100%;
    height:30px;
    margin: 11px 2px;
    cursor: pointer;
  }
  #yunnet-button:hover {
    color: white;
  }
  #button {
    background-color:rgb(51, 51, 51);
    border: none;
    color:  rgba(255, 255, 255, 0.432);
    padding: 6px 15px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    width:100%;
    height:40px;
    margin: 0px 3px;
    cursor: pointer;
    font-size:16px;
}
  #button:hover {
    background-color: rgb(107, 107, 107); 
    color: white;
}
</style>

<template>
<div class="notfound-box">
  <div class="notfound-shadow">
    <h1>404</h1>
    <p class="tc">找不到您要访问的页面：<router-link to="/login">登录</router-link></p>
  </div>
</div>
</template>
<script>
export default {}
</script>
<style>
.notfound-shadow { position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); margin-top:-40px;}
.notfound-shadow h1{ font-size: 170px; line-height:180px; color:#fff; text-shadow: 0 1px 0 #dee5e7, 0 2px 0 #fcfdfd, 0 5px 10px rgba(0, 0, 0, 0.125), 0 10px 20px rgba(0, 0, 0, 0.2);}
.notfound-shadow p,
.notfound-shadow p a{font-size:14px; color:#98a6ad; padding:0 3px;}
.notfound-shadow p a:hover{color:#19a9d5;}
.notfound-box .min-footer{position:absolute; width:100%; left:0; bottom:20px;}
</style>

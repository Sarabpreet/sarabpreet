<template>
  
<div id="app">
 
<!-- 
  <nav class="navbar  has-text-centered container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
 

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
<div id="navbar" class="navbar-menu has-text-centered">
 

      <div class="navbar-item" style=" margin: 0 auto; padding-top: 0px; padding-bottom: 0px;">
        <div class="buttons pt-0" style="margin-bottom: 0px;">
          <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/" class="navbar-item " :class="{ 'has-text-weight-semibold ':$route.name=='home'}">About</router-link>
        <router-link to="/blog" class="navbar-item " :class="{ 'has-text-weight-semibold':$route.name=='blog'}">Blog</router-link>
        <router-link to="/projects" class="navbar-item " :class="{ 'has-text-weight-semibold':$route.name=='projects'}">Projects</router-link>
        <router-link to="/talks" class="navbar-item " :class="{'has-text-weight-semibold':$route.name=='talks'}">Speaking</router-link>
        <router-link to="/contact" class="navbar-item" :class="{ 'has-text-weight-semibold':$route.name=='contact'}">Contact</router-link>        

              </div>

        </div>
   
</div>


</nav> -->

<!-- // HOME 
// ABOUT
// TALKS
// PROJEC TS
// RESUME // not a page
// GET IN TOUCH -->


<hr class="pt-0 pb-0 mb-0 mt-0">
   <div class="container">
   
   </div>

      
 <section>

           <router-view/>

 </section>
    
  </div>
</template>

<style lang="less">
body{

  font-family: 'Ubuntu', sans-serif;
}
    #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .navbar-item-active{

          border-bottom: 2px #e0e0e0 solid; 
    }


 
</style>


<script>
  
// Code is missing export
export default {
    
}


</script>

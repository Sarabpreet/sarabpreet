<template>
 
  
	<section class="has-primary-background" >


      <div class="container">

	<div class="hero is-medium">
<div class="hero-body">

<div class="columns is-multiline is-centered">
    <div class="column is-4">
    <h1 class="is-size-1 has-text-weight-semibold">Hey There! <br>I’m Sarabpreet.
    </h1>
    <p class="is-size-5 mt-2">UX Developer, building <span class="has-text-weight-bold">‘things’</span> for the next <span class="has-text-weight-bold">Billion</span> users. </p>

    </div>
    <div class="column is-4">


        <!-- IMAGE STARTS HERE -->
      
        <Slayed>
        </Slayed>
        <!-- IMAGE ENDS HERE -->
      </div>
</div>

</div>

			</div>

      </div>
<hr>


	</section>


  
</template>

<style lang="less">


.underline{

 text-decoration: underline;
}


</style>



<script>
import Slayed from '../components/slayed.vue'

export default {
  
  components:{
    Slayed
  }
}
</script>
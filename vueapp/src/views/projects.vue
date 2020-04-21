<template>
 <section>
 	
 	<div class="container">
 		<div class="columns is-multiline is-centered">
 		
 		<div class="column is-8">
 			 <div class="is-size-5 mt-2 has-text-weight-bold">Projects</div>
			  <div class="is-size-7 is-uppercase has-text-weight-bold has-text-grey-light">what i am upto?</div>

 			<div class="box mt-2" v-for="x in 10">
 					<div class="columns">
 						<div class="column is-2">
 								<div class="image" style="background:green">
 									<img src="assets/img/logo.png" alt="">
 								</div>
 						</div>
 						<div class="column is-10">
 									<div class="is-size-5 has-text-weight-bold">BJP Name Generator.
 				</div>
						 				<p>Write down a script for BJP's ongoing campaign</p>
								<div class="element"></div>

 						</div>
 					</div>
 			</div>


 		</div>
 	</div>
 	</div>

 <footerx class="mt-5">
 </footerx>
 </section>
</template>



<script>
import footerx from '../components/Footer.vue'
export default {
  
  components:{
    footerx
  }

  
}
</script>


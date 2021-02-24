<template>
   <div class="h-100 align-center flex">
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3c6fdhn7.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>
      <v-tour name="myTour" :steps="steps"></v-tour>
   </div>
</template>

<script>


export default {
   components:{
   },
   data(){
      return{
         hadTour: localStorage.getItem('hadTour'),
         steps: 
         [
            {
               target: '[data-v-step="1"]', 
               content: `Discover <strong>Trader</strong>!`
            },
            {
               target: '[data-v-step="2"]',
               content: 'Browse all the avaiable adverts!'
            },
         ]
      }
   },
   mounted(){
      if(!this.hadTour){
         this.$tours['myTour'].start()
         this.hadTour = true;
         localStorage.setItem('hadTour',true);
         }
      },
};
</script>

<style scoped>
   div{
      height: calc(100vh - 56px)!important;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
   }
</style>
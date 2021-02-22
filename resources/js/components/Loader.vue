<template>
  <transition
    mode="out-in"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <div class="loading absolute z-50 h-screen w-full flex flex-col items-center justify-center">
    
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.loading {
  position: fixed;
  z-index: 999;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #ffffff;
  background-attachment: fixed;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: show;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin: auto;
  top: 0;
  left: 0;
  justify-content: center;
  bottom: 0;
  right: 0;
  align-items: center;
   height: 100%!important;
   margin:0;
}
</style>
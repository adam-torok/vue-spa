<template>
  <nav class="bottom-nav p-2 fixed bottom-0 w-full border bg-white flex overflow-x-auto">
    <a href="" class="p-2 flex cursor-pointer flex-col flex-grow items-center justify-center
        overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
        ease-in-out">
        <i class="fab  fa-xbox fa-lg"></i>
    </a>
    <a href="" class="p-2 cursor-pointer flex flex-col flex-grow items-center justify-center
        overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
        ease-in-out  ">
        <i class="fab fa-playstation fa-lg"></i>
    </a>
    <a href="" class="p-2 flex cursor-pointer flex-col flex-grow items-center justify-center
	overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
	ease-in-out ">
        <i class="fas fa-gamepad fa-lg"></i>
    </a>
</nav>
</template>

<script>
export default {

}
</script>

<style>
    .bottom-nav{
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.5) !important;
    }
</style>
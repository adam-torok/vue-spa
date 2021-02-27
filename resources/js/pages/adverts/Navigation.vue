<template>
  <nav class="bottom-nav bg-white bg-opacity-50 dark:bg-opacity-50 dark:bg-black p-2 fixed bottom-0 w-full flex overflow-x-auto">
    <a href="" class="p-2 flex cursor-pointer flex-col flex-grow items-center justify-center
        overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
        ease-in-out dark:text-white">
        <i class="fab  fa-xbox fa-lg"></i>
    </a>
    <a href="" class="p-2 cursor-pointer flex flex-col flex-grow items-center justify-center
        overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
        ease-in-out  dark:text-white">
        <i class="fab fa-playstation fa-lg"></i>
    </a>
    <a href="" class="p-2 flex cursor-pointer flex-col flex-grow items-center justify-center
	overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
	ease-in-out dark:text-white">
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
    }
</style>
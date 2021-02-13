<template>
   <h1>{{welcome}}</h1>
</template>

<script>
export default {
   computed: {
      welcome() {
         return this.$store.getters.welcome;
      },
   },
};
</script>
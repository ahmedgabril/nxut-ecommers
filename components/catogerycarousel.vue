
<script setup>
     const items = [
  'https://picsum.photos/600/600?random=1',
  'https://picsum.photos/600/600?random=2',
  'https://picsum.photos/600/600?random=3',
  'https://picsum.photos/600/600?random=4',
  'https://picsum.photos/600/600?random=4', 
  'https://picsum.photos/600/600?random=4',
  'https://picsum.photos/600/600?random=4', 
  'https://picsum.photos/600/600?random=4',
  'https://picsum.photos/600/600?random=5',
  'https://picsum.photos/600/600?random=6',
   'https://picsum.photos/600/600?random=6', 
   'https://picsum.photos/600/600?random=6',
] ;  
</script>

<template>
<div class="mt-6 mb-6">


  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'snap-end' }" arrows>
    <div>
      <img :src="item" width="200" height="200" class="mx-2 rounded-xl">

      <NuxtLink to="/" class="block text-center my-2">catname</NuxtLink>
    </div>
  </UCarousel>


</div>
</template>



<style scoped>

</style>
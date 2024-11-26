<script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
];


const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 8000)
})
</script>

<template>


    <UCarousel v-slot="{ item }" :items="items"  ref="carouselRef" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden   " arrows>
    <img :src="item" class="w-full h-[490px]" draggable="true">
  </UCarousel>







</template>
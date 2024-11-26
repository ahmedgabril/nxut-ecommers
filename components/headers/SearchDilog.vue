<script setup >
const isOpen = ref(false)
</script>

<template>
  <div class="w-full relative ">

  <UInput color="blue" variant="none"
  icon="i-heroicons-magnifying-glass-20-solid"
    size="lg"

   readonly
  class="w-full cursor-pointer"
  placeholder="Search..." model-value=""  @click="isOpen = true"  style="cursor: pointer;"/>
<div class=" absolute top-[13px] right-[20px]">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

</div>
  

    <UModal v-model="isOpen" transition class=" fixed top-4 z-[600]   sm:min-w-lg " 
       :ui="{ strategy:'override', base: 'fixed top-4  text-left rtl:text-right flex flex-col md:min-w-[750px] items-center justify-center z-[700]  ',}" >

        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      class=" w-full "

      >
        <template #header>
          <div class="flex items-center justify-between">
            <UInput color="blue" variant="none"
            icon="i-heroicons-magnifying-glass-20-solid"
                size="lg"


            class="w-full cursor-pointer"
            placeholder="Search..." model-value=""    />

            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        
           
    
           <div class="h-[300px] overflow-y-auto w-full    p-4 rounded-md
      
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin  dark:scrollbar-thumb-slate-700 scrollbar-thumb-slate-300 ">    
        
          <div class="text-red-600">
            
            
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquam magni rerum
          dolorem saepe alias! Id optio consectetur enim at. Dolorum enim consequatur 
          asperiores pariatur. Esse rerum eaque numquam aut.</div>

          <div class="text-red-600">
            
            
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquam magni rerum
             dolorem saepe alias! Id optio consectetur enim at. Dolorum enim consequatur 
             asperiores pariatur. Esse rerum eaque numquam aut.</div>      
            </div>

      </UCard>
    </UModal>

  </div>


</template>
<style >
.scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
    border-radius:100vh;
    height: 40%;
    cursor: pointer;
}

  </style>

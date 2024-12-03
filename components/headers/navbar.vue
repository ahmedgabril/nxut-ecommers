
<script setup lang="ts">
import type { Base } from '#build/components';
import { useSidebar } from '@/composables/useSidebar';
const { isOpen,toggleSidebar } = useSidebar();
const items = [
  [{
    label: 'Home',
    to:   '/',
    icon: 'i-heroicons-home'
  }],

  [{
    label: 'Contact Us',
     to:  '/',
     icon: 'i-heroicons-phone-arrow-down-left'

  }],

  [{
    label: 'About Us',
     to:  '/about',
     icon: 'i-heroicons-book-open'

  }],

  [{
    label: 'Catogeries',
     to:  '/',
     icon: 'i-heroicons-clipboard-document-list'

  }],
]
 
</script>
<template>
    <div class="">
      <nav
        class=" fixed left-0 top-[80px] md:block hidden  w-full h-20 p-4 bg-gray-100 dark:bg-gray-900 mt-18 xs:z-0 md:z-20 shadow-md "
      >
        <div class="flex items-center md:justify-around  ">
          <div class=" nav-left-side hidden md:flex   justify-center items-center mx-auto ">
          
            <headers-mobilemnue/>
            
            
            </div>
          <div
            class="nav-right-side hidden md:flex justify-center items-center p-2 mx-auto"
          >
         
            <div>
              <nuxt-link to="/" class="4 mx-4">Home</nuxt-link>
            </div>
            <div  class="mt-2">
 
          <UDropdown :items="items" mode="hover" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }"  >
           
            <UButton class="bg-transparent dark:bg-transparent shadow-transparent dark:text-white text-gray-900  dark:hover:bg-gray-950 hover:bg-gray-50" 
            label="Pages" trailing-icon="i-heroicons-chevron-down-20-solid" />
          

         

            <template #item="{ item }">
           
              <nuxt-link  :to="item.to"> {{ item.label }} </nuxt-link>

              <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </template>
          </UDropdown>
        </div>

            <div>
              <nuxt-link to="/" class="4 mx-4">Catogers</nuxt-link>
            </div>
        
            <div>
            
            <HeadersSidebar/>


   
            
            
            </div>
          </div>
        </div>
      </nav>



      
    </div>
  </template>
  

  
  <style scoped></style>
  
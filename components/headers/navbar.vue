
<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar';
const { isOpen,toggleSidebar } = useSidebar();

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
            <div>
              <button type="button" class="4 mx-3 cursor-pointer">Pages</button>
            </div>
            <div>
              <nuxt-link to="/" class="4 mx-4">Catogers</nuxt-link>
            </div>
            <div>
              <nuxt-link to="/" class="mx-4">Contact Us</nuxt-link>
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
  
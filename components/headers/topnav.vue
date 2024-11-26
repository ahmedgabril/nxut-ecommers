<template>
    <div>
      <nav
        class="fixed top-0 left-0 bg-gray-50 w-full h-20 p-4 xs:z-0 md:z-20 overflow-hidden dark:bg-black dark:text-gray-50 text-gray-600 border-y-1"
      >
        <div class="flex justify-around items-center mx-auto ">
          <div class=" flex justify-center items-center ">
            <div class="">
              <HeadersLang />
            </div>
  
            <div class="mx-4 ">
            
        <HeadersDarkmode/>
            
            </div>
          </div>
  
          <div class="hidden md:flex items-center w-[50%] justify-center dark:bg-gray-900 bg-gray-100 rounded-md">
            <HeadersSearchDilog />
          </div>
  
          <div class="flex justify-center h-[33px] items-center">
            <img src="/Logo.png" class="w-[200px] md:mr-6 h-[60px]" />
          </div>
        </div>
      </nav>
  
      <div
        class="fixed top-[75px] mb-8 left-0 xs:z-0 md:z-20 bg-gray-100 w-full h-18 p-2 md:hidden dark:bg-gray-900"
      >
        <HeadersSearchDilog />
      </div>
    </div>
  </template>
  
  <script setup>
</script>
  
  <style scoped></style>
  
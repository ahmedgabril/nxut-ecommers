<script setup lang="ts">

const { isOpen,toggleSidebar } = useSidebar();

</script>

<template>
  <div class="">
    <!-- <UButton label="" @click="toggleSidebar" icon=""/> -->

    <div class="mr-2 ml-2 py-2 md:p-2  bg-white dark:bg-gray-700 rounded-full shadow-md  cursor-pointer w-18 h-18" @click="toggleSidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
     </div>
    
     <div v-if="isOpen" class="fixed inset-0  bg-black bg-opacity-50 z-50 transition-opacity duration-300" @click="toggleSidebar" ></div>
     <div :class="[ 'fixed top-0  right-0 h-full overflow-y-auto bg-gray-600 z-50 transition-all duration-300', isOpen ? 'xs:w-[250px] sm:w-[350px]  translate-x-0' : 'w-0 translate-x-full' ]" > 
    <div class="header flex-col justify-around items-center bg-gray-900 p-4 text-center sidebar cursor-pointer"  @click="toggleSidebar">
    <NuxtLink to="/">hello ahmed</NuxtLink>
    </div>
    <div class="body"></div>
     hfghfghf
        </div>
  </div>
</template>

<style>
.sidebar::before {
  content: 'x';
    background-color: #f22e08;
    position: fixed;
    z-index: 9997;
    padding: 10px;
    left: 0px;
    border-radius: 3px;
    width: 56px;
    height: 56px;
    display: flex
;
    justify-content: center;
    font-size: 25px;
    align-items: self-end;
    top: 0px;
    cursor: pointer;
}
</style>
<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <button type="button" @click.prevent="setActiveTab('register')"
         :class="{ 'font-extrabold text-green-700 dark:text-green-700 hover:bg-green-100 hover:rounded-md ': activeTab === 'register' }" 
         
         class="px-4 py-2  ">Register</button>
        <button type="button" @click.prevent="setActiveTab('login')"
         :class="{ 'font-extrabold text-green-700 dark:text-green-700 hover:bg-green-100 hover:rounded-md': activeTab === 'login' }" 
         class="px-4 py-2 d ">Login</button>
      </div>
      <div v-if="activeTab === 'register'">

        <form @submit.prevent="handleRegister">
   
          <div class="mb-4">
            <label for="name" class="block text-gray-700 dark:text-gray-100 my-1">Name</label>
            <input type="text" id="name" v-model="registerForm.name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
          </div>
          <p class="text-red-600 font-bold my-2" v-if=" authStore.errors && authStore.errors.name">{{ authStore.errors.name[0] }}</p>

          
          <div class="mb-4">
            
            <label for="email" class="block text-gray-700 dark:text-gray-100 my-1">Email</label>
           
            <input type="email" id="email" v-model="registerForm.email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
          </div>

          <p class="text-red-600 font-bold my-2" v-if=" authStore.errors && authStore.errors.email">{{ authStore.errors.email[0] }}</p>
          <div class="mb-4 relative">

            <label for="password" class="block text-gray-700 dark:text-gray-100 my-1">Password</label>
            
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="registerForm.password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
           
            <button type="button" @click="togglePasswordVisibility" class="absolute right-3 top-[69%] transform -translate-y-1/2">
              <svg v-if="showPassword" class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <svg v-else class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                <line x1="12" y1="17" x2="12" y2="17"></line>
              </svg>
            </button>
          </div>
          
          <p class="text-red-600 font-bold my-2" v-if=" authStore.errors && authStore.errors.password">{{ authStore.errors.password[0] }}</p>
          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
      <div v-if="activeTab === 'login'">
        <form @submit.prevent="handleLogin">
       
          <div class="mb-4">
            <label for="emaillogin" class="block text-gray-700 dark:text-gray-100 my-1">Email</label>
            <input type="email" id="emaillogin" v-model="loginForm.email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
          </div>
          <p class="text-red-600 font-bold my-2" v-if="authStore.errors && authStore.errors.email">{{ authStore.errors.email[0] }}</p>
          
          <div class="mb-4 relative">
            <label for="password" class="block text-gray-700 dark:text-gray-100 my-1">Password</label>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="loginForm.password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
            <button type="button" @click="togglePasswordVisibility" class="absolute right-3 top-[69%] transform -translate-y-1/2">
              <svg v-if="showPassword" class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <svg v-else class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                <line x1="12" y1="17" x2="12" y2="17"></line>
              </svg>
            </button>


          </div>

          <p class="text-red-600 font-bold my-2" v-if="authStore.errors && authStore.errors.password">{{ authStore.errors.password[0] }}</p>


          <button type="submit" class="w-full bg-green-500 text-white px-4 py-2 rounded">Login</button>


        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();


const isOpen = ref(false);
const activeTab = ref('register');
const showPassword = ref(false);
const registerForm = ref({
  name: '',
  email: '',
  password: '',
});

const loginForm = ref({

  email: '',
  password: '',
});

const openModal = () => {
  isOpen.value = !isOpen.value;
};

const closeModal = () => {
  isOpen.value = false;
};

const setActiveTab = (tab) => {
  authStore.errors = {};
  activeTab.value = tab;
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleRegister = () => {
  // Handle registration logic here
  authStore.register(registerForm.value);


};
const handleLogin = () => {

  authStore.login(loginForm.value);


  
 
};
defineExpose({
  openModal,
  closeModal,
});
</script>

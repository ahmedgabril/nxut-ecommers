<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const cartItems = ref([
  { name: 'Item 1', price: '$10.00', quantity: 1, image: 'https://via.placeholder.com/150' },
  { name: 'Item 2', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 3', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 4', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 5', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 6', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 7', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 8', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 9', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 10', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 11', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 12', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },
  { name: 'Item 13', price: '$20.00', quantity: 2, image: 'https://via.placeholder.com/150' },

  // Add more items as needed
]);

const openCartModal = () => {
  isOpen.value = !isOpen.value ;
};

const closeModal = () => {
  isOpen.value = false;
};

const increaseQuantity = (index) => {
  cartItems.value[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  }
};

defineExpose({
  openCartModal,
  closeModal,
});
</script>


<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-75" >
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80svh]  overflow-y-auto  
      
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin  dark:scrollbar-thumb-slate-700 scrollbar-thumb-slate-300 " @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Your Cart</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="space-y-4">
        <!-- Cart items go here -->
        <div v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div class="flex items-center">
            <img :src="item.image" alt="item.name" class="w-12 h-12 object-cover rounded">
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ item.name }}</h3>
              <p class="text-gray-500 dark:text-gray-300">{{ item.price }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="decreaseQuantity(index)" class="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0a3 3 0 01-3-3m3 3a3 3 0 003 3"></path>
              </svg>
            </button>
            <span class="mx-2 text-gray-900 dark:text-gray-100">{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)" class="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <button class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Checkout</button>
      </div>
    </div>
  </div>
</template>

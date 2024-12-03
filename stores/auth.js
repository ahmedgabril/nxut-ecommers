import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useNuxtApp } from '#app';
import { useRouter } from "vue-router";
export const useAuthStore = defineStore("auth", {
  state: () => {
    // const router = useRouter();
    return{
    user: ref(""),
    errors: {},
   
  }
  },

  actions: {
    async register(credentials) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          credentials
        );
        this.user = response.data.user;
        this.errors = {};
        credentials.name = "";
        credentials.email = "";
        credentials.password = "";
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          this.errors = error.response.data.errors;
        } else {
          console.error("Failed to register:", error);
        }
      }
    },

    async login(credentials) {
      try {
        const response = await useNuxtApp().$axios.post('/api/login',credentials)
        this.user = response.data.user;
        this.errors = {};
        Object.keys(credentials).forEach(key => credentials[key] = '');
 

    
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          this.errors = error.response.data.errors;
        } else {
          console.error("Failed to login:", error);
        }
      }
    },

    async getUser() {
    
   

      try {
        const response = await useNuxtApp().$axios.get('/api/authuser')
        if (response.data) {

          this.user = response.data;

          //   localStorage.setItem('user', JSON.stringify(response.data.user));
        } else {
            console.log("No user authenticated");
        }
    } catch (err) {
        this.user = null;
      console.error('Error:', err.response ? err.response.data : err.message);
  
    }

    
    
    },

    async logout() {
      try {
        const response = await useNuxtApp().$axios.post('/api/logout')  
        this.user = null;
        this.errors = {};
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    },
  },
});

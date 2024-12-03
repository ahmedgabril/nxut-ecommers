// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    // withXSRFToken : true,
  });

  return {
    provide: {
      axios: api,
    },
  };
});

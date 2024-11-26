import {ref} from 'vue'

export function useSidebar(){

const isOpen = ref(false);
function toggleSidebar() {
    
    isOpen.value = !isOpen.value; }
return {
    isOpen,
    toggleSidebar

}
}
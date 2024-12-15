<template>
   

<div class="place-items-center h-full w-full py-2">
       <Reader :link="$route.query.link"/>
    </div>
  
</template>
<script>
import Reader from '../components/Reader.vue';


export default {
    name: 'User',
    components: { Reader},
    data(){
        return{}

    },
    
}
</script>

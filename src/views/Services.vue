<template>
   <div>
       <Caption/>
       <Cards/>
   </div>   
    
</template>

<script>
import Caption from '@/components/Services/Caption.vue'
import Cards from '@/components/Services/Cards.vue'
    export default{
        name:"Services",
        components:{
            Caption,
                Cards,
                
        }
    };
</script>
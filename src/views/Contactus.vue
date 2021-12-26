<template>
<section>
    <Caption/>
    <Cards/>
</section>

</template>
<script>
import Caption from '@/components/Contactus/Caption.vue'
import Cards from '@/components/Contactus/Cards.vue'

export default{
 
    name:"Contactus",
    components :{
        Caption,
        Cards
    }
}
</script>

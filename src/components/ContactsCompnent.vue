<template>
    <div class="">
        <h1 class="text-gray-400  uppercase font-bold text-left">My Contact</h1>
        <SearchComponent/>
        <div class="contact-card-container mt-8 max-h-full overflow-scroll">
        <ContactCard @click="this.$router.push('detail')" class="mt-4 cursor-pointer" v-for="index in 10" :key="index"/>
        </div>
          <div class="add-contact btn bg-blue-500 rounded-full w-6 mx-auto text-white absolute left-1/2">+</div>
          <!-- <font-awesome-icon icon="fa-solid fa-circle-plus" /> -->

    </div>
</template>


<script>
import SearchComponent from '../components/SearchComponent.vue'
import ContactCard from '../components/ContactCard.vue'


export default {
  name: 'ContactsCompnent',
  components:{
    SearchComponent,
    ContactCard,
  }
}
</script>

<style scoped>
  .contact-card-container{
    max-height: 520px;
  }
</style>
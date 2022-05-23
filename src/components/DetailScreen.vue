<template>
  <div class="detail-container">
    <p
      class="text-gray-400 uppercase font-bold text-left hover:cursor-pointer"
      @click="$router.go(-1)"
    >
      Back
    </p>
    <div
      class="w-32 shadow-xl border border-gray-100 flex justify-center items-center h-32 rounded-full mx-auto"
    >
      <p class="name-initials text-5xl text-blue-400 font-bold"  v-if="requiredContact.length">{{`${requiredContact[0].firstName.charAt(0).toUpperCase()} ${requiredContact[0].lastName.charAt(0).toUpperCase()}`}}</p>
    </div>

    <div class="contact-details mt-12 text-left" v-if="requiredContact.length">
      <h2 class="text-blue-400">First Name</h2>
      <p class="text-lg text-gray-400 font-bold">{{requiredContact[0].firstName}}</p>
      <h2 class="text-blue-400 mt-4">Last Name</h2>
      <p class="text-lg text-gray-400 font-bold">{{requiredContact[0].lastName}}</p>
      <h2 class="text-blue-400 mt-4">Phone Number</h2>
      <p class="text-lg text-gray-400 font-bold">{{requiredContact[0].phoneNumber}}</p>
      <h2 class="text-blue-400 mt-4">Email Address</h2>
      <p class="text-lg text-gray-400 font-bold">{{requiredContact[0].email}}</p>
    </div>
  </div>
</template>

<script>
import contacts from "../generateContacts";



export default {
  name: "DetailScreen",
  data(){
    return {
      requiredContact: []
    }
  },
  methods: {
    getContactDetails() {
      const requiredNumber = `${this.$route.params.phnumber.substring(0,3)} ${this.$route.params.phnumber.substring(3)}`
       this.requiredContact = contacts.filter(function (el) {
        return el.phoneNumber === requiredNumber;
      });
    },
  },
  async mounted() {
   await this.getContactDetails();
  },
};
</script>

<style scoped>
.detail-container {
  height: 640px;
}
</style>

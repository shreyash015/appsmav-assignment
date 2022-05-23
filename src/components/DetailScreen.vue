<template>
  <div class="detail-container">
    <p class="text-gray-400 uppercase font-bold text-left hover:cursor-pointer" @click="$router.go(-1)">
      <fa icon="angle-left" />
      Back
    </p>
    <div class="w-32 shadow-xl border border-gray-100 flex justify-center items-center h-32 rounded-full mx-auto">
      <p class="name-initials text-5xl text-blue-400 font-bold" v-if="requiredContact.length">
        {{ `${requiredContact[0].firstName.charAt(0).toUpperCase()}
                ${requiredContact[0].lastName.charAt(0).toUpperCase()}`
        }}</p>
    </div>

    <div class="contact-details mt-12 text-left" v-if="requiredContact.length">
      <h2 class="text-blue-400">First Name</h2>
      <p class="text-lg text-gray-400 font-bold" v-if="!editMode">{{ requiredContact[0].firstName }}</p>
      <div v-else class="flex items-center border-b border-gray-300 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
          type="text" aria-label="Full name" v-model="requiredContact[0].firstName">
      </div>

      <h2 class="text-blue-400 mt-4">Last Name</h2>
      <p  v-if="!editMode" class="text-lg text-gray-400 font-bold">{{ requiredContact[0].lastName }}</p>
        <div v-else class="flex items-center border-b border-gray-300 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
          type="text" aria-label="Full name" v-model="requiredContact[0].lastName">
      </div>

      <h2 class="text-blue-400 mt-4">Phone Number</h2>
      <p v-if="!editMode" class="text-lg text-gray-400 font-bold">{{ requiredContact[0].phoneNumber }}</p>
      <div v-else class="flex items-center border-b border-gray-300 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
          type="text" aria-label="Full name" v-model="requiredContact[0].phoneNumber">
      </div>


      <h2 class="text-blue-400 mt-4">Email Address</h2>
      <p class="text-lg text-gray-400 font-bold" v-if="!editMode">{{ requiredContact[0].email }}</p>
      <div v-else class="flex items-center border-b border-gray-300 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
          type="text" aria-label="Full name" v-model="requiredContact[0].email">
      </div>
    </div>
  </div>
</template>

<script>
import contacts from "../generateContacts";



export default {
  name: "DetailScreen",
  data() {
    return {
      requiredContact: [],
      editMode: false,
    }
  },
  methods: {
    getContactDetails() {
      const requiredNumber = `${this.$route.params.phnumber.substring(0, 3)} ${this.$route.params.phnumber.substring(3)}`
      this.requiredContact = contacts.filter(function (el) {
        return el.phoneNumber === requiredNumber;
      });
    },
  },
  async mounted() {
    await this.getContactDetails();
  },
  created() {
    this.emitter.on('emit-mode-toggle', (evt) => {
      console.log('changed')
      this.editMode = evt.editMode;
    })
  }
};
</script>

<style scoped>
.detail-container {
  height: 640px;
}
</style>

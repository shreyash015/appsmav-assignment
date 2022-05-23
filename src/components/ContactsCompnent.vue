<template>
  <div class="">
    <h1 class="text-gray-400 uppercase font-bold text-left">My Contact</h1>
    <SearchComponent @searchInitiated="searching" />
    <div class="contact-card-container mt-8  overflow-scroll">
      <div class="contact-card-container" v-for="contact in sortedContacts()" :key="contact.phoneNumber">
        <ContactCard @click="this.$router.push(`/details/${(contact.phoneNumber).replace(/ /g, '')}`)"
          class="mt-4 cursor-pointer" :contact="contact" v-if="contacts.length" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "../components/SearchComponent.vue";
import ContactCard from "../components/ContactCard.vue";
import contacts from "../generateContacts";

export default {
  name: "ContactsCompnent",
  data() {
    return {
      contacts: contacts,
      searchString: '',
    };
  },
  methods: {
    sortedContacts() {
      if (!this.searchString) {
        contacts.sort((a, b) => {
          let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        return contacts;
      } else{
        return this.contacts.filter((item) => {
          return this.searchString.toLowerCase().split(' ').every(v => (item.firstName.toLowerCase().includes(v)) || (item.lastName.toLowerCase().includes(v)) || item.phoneNumber.includes(v));
        })
      }
    },
    searching(e) {
      this.searchString = e;
    },
  },
  components: {
    SearchComponent,
    ContactCard,
  },
};
</script>

<style scoped>
.contact-card-container {
  max-height: 520px;
}
</style>

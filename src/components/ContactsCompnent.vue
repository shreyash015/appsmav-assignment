<template>
  <div class="">
    <h1 class="text-gray-400 uppercase font-bold text-left">My Contact</h1>
    <SearchComponent />
    <div class="contact-card-container mt-8 max-h-full overflow-scroll">
      <div
        class="contact-card-container"
        v-for="contact in sortedContacts()"
        :key="contact.phoneNumber"
      >
        <ContactCard
          @click="this.$router.push(`/details/${(contact.phoneNumber).replace(/ /g,'')}`)"
          class="mt-4 cursor-pointer"
          :contact="contact"
          v-if="contacts.length"
        />
      </div>

      <div
        class="add-contact btn bg-blue-500 rounded-full w-6 mx-auto text-white absolute left-1/2"
      >
        +
      </div>
    </div>
    <!-- <font-awesome-icon icon="fa-solid fa-circle-plus" /> -->
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
    };
  },
  methods: {
    sortedContacts() {
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

<template>
  <div class="footer border-t-2 border-grey-400">
    <div class="icons-container relative bottom-4 flex justify-center">
      <fa
        v-if="this.$route.path === '/'"
        :icon="['fas', 'circle-plus']"
        size="2x"
        class="circle-plus hover:cursor-pointer"
        @click="noFunction()"
      />
      <fa
        v-if="this.$route.name === 'Detail' && !editMode"
        :icon="['fas', 'pen']"
        class="circle-pen hover:cursor-pointer"
        @click="emitEvent('edit')"
      />
      <fa
        v-if="this.$route.name === 'Detail' && !editMode"
        :icon="['fas', 'trash-can']"
        class="circle-trashcan hover:cursor-pointer ml-3"
        @click="noFunction()"
      />
      <fa
        v-if="this.$route.name === 'Detail' && editMode"
        :icon="['fas', 'floppy-disk']"
        class="circle-floppydisk hover:cursor-pointer ml-3"
        @click="emitEvent('save')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      editMode: false,
      invalidString: false,
    };
  },
  methods: {
    emitEvent(operation) {
      if (operation === "edit") {
        this.editMode = true;
        this.emitter.emit("emit-mode-toggle", { editMode: true });
      } else {
        if (!this.invalidString) {
          this.editMode = false;
          this.emitter.emit("emit-mode-toggle", { editMode: false });
          this.$toast.success("Contact Updated", {
            position: "top-right",
            duration: 2000,
          });
        } else {
          this.editMode = true;
          this.emitter.emit("emit-mode-toggle", { editMode: true });
          this.$toast.error("Please enter valid details and save", {
            position: "top-right",
            duration: 2000,
          });
        }
      }
    },
    noFunction() {
      this.$toast.error("Functionality yet to be implemented", {
        position: "top-right",
        duration: 2000,
      });
    },
  },
  created() {
    this.emitter.on("emty-strings", (evt) => {
      this.invalidString = evt.isEmtyString;
    });
      this.emitter.on("edit-mode", (evt) => {
      this.editMode = evt.editorMode;
    });
  },
};
</script>

<style scoped>
.circle-plus {
  color: #1e88e5;
}

.circle-pen,
.circle-trashcan,
.circle-floppydisk {
  border: 1px solid #1e88e5;
  border-radius: 50%;
  padding: 0.7rem;
  background-color: #1e88e5;
  color: white;
}

.circle-trashcan {
  background-color: rgb(181, 37, 37);
  border: rgb(181, 37, 37);
}
</style>

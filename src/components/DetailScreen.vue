<template>
  <div>
    <p class="text-gray-400 uppercase font-bold text-left hover:cursor-pointer" @click="$router.go(-1)">Back</p>
    <div
      class="w-32 shadow-xl border border-gray-100 flex justify-center items-center h-32 rounded-full mx-auto"
    >
      <p class="name-initials text-5xl text-blue-400 font-bold">AR</p>
    </div>

    <div class="contact-details mt-12 text-left">
        <h2 class="text-blue-400">First Name</h2>
        <p class="text-lg text-gray-400 font-bold">Anna</p>
        <h2 class="text-blue-400 mt-4">Last Name</h2>
        <p class="text-lg text-gray-400 font-bold">Arletti</p>
        <h2 class="text-blue-400 mt-4">Phone Number</h2>
        <p class="text-lg text-gray-400 font-bold">+91 1234567890</p>
        <h2 class="text-blue-400 mt-4">Email Address</h2>
        <p class="text-lg text-gray-400 font-bold">testname@textdomain.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailScreen",
};
</script>

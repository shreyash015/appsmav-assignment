<template>
    <div class=" rounded-md shadow-md">
        <div class="grid grid-cols-4">
            <img class="w-full border " src="https://images.pexels.com/photos/633437/pexels-photo-633437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
            <div class="text-container col-span-3 flex flex-col border text-left pl-4 py-1">
                <p class="name text-blue-300">{{contact.firstName}} {{contact.lastName}}</p>
                <div class="number">{{contact.phoneNumber}}</div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "ContactCard",
        props:{
            contact:{
                type: Object
            }
        }
    }
</script>
<template>
    
   <form @submit.prevent="submitForm">
    <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
    </div>

    
    <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
    </div>
    
    <!-- <p v-if="!formIsValid">Please enter a valid email and password must be at least 6 characters in length</p> -->
    <!-- <base-button>{{ submitButtonCaption }}</base-button> -->
    <!-- <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button> -->
    </form>
    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
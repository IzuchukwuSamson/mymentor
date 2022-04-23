<template>
   <section>
       <base-card>
         <h1 class="login">Login As a Mentor</h1>
         <mentors-login></mentors-login>
         <base-button class="login">Login</base-button>
       </base-card>
   </section>
</template>

<script>
import MentorsLogin from '../../components/mentors/MentorsLogin.vue'
export default {
    components: {
        MentorsLogin
    }    
}
</script>

<style scoped>
/* .login {
    align-content: center;
} */
</style>
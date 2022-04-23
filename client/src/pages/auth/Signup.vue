<template>
   <section>
       <base-card>
         <h1>Signup As a Mentor</h1>
         <mentor-form @save-data="saveData"></mentor-form>
       </base-card>
   </section>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue'
export default {
    components: {
        MentorForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('mentors/registerMentor', data)
            this.$router.replace('/mentors')
        }
    }  
}
</script>
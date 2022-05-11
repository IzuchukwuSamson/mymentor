<template>
<section>
    <base-card>
      <div class="controls">
         <base-button mode="outline" @click="loadMentors">Refresh</base-button>
         <base-button v-if="!isMentor" link to="/signup">Become a Mentor</base-button>
     </div>
     <!-- <div v-if="isLoading">
         <base-spinner></base-spinner>
     </div> -->
     <ul v-if="hasMentors">
         <mentors-item v-for="mentor in mentorsList" :key="mentor.id"
         :id="mentor.id"
         :first-name="mentor.firstName"
         :last-name="mentor.lastName"
         :rate="mentor.hourlyRate"
         :areas="mentor.areas"
         >
         </mentors-item>
     </ul>
     <h3 v-else>No Mentors Found.</h3>
    </base-card>
 </section>
</template>

<script>
import MentorsItem from '../../components/mentors/MentorsItem.vue'
export default {
    components: {
        MentorsItem
    },
    computed: {
        isMentor() {
            return this.$store.getters['mentors/isMentor']
        },
        mentorsList() {
           return this.$store.getters['mentors/mentors']
        //    return mentors.filter(mentor => {
        //        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
        //            return true
        //        }
        //        if (this.activeFilters.backend && mentor.areas.includes('backend')) {
        //            return true
        //        }
        //        if (this.activeFilters.career && mentor.areas.includes('career')) {
        //            return true
        //        }
        //        return false
        //    })
        },
        hasMentors() {
            return this.$store.getters['mentors/hasMentors']
        }
    },
    created() {
        this.loadMentors()

    },
     methods: {
        // setFilters(updatedFilters) {
        //     this.activeFilters = updatedFilters
        // },
        async loadMentors() {
            // this.isLoading = true
            try {
                await this.$store.dispatch('mentors/loadMentors')
            }
            catch (error) {
                this.error = error.message || 'Something went wrong'
                console.log(this.error)
            }
        //     // this.isLoading = false
        // }
        // handleError() {
        //     this.error = null
        }
    }
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

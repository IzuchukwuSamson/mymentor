import axios from 'axios'


export default {

    // Adding the  mentors to vuex
    async registerMentor(context, data) {
        try {
            const userId = context.rootGetters.userId
            const mentorData = {
                id: userId,
                firstName: data.first,
                lastName: data.last,
                description: data.desc,
                hourlyRate: data.rate,
                areas: data.areas
            }

           let URL = `http://localhost:8081/mentors/${userId}.json`
           const response = await axios.post(URL, mentorData)

        //    let requestData = await response.json()

           if(!response.ok) {
               console.log(response.data)
          }
    
        //   console.log(response.data)
    

            context.commit('registerMentor', {
                ...mentorData,
                id: userId
            })
            
        } 
        catch (error) {
            console.log(error)
        }
    },
    loadMentors(context) {
      
            const response = fetch(`http://localhost:8081/mentors`).then(responseData => responseData.json()).then(json => console.log(json))

            if(!response.ok) {
                const error = new Error(response.message || 'Failed to fetch')
                throw error
            }

            const mentors = []

            for (const key in response) {

                const  mentor = {
                    id: key,
                    firstName: response[key].firstName,
                    lastName: response[key].lastName,
                    description: response[key].description,
                    hourlyRate: response[key].hourlyRate,
                    areas: response[key].areas
                }
                mentors.push(mentor)      
            }
            context.commit('setMentors', mentors)        
    }
    
}
import axios from 'axios'

export default {
    // Adding the  mentors to vuex
    async registerMentor(context, data) {
        try {
            const userId = context.rootGetters.userId
            const mentorData = {
                firstName: data.first,
                lastName: data.last,
                description: data.desc,
                hourlyRate: data.rate,
                areas: data.areas
            }

           let URL = `http://localhost:8081/mentors`
           const response = await axios.post(URL, mentorData)

        //    let requestData = await response.json()

           if(!response.ok) {
               console.log(response.data)
          }
    
          console.log(response.data)
    
    
    
            context.commit('registerMentor', {
                ...mentorData,
                id: userId
            })
            
        } 
        catch (error) {
            console.log(error)
        }
    },

    async loadMentors(context) {
        
        let URL = "http://localhost:8081/mentors"
        const response = await axios.get(URL)

        const responseData = await response.json()

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch')
            throw error
        }

        const mentors = []

        for (const key in responseData) {
            const  mentor = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            mentors.push(mentor)
        }
        context.commit('setMentors', mentors)
    }
}
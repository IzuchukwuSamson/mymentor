import { createRouter, createWebHistory } from 'vue-router'
import MentorsList from './pages/mentors/MentorsList.vue'
import MentorsDetails from './pages/mentors/MentorsDetails.vue'
import ContactMentor from './pages/requests/ContactMentor.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'
import Login from './pages/auth/Login.vue'
import Signup from './pages/auth/Signup.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/mentors'},
        { path: '/mentors', component: MentorsList},
        { path: '/mentors/:id', component: MentorsDetails, 
            props: true, 
            children: [
                { path: 'contact', component: ContactMentor}
            ]
        },
        { path: '/requests', component: RequestsRecieved},
        { path: '/:notfound(.*)', component: NotFound },
        { path: '/login', component: Login},
        { path: '/signup', component: Signup},
        

    ]
})
export default router

// import Vue from 'vue';
// import Router from 'vue-router'
import { createWebHistory, createRouter } from "vue-router";
import DetailScreen from './components/DetailScreen'
import ContactsComponent from './components/ContactsCompnent'

 
const routes = 
     [
        {
            path:'',
            name:'home',
            component:ContactsComponent,
        },
        {
            path:'/detail',
            name: 'Detail',
            component: DetailScreen
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
 
export default router;
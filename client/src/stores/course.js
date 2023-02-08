import { defineStore } from 'pinia'
import axios from 'axios'
export const useCourseStore = defineStore('course', {
    state:()=>{
        return {
            apuUrl:'http://localhost:3000',
            courses:[],
            yourCourses:[],
            categories:[]
        }
    },
    getters:{

    },
    actions:{
        async fetchCourses() {
            try {
                const response = await axios({
                    url:`${this.apuUrl}/courses`,
                    method:'get',
                }) 
                this.courses = response.data
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }
  })
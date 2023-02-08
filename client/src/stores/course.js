import { defineStore } from 'pinia'
import axios from 'axios'
export const useCourseStore = defineStore('course', {
    state:()=>{
        return {
            apiUrl:'http://localhost:3000',
            courses:[],
            yourCourses:[],
            courseById:{},
            categories:[],
            categoriesById:{},
        }
    },
    getters:{

    },
    actions:{
        async fetchCourses() {
            try {
                const response = await axios({
                    url:`${this.apiUrl}/courses`,
                    method:'get',
                }) 
                this.courses = response.data
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        },
        async fetchCourseById(id) {
            console.log(id)
            try {
                const response = await axios({
                    url:`${this.apiUrl}/courses/${id}`,
                    method:'get',
                }) 
                this.courseById = response.data
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        },

        async fetchCategories(){
            try {
                const response = await axios.get(`${this.apiUrl}/categories`)
                console.log(response.data)
                this.categories = response.data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchCategoyById(id){
            try {
                const response = await axios({
                    url:`${this.apiUrl}/categories/${id}`,
                    method:'get',
                })
                console.log(response.data)
                this.categoriesById = response.data
            } catch (err) {
                console.log(err)
            }
        }
    }
  })
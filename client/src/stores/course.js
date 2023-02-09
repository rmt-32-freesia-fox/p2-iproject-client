import { defineStore } from 'pinia'
import axios from 'axios'
export const useCourseStore = defineStore('course', {
    state: () => {
        return {
            apiUrl: 'https://sparta-course-server.up.railway.app',
            courses: [],
            yourCourses: [],
            courseById: {},
            categories: [],
            categoriesById: {},
            gross_amount: Number,
            order_id: String,
        }
    },
    getters: {

    },
    actions: {
        async fetchCourses() {
            try {
                const response = await axios({
                    url: `${this.apiUrl}/courses`,
                    method: 'get',
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
                    url: `${this.apiUrl}/courses/${id}`,
                    method: 'get',
                })
                this.courseById = response.data
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        },

        async fetchCategories() {
            try {
                const response = await axios.get(`${this.apiUrl}/categories`)
                console.log(response.data)
                this.categories = response.data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchCategoyById(id) {
            try {
                const response = await axios({
                    url: `${this.apiUrl}/categories/${id}`,
                    method: 'get',
                })
                console.log(response.data)
                this.categoriesById = response.data
            } catch (err) {
                console.log(err)
            }
        },
        geneteOrderId(id,courseId){
            return `${id}-${courseId}-${Math.random().toString}`
        },
        payThenJoinToCourse(id,courseId,gross_amount) {
            if(!localStorage.access_token){
                this.router.push('/login-std')
                return
            }
            axios({
                url: `${this.apiUrl}/get-mt-token`,
                method: 'post',
                data: {
                    order_id:this.geneteOrderId(id,courseId),
                    gross_amount
                }
            })
                .then(result => {
                    const jcourse = this.joinCourse
                    snap.pay(result.data, {
                        // Optional
                        onSuccess: function (result) {
                            if(result){
                                jcourse(courseId)
                            }
                        },
                        // Optional
                        onPending: function (result) {
                            console.log(result)
                        },
                        // Optional
                        onError: function (result) {
                            console.log(result)
                        }
                    })
                    return 'ok'
                })
                .catch(err=>[
                    console.log(err)
                ])
        },
        formatRupiah(money) {
            return new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(money);
          },

          getOwnCourse(){
            
                return axios({
                    url: `${this.apiUrl}/students/courses`,
                    method:'get',
                    headers:{
                        access_token: localStorage.access_token
                    }
                })

          },
          async joinCourse(courseId){
            try {
                await axios({
                    url: `${this.apiUrl}/students/join/${courseId}`,
                    method:'post',
                    headers:{
                        access_token: localStorage.access_token
                    }
                })
                this.router.push('/player/'+courseId)
            } catch (err) {
                console.log(err)
            }
          },
          async fetcYourCourses(){
            try {
                const response = axios({
                    url: `${this.apiUrl}/students/courses`,
                    method:'get',
                    headers:{
                        access_token: localStorage.access_token
                    }
                })
                this.yourCourses = response.data
            } catch (err) {
                console.log(err)
            }
          }
    }
})
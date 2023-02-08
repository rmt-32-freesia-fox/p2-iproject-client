import { defineStore } from 'pinia'
import axios from 'axios'
import Swall from 'sweetalert2'
export const useUserStore = defineStore('user', {
    state:()=>{
        return {
            apiUrl:'http://localhost:3000',
            username:localStorage.username?localStorage.username:'',
            email:'',
            password:'',
            isLogin:localStorage.access_token?true:false,
            errMsg:'dasdasda'
        }
    },
    getters:{

    },
    actions:{
        async register(as) {
            try {
                await axios({
                    method:'post',
                    url:`${this.apiUrl}/${as}/register`,
                    data:{
                        email:this.email,
                        username:this.username,
                        password:this.password
                    }
                })
                this.password = ''
                Swall.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You Have Registered As '+as,
                    showConfirmButton: false,
                    timer: 1500
                  })
                this.router.push('/courses')
            } catch (err) {
                console.log(err)
                this.errMsg = err.response.data.message
            }
        },
        async login(as){
            try {
                const response = await axios({
                    method:'post',
                    url:`${this.apiUrl}/${as}/login`,
                    data:{
                        email:this.email,
                        password:this.password
                    }
                })
                localStorage.access_token = response.data.access_token
                localStorage.username =response.data.username
                localStorage.role = response.data.role
                this.isLogin = true
                this.username = response.data.username
                this.password = ''
                Swall.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Welcome Back '+as + ' ' + response.data.username,
                    showConfirmButton: false,
                    timer: 1500
                  })
                this.router.push('/courses') 
            } catch (err) {
                this.errMsg = err.response.data.message
                console.log(err)
            }
        },
        logOut(){
            localStorage.clear()
            this.username = ''
            this.isLogin = false
            Swall.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You Has beem sign out',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.push('/') 
        }
    }
  })
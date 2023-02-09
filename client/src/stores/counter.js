import { defineStore } from "pinia";

import Swal from "sweetalert2";


import axios from "axios";

const baseUrl ="https://arinandagarden-production.up.railway.app"
// const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    
    isLogin: "false",
    email:"",
    userrole:"",
    plants:[],
    carts:[],



  
  
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {

    check(){
      if(localStorage.access_token && localStorage.email){
        this.isLogin="true"
        this.userrole= localStorage.role
        this.email=localStorage.email

      } else{
        this.isLogin="false"
        this.email=""
      }
    },

    callback(response) {
      console.log(response);
      axios({
        url: baseUrl + "/google-signin",
        method: "post",
        headers: {
          "google-oauth-token": response.credential,
        }
      })
        .then(({ data }) => {
          
          localStorage.access_token = data.access_token
          localStorage.email = data.email
          localStorage.role = data.role
          this.check()
          this.router.push("/")
          
        })
        .catch((error) => {
          // this.alertError(error)
          console.log(error);
        })
    },

    
    LOGIN(data){
      
       axios({
        url:baseUrl+'/login',
        method:'post',
        data:{
          email:data.email,
          password:data.password
        },
      })
      .then((result)=>{
        localStorage.access_token= result.data.access_token
        localStorage.email = result.data.email
        localStorage.role = result.data.role

        this.router.push("/")
        this.Islogin="true"
        // this.alertSuccess(result)
        this.email= result.data.email
        
      })
      .catch((error)=>{
        // t
        
        console.log(error);
      })





    






  },

 async  ALLPLANT(){
    // axios({
    //   url:baseUrl+`/ArinandaPlants`,
    //   method:"get",
    //   headers:{
    //       access_token:localStorage.access_token
    //     },
    // })
    // .then(({data})=>{
    //   this.plant=data.data
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

    try {

      const {data} =await axios({
        url:baseUrl+'/ArinandaPlants',
        method:'get',
         headers: {
            access_token: localStorage.access_token
          },
      })
      this.plants=data
      
    } catch (error) {
      console.log(error);
      
    }
  },

 async ADDCART(PlantId,quantity){
    try {
        const {
          data
        } = await axios({
          url: baseUrl + '/MyArinandaPlants',
          method: 'POST',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            PlantId,
            quantity
          }
        })
        // console.log(data);
        this.carts = data
        // console.log(this.carts);
        this.router.push('/mycarts')
        this.MYPLANT()
        
      } catch (error) {
        console.log(error);
      }
  },

  MYPLANT(){
    return axios({
      url:baseUrl+`/MyArinandaPlants`,
      method:"get",
      headers:{
          access_token:localStorage.access_token
        },
    })
    .then(({data})=>{

      this.carts=data
      console.log(this.carts);
    })
    .catch((error)=>{
      console.log(error);
    })
  },

  async  CHECKOUT(){
    try {
      const {data} = await axios({
        url:baseUrl +'/MyArinandaPlants/checkout',
        method:"patch",
        headers:{
          access_token:localStorage.access_token

        },


      })
      this.GATEAWAY()
    
      this.MYPLANT()
      this.carts=[]
      this.router.push('/')
      
    } catch (error) {
      console.log(error);
      
    }
  },

  async GATEAWAY(){
    try {

      const {data} = await axios({
        url:baseUrl+"/MyArinandaPlants/payment",
        method:'post',
        headers:{
          access_token:localStorage.access_token
        }
      })
      const cb= this.CHECKOUT
      console.log(data);
      window.snap.pay(data.midtransToken.token, {
          onSuccess: function (result) {
            Swal.fire({
              icon: "success",
              title: "Payment Success"
            })
            cb()
            
          },
          onError: function (result) {
            Swal.fire({
              icon: "error",
              title: "Payment Failed"
            })
          },
          onClose: function () {
            Swal.fire({
              icon: "error",
              title: "You did not finish payment yet"
            })
          }
        })


      
    } catch (error) {
      console.log(error);
    }

  },

  async DELETEMY(plantId){
    try {
      await axios({
        url:baseUrl+`/MyArinandaPlants/${plantId}`,
        method:`delete`,
        headers:{
          access_token:localStorage.access_token
        }
      })
      this.MYPLANT()
      
    } catch (error) {
      console.log(error);
      
    }
  },

  REGIST(data){
     axios({
        url:baseUrl+'/register',
        method:'post',
        data:{
          
          email:data.email,
          password:data.password,
          
        },
      })
      .then((result)=>{
        
        this.router.push("/login")
      })
      .catch((error)=>{

        console.log(error);
    
        
      })
    },








    










  },
})

import { defineStore } from 'pinia'
import axios from 'axios'
import { RouterLink, RouterView } from "vue-router";


export const useDataStore = defineStore('data', {
  state: () => ({
    name: '',
    baseUrl: 'http://localhost:3000',
    clientId: '',
    paymentToken: '',
    spotifyProfile: {},
    spotifyTopTracks: {},
    recentlyPlayed: {},
    topArtists: {},
    searchList: null , 
    topGlobal: {}
  }),
  getters: {

  },
  actions: {
    async login(code) {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/login`,
          method:'post',
          data: {
            code: code
          }
        })
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    },
    async getClientId() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/clientId`,
          method:'get'
        }) 
        return req
      } catch (error) {
        console.log(error);
      }
    },
    async getProfile() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/profile`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.spotifyProfile = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getTopTracks() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/topTracks`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.spotifyTopTracks = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getTopArtists() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/topArtists`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.topArtists = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    async getRecentlyPlayed() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/recently`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.recentlyPlayed = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    async searchSongs(string) { 
      const encodedString = encodeURIComponent(string);
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/findSongs?q=${encodedString}`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.searchList = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    async getTopGlobal() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/topGlobal`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
        this.topGlobal = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
 
    async getPaymentToken() {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/paymentToken`,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token')
          }
        })  
          console.log(req.data);        
          return req.data
      } catch (error) {
        console.log(error);
      }
    },
    
    async subscribed(paymentToken) {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/subcribed`,
          method:'patch',
          headers: {
            access_token: localStorage.getItem('token'),
            payment_token: paymentToken
          }
        })  
        
          await this.getProfile() 
          console.log(req.data);        
          return req.data
      } catch (error) {
        console.log(error);
      }
    },
    
    async getDownloadLink(id) {
      try {
        const req = await
        axios({
          url: `${this.baseUrl}/download/` + id,
          method:'get',
          headers: {
            access_token: localStorage.getItem('token'), 
          }
        })  
        alert(req.data)
          console.log(req.data);        
          return req.data
      } catch (error) {
        console.log(error);
      }
    },
    
    async snap() {
      try {
        const {payment_token} = await this.getPaymentToken()
        // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
        const flagging = this.subscribed
        window.snap.pay(payment_token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            flagging(payment_token)
            alert("payment success!"); console.log(result);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
      
      } catch (error) {
        console.log(error);
      }
    }
    
  }
})
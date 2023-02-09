import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from '../composables'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const useRecipeStore = defineStore('recipe', {
  state() {
    return {
      modal: false,
      loadRes: false,
      loading: false,
      response: '',
      count: 0,
      recipes: [],
      recipe: {},
      ingredients: [],
      cusisines: [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese'
      ]
    }
  },
  actions: {
    async fetchRecipes(query) {
      this.loading = true
      try {
        const res = await axios.get(`${baseUrl}/foods`, {
          headers: {
            access_token: localStorage.access_token
          },
          params: query
        })
        
        this.recipes = res.data.results
        this.count = res.data.totalResults
        this.loading = false
      } catch (error) {
        this.loading = false
        toast('error', error.response.data.message)
      }
    },

    async fetchRecipe(id) {
      this.loading = true
      try {
        const res = await axios.get(`${baseUrl}/foods/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        
        this.recipe = res.data
        this.loading = false
      } catch (error) {
        this.loading = false
        toast('error', error.response.data.message)
      }
    },

    async findByIngredients(ingredients) {
      try {
        const res = await axios.get(`${baseUrl}/foods/findByIngredients`, {
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            ingredients
          }
        })

        this.recipe = res.data
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    toggle() {
      this.modal = !this.modal
    },
    async ask(data) {
      this.loadRes = true
      try {
        console.log('asd')
        const res = await axios.post(`${baseUrl}/chatgpt`, {
          food: data.title
        })
        this.response = res.data.text
        this.loadRes = false
      } catch (error) {
        this.loadRes = false
        toast('error', error.response)
      }
    },
    async ingredients(query) {
      try {
        const res = await axios.get(`${baseUrl}/foods/ingredients`, {
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            query
          }
        })

        this.ingredients = res.data
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
  }
})

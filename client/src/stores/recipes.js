import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from '../composables'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const useRecipeStore = defineStore('recipe', {
  state() {
    return {
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
      try {
        const res = await axios.get(`${baseUrl}/foods`, {
          headers: {
            access_token: localStorage.access_token
          }, 
          params: query
        })

        this.recipes = res.data.results
        this.count = res.data.totalResults
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },

    async fetchRecipe(id) {
      try {
        const res = await axios.get(`${baseUrl}/foods/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.recipe = res.data
      } catch (error) {
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

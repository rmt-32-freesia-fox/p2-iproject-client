import { defineStore } from 'pinia'
import PublitioAPI from 'publitio_js_sdk'
const publitio = new PublitioAPI('mMs5fr7qfo6Wmpn9kJJa', '79lrLbpJXmzpzBGbjJdhi5unrNZ9iVrV')
export const usePublitioStore = defineStore('publitio', {
    state: () => {
        return {
            file:{}
        }
    },
    getters: {

    },
    actions: {
        getVideo(id) {
            publitio.call('/files/show/'+id, 'GET')
                .then((data) => { 
                    this.file= data
                    console.log(data)
                 })
                .catch((error) => { console.log(error) })
        }
    }
})
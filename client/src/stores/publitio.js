import { defineStore } from 'pinia'
import PublitioAPI from 'publitio_js_sdk'
const publitio = new PublitioAPI('mMs5fr7qfo6Wmpn9kJJa', '79lrLbpJXmzpzBGbjJdhi5unrNZ9iVrV')
// publitio.uploadFile(file, 'file')

export const usePublitioStore = defineStore('publitio', {
    state: () => {
        return {
            file:undefined
        }
    },
    getters: {

    },
    actions: {
        upload() {
            console.log(this.file)
            publitio.uploadFile(this.file, 'file')
                .then((data) => { console.log(data) })
                .catch((error) => { console.log(error) })
        }
    }
})

import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useFunctionStore = defineStore('function', {
  state: () => ({
    baseUrl: `https://nusantaralounge-production.up.railway.app`,
    currentUser: "",
    role: localStorage.role,

    //dashboard data
    heroData: [],
    sideData: [],
    gamesData: [],
    podcastData: [],
    gamesData: [],

    //podcast detail data
    podcastAllData: [],
    podcastDetailData: [],
    podcastQR: "",

    //favorite data
    playlistAllData: [],

    isLogin: localStorage.access_token
  }),


  getters: {
    doubleCount: (state) => state.count * 2,
  },


  actions: {

    async handleGoogleSign(response) {
      try {
        const googlesign = await axios({
          url: this.baseUrl + '/user/google-sign-in',
          // url: `http://localhost:3000` + '/user/google-sign-in',
          method: "POST",
          headers: {
            "google-oauth-token": response.credential,
          },
        });
        localStorage.access_token = googlesign.data.access_token;
        localStorage.currentUser = googlesign.data.email;
        localStorage.role = googlesign.data.role

        let timerInterval = 5000
        Swal.fire({
          title: 'Successfly Login',
          html: 'going to dashboard in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
            this.router.push("/")
          }
        })

      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },


    async handleLogin(dataLogin) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/login`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        localStorage.access_token = data.access_token
        localStorage.currentUser = data.email
        localStorage.role = data.role

        let timerInterval = 5000
        Swal.fire({
          title: 'Successful Login',
          html: 'going to dashboard in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
            this.router.push("/")
          }
        })
      } catch (error) {
        Swal.fire(error.response.data.message)
        // console.log(error.response.data.message);
      }
    },

    handleLogout() {
      Swal.fire({
        title: 'Are you sure want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logging out....',
            localStorage.clear(),
            this.currentUser = "",
            this.isLogin = false,
            this.router.push('/login')
          )
        }
      })
    },

    async handleRegister(dataLogin) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/register`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        Swal.fire({
          title: 'Submit Registration?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Success registered',
            )
          }
        })
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error.response.data.message);
      }
    },

    async handlePodcastDetail(url) {
      try {
        const { data } = await axios({
          url: url,
        })
        this.router.push(`/podcast_detail`)
        this.podcastDetailData = data.detail_podcast
        localStorage.url = url
        console.log(this.podcastDetailData);
      } catch (error) {
        Swal.fire(error.response.data.message)
        // console.log(error);
      }
    },

    async handlePayment() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/user/generate-midtrans-token',
          method: `POST`,
          headers: { access_token: localStorage.access_token }
        })
        let access = window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
            +
              axios({
                url: 'https://nusantaralounge-production.up.railway.app/user/subscription',
                method: `PATCH`,
                headers: { access_token: localStorage.access_token }
              })
            localStorage.role = `Premium`
            Swal.fire('Congrats you are a premium member Now')
          }
        })

        // this.router.push('/')

      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },



    async fetchAll() {
      this.currentUser = localStorage.currentUserx
      this.fetchHeroData()
      this.fetchPodcast()
      this.fetchGames()
      this.fetchFavorite()
    },

    async fetchHeroData() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news`,
        })
        this.heroData = { big: data.articles[0], small: data.articles.slice(1, 5) }
        this.sideData = data.articles.slice(6, 16)
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },

    async fetchPodcast() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news/podcast`,
        })
        this.podcastData = data.podcast.slice(0, 6)
        this.podcastAllData = data.podcast
        console.log(this.podcastData);
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },

    async fetchGames() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news/games`,
        })
        this.gamesData = data.slice(0, 9)
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },

    async fetchFavorite() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/playlist`,
          headers: { access_token: localStorage.access_token }
        })
        this.playlistAllData = data
        console.log(this.playlistAllData);
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },

    async addToPlaylist(dataPodcast) {
      console.log(dataPodcast.title, '<<<<<<<<<<<<<<');
      try {

        const { data } = await axios({
          url: this.baseUrl + `/playlist`,
          method: `POST`,
          data: {
            title: dataPodcast.title,
            image: dataPodcast.image,
            audio: dataPodcast.audio,
            post_content: dataPodcast.post_content,
            published_at: dataPodcast.published_at,
          },
          headers: { access_token: localStorage.access_token }
        })
        Swal.fire('Successfuly added to playlist')
        this.playlistAllData = data
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },

    async deletePlaylist(dataPodcast) {
      console.log(dataPodcast, '<<<<<<<<<<<<<<');
      try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, remove from playlist!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Remove from favorite',
            )
            const { data } = axios({
              url: this.baseUrl + `/playlist`,
              method: `delete`,
              headers: { access_token: localStorage.access_token },
              data: {
                PlaylistId: dataPodcast.PlaylistId,
                UserPlaylistId: dataPodcast.UserPlaylistId,
              }
            })
            this.fetchFavorite()
            console.log(data);

          }
        })
      } catch (error) {
        Swal.fire(error.response.data.message)

        // console.log(error);
      }
    },



  },
})

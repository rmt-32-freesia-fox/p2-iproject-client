import { defineStore } from "pinia";
import axios from 'axios'
import Swal from "sweetalert2";

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://berliterasi-production.up.railway.app",
    isLogin: false,
    email: "",
    password: "",
    address: "",
    books: [],
    booksById: {},
    listOfMyBook: [],
    translateResult: {},
    converterResult: {},
    resultSearchBook: []
  }),
  getters: {

  },
  actions: {

    succesNotification(response) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: response.message,
      });
    },

    errorNotification(error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    },

    async loginHandler(input) {
      console.log("Test handle login");

      try {
        const loginResult = await axios({
          url: this.baseUrl + `/login`,
          method: "POST",
          data: {
            email: input.email,
            password: input.password,
          },
        });
        const access_token = loginResult.data.access_token;
        console.log(access_token);

        localStorage.setItem("access_token", access_token);

        this.router.push('/')

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully log in",
          showConfirmButton: false,
          timer: 1500,
        });

      } catch (error) {
        this.errorNotification(error);
      }
    }, //DONE

    async logoutHandler() {
      console.log("Test handle log out");

      localStorage.removeItem("access_token");

      this.router.push('/')

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully log out",
        showConfirmButton: false,
        timer: 1500,
      });
    }, //DONE

    async signupHandler(input) {
      console.log("Test handle signup");

      try {
        const signupResult = await axios({
          url: this.baseUrl + `/register`,
          method: "POST",
          data: {
            email: input.email,
            password: input.password,
            address: input.address
          },
        });
        console.log(signupResult);

        this.router.push('/login')

        Swal.fire({
          title: 'Yuhuu... You get a discount!',
          text: 'Successfully create account, please check your email for discount from us!',
          imageUrl: 'https://media.istockphoto.com/id/1199025903/vector/congratulations-greeting-card-vector-lettering.jpg?s=612x612&w=0&k=20&c=JBjYOnkRerY0uxBrYAtKccIk6tdiBCuzwClegCucpmw=',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })

      } catch (error) {
        this.errorNotification(error);
      }
    }, //DONE

    async googleLoginHandler(input) {
      console.log("Test handle login by Google");

      try {
        const signinWithGoogle = await axios({
          url: this.baseUrl + `/login-by-google`,
          method: "POST",
          headers: {
            "google-auth-token": input.credential,
          },
        });

        const access_token = signinWithGoogle.data.access_token;
        console.log(access_token);

        localStorage.setItem("access_token", access_token);

        this.router.push('/')

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully log in",
          showConfirmButton: false,
          timer: 1500,
        });

      } catch (error) {
        console.log(error, '< Ini errornya test');
        this.errorNotification(error);
      }
    },

    async fetchBooks() {
      console.log("Test handle fetch books");

      try {
        const { data } = await axios({
          url: this.baseUrl + '/books',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.books = data
        // console.log(this.books, '<--- OKOKOK');
      } catch (error) {
        console.log(error);
      }
    }, //DONE

    async fetchBooksByID(bookId) {
      console.log("Test fetch books by ID");

      try {
        const { data } = await axios({
          url: this.baseUrl + `/books/${bookId}`,
          // url: this.baseUrl + `/pub/jobs/94`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.booksById = data
        console.log(this.booksById);
        this.router.push(`/detail/${bookId}`)
      } catch (error) {
        console.log(error);
      }
    }, //DONE

    async addToMyBook(bookId) {
      console.log("Test handle add to mybook button");

      try {
        console.log('Ini sebelum');
        await axios({
          url: this.baseUrl + `/mybooks/${bookId}`,
          method: 'POST',
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log('Ini sesudah');

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully add to MyBook",
          showConfirmButton: false,
          timer: 1500,
        });

      } catch (error) {
        console.log(error);

        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must log in first to add this book to My Book",
        });

      }
    }, //DONE

    async readMyBook() {
      console.log("Test handle mybook page");
      try {
        const { data } = await axios({
          url: this.baseUrl + `/mybooks`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          },
        })

        this.listOfMyBook = data
        console.log(this.listOfMyBook, '<--- INIIIII');
      } catch (error) {
        console.log(error);
      }
    }, //DONE

    async translateWord(word) {
      console.log("Test handle translate");
      try {
        const { data } = await axios({
          url: this.baseUrl + `/translate`,
          method: 'POST',
          headers: { access_token: localStorage.access_token },
          params: { translate: `${word}` }
        })

        this.translateResult = data
        // console.log(this.translateResult);

      } catch (error) {
        console.log(error);
      }
    }, //DONE

    async currencyConvert(input) {
      console.log("Test handle currency converter");
      try {
        const { data } = await axios({
          url: this.baseUrl + `/convert`,
          method: 'GET',
          params: { have: 'USD', want: 'IDR', amount: `${input}` }
        })

        this.converterResult = data
        console.log(this.converterResult);

      } catch (error) {
        console.log(error);
      }
    }, //DONE

    async searchBook(book) {
      console.log("Test handle search book");
      try {
        const { data } = await axios({
          url: this.baseUrl + `/searchbook?search=` + book,
          method: 'GET',
          // params: { search: book }
        })

        this.resultSearchBook = data.data
        console.log(this.resultSearchBook);

      } catch (error) {
        console.log(error);
        this.errorNotification(error);
      }
    }, //DONE

    async emailAfterPayment() {
      console.log(`test handle email after payment`)
      try {

        const { data } = await axios({
          url: this.baseUrl + `/send-email`,
          method: 'GET',
          headers: { access_token: localStorage.access_token },
        })

      } catch (error) {
        console.log(error);
      }

    }, // DONE

    async checkout(price) {
      console.log(`test handle fitur checkout`)
      try {
        console.log(price, '<--- INI PRICENYAAAA');
        const { data } = await axios({
          url: this.baseUrl + `/generate-midtrans-token`,
          method: 'POST',
          headers: {
            access_token: localStorage.access_token,
            amount: price * 15000
          },
        })

        // console.log(this.booksById, 'Ini datanya');
        const cb = this.emailAfterPayment

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */

            cb() // Untuk panggil si actions kirim email setelah bayar buku

            Swal.fire(
              'Your order is successfully paid',
              'Please check your email for confirmation order from us',
              'success'
            )
          },
          // onPending: function (result) {
          //   /* You may add your own implementation here */
          //   alert("wating your payment!"); console.log(result);
          // },
          // onError: function (result) {
          //   /* You may add your own implementation here */
          //   alert("payment failed!"); console.log(result);
          // },
          // onClose: function () {
          //   /* You may add your own implementation here */
          //   alert('you closed the popup without finishing the payment');
          // }
        })

      } catch (error) {
        console.log(error);
      }
    }, //DONE


  },
})
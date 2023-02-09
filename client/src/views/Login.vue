<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login", "loginWithGoogle"]),
    handleLogin() {
      const input = {
        email: this.email,
        password: this.password,
      };
      this.login(input);
    },
  },
};
</script>
<template>
  <body>
    <section class="login">
      <div class="login_box">
        <div class="left">
          <div class="top_link">
            <a href="#" @click.prevent="this.$router.push('/')"
              ><img
                src="hhttps://tse4.mm.bing.net/th?id=OIP.KXTSincaWupi7bPA2QwD9AHaE7&pid=Api&P=0"
                alt=""
              />Return home</a
            >
          </div>
          <div class="contact">
            <form action="" @submit.prevent="handleLogin">
              <h3>SIGN IN</h3>
              <input type="text" placeholder="EMAIL" v-model="email" />
              <input
                type="password"
                placeholder="PASSWORD"
                v-model="password"
              />
              <button class="submit">LOGIN</button>
              <br />
              <GoogleLogin
                style="margin-left: 2.5rem"
                :callback="loginWithGoogle"
              />
            </form>
          </div>
        </div>
        <div class="right">
          <div class="right-text"></div>
          <div class="right-inductor">
            <img
              src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style>
img {
  width: 100%;
}
.login {
  height: 1000px;
  width: 100%;
  background-color: #222429;
  position: relative;
}
.login_box {
  width: 1050px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 22px -8px #0004;
  display: flex;
  overflow: hidden;
}
.login_box .left {
  width: 41%;
  height: 100%;
  padding: 25px 25px;
}
.login_box .right {
  width: 59%;
  height: 100%;
}
.left .top_link a {
  color: #452a5a;
  font-weight: 400;
}
.left .top_link {
  height: 20px;
}
.left .contact {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 73%;
  margin: auto;
}
.left h3 {
  text-align: center;
  margin-bottom: 40px;
}
.left input {
  border: none;
  width: 80%;
  margin: 15px 0px;
  border-bottom: 1px solid #4f30677d;
  padding: 7px 9px;
  width: 100%;
  overflow: hidden;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
}
.left {
  background: linear-gradient(-45deg, #dcd7e0, #fff);
}
.submit {
  border: none;
  padding: 15px 70px;
  border-radius: 8px;
  display: block;
  margin: auto;
  margin-top: 120px;
  background: #fb5b21;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
  -moz-box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
  box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
}

.right {
  background: linear-gradient(
      212.38deg,
      rgba(46, 40, 42, 0.7) 0%,
      rgba(104, 95, 95, 0.71) 100%
    ),
    url(https://tse4.mm.bing.net/th?id=OIP.KXTSincaWupi7bPA2QwD9AHaE7&pid=Api&P=0);
  color: #fff;
  position: relative;
}

.right .right-text {
  height: 100%;
  position: relative;
  transform: translate(0%, 45%);
}
.right-text h2 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}
.right-text h5 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
}

.right .right-inductor {
  position: absolute;
  width: 70px;
  height: 7px;
  background: #fff0;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 0%);
}
.top_link img {
  width: 28px;
  padding-right: 7px;
  margin-top: -3px;
}
</style>

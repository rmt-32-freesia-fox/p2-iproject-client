<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { useCounterStore } from "../stores/counter";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      weight: "",
      height: "",
    };
  },
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(useCounterStore, ["bmi"]),
    ...mapWritableState(useCounterStore, ["isBMI"]),
    getRouteQuery() {
      return this.$route.query;
    },
  },

  methods: {
    ...mapActions(useCounterStore, ["getBmi"]),
    onClickHandler() {
      const input = {
        weight: this.weight,
        height: this.height,
      };
      this.getBmi(input);
      this.$router.push({
        path: "/bmi",
        query: {
          weight: this.getRouteQuery.weight,
          height: this.getRouteQuery.height,
        },
      });
    },
    handleBackForm() {
      this.isBMI = "false";
    },
  },

  created() {
    // this.getBmi(this.getRouteQuery);
    // this.onClickHandler();
  },
};
</script>

<template>
  <Navbar />
  <div
    class="container-bmi"
    style="justify-content: center"
    v-if="isBMI == 'false'"
  >
    <div class="brand-title-bmi">BMI Calculator</div>
    <div class="inputs-bmi">
      <form @submit.prevent="onClickHandler">
        <label id="label-bmi">WEIGHT</label><br />
        <input
          id="input-bmi"
          type="text"
          placeholder="Input Your Weight"
          v-model="weight"
          required
        /><br /><br />
        <label id="label-bmi">HEIGHT</label><br />
        <input
          id="input-bmi"
          type="text"
          placeholder="Input Your Height"
          v-model="height"
          required
        />
        <button id="button-bmi" type="submit">SUBMIT</button>
      </form>
    </div>

    <br />
    <div style="text-align: center">
      <span><a>© Gymster Healthy</a></span>
    </div>
  </div>
  <br />
  <br />
  <div
    class="container-bmi"
    style="justify-content: center"
    v-if="isBMI == 'true'"
  >
    <div class="brand-title-bmi">RESULT</div>

    <h5 style="text-align: center; margin-top: 2rem">
      BMI:
      <h5 style="color: #fb5b21; margin-top: 1rem">{{ bmi.bmi }}</h5>
    </h5>
    <h5 style="text-align: center; margin-top: 3rem">
      HEALTHY:
      <h5 style="color: #fb5b21; margin-top: 1rem">{{ bmi.health }}</h5>
    </h5>
    <h5 style="text-align: center; margin-top: 3rem">
      HEALTHY BMI RANGE:
      <h5 style="color: #fb5b21; margin-top: 1rem">
        {{ bmi.healthy_bmi_range }}
      </h5>
    </h5>
    <div
      style="text-align: center; margin-top: 2rem; color: blue; cursor: pointer"
    >
      <span><a href="" @click.prevent="handleBackForm">back to form</a></span>
    </div>
  </div>

  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap");

#input-bmi {
  caret-color: red;
}

.container-bmi {
  position: relative;
  margin: auto;
  width: 450px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}

.brand-title-bmi {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #fb5b21;
  letter-spacing: 1px;
  text-align: center;
}

.inputs-bmi {
  text-align: center;
  margin-top: 30px;
}

/* label,
input, */
#button-bmi {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

#label-bmi {
  margin-bottom: 4px;
}

#label-bmi:nth-of-type(2) {
  margin-top: 12px;
}

#input-bmi::placeholder {
  color: gray;
}

#input-bmi {
  background: #ecf0f3;
  padding: auto;
  padding-left: 20px;
  height: 40px;
  font-size: 14px;
  border-radius: 100px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

#button-bmi {
  color: white;
  margin-top: 20px;
  background: #fb5b21;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

#button-bmi:hover {
  box-shadow: none;
}
</style>

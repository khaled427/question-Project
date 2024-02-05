<template>
  <p style="position: absolute; left: 10px; top: 10px">
    {{ firstName }} {{ lastName }}
  </p>

  <h1
    style="
      left: 31%;
      position: relative;
      background-color: rgba(0, 255, 255, 0.199);
      width: 150px;
      border-radius: 30px;
      text-align: center;
      top: 5px;
      caret-color: transparent;
    "
  >
    Brian IQ
  </h1>

  <!-- <div class="balls d-flex" style="position: absolute">
    <div
      class="ball1"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball2"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball3"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball4"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball5"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball6"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball7"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball8"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball9"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball10"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball11"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball12"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball13"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball14"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball15"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball16"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball17"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball18"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball19"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball20"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball21"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball22"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball23"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball24"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball25"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball26"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball27"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball28"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball29"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
    <div
      class="ball30"
      style="
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
      "
    ></div>
  </div> -->
  <v-container fluid="" style="position: relative" v-if="isShow">
    <v-row>
      <v-col cols="9" class="pr-10">
        <div class="text-center">
          <v-chip
            class="ma-2"
            color="success"
            variant="outlined"
            style="cursor: pointer"
            @click="$router.push({ name: 'quizOne' })"
          >
            <v-icon start icon="mdi-server-plus"></v-icon>
            Start Testing
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            variant="outlined"
            style="cursor: pointer"
            @click="signIn"
          >
            User Account
            <v-icon end icon="mdi-account-outline"></v-icon>
          </v-chip>
          <v-chip
            class="ma-2"
            color="pink"
            variant="outlined"
            style="cursor: pointer"
          >
            <a
              href="https://www.facebook.com"
              style="
                color: rgb(245, 49, 82);
                font-size: 15px;
                text-decoration: none;
              "
              >Contact WithUs</a
            >
            <v-icon end icon="mdi-phone"></v-icon>
          </v-chip>
        </div>
        <h2>
          welcome our students start your journey to solve all questions then
          you well improve your self
        </h2>
        <v-card class="selected" style="align-items: center">
          <v-card-title style="text-align: center; margin: 5px"
            >select your data as the questions you want</v-card-title
          >
          <div class="d-flex justify-space-around mb-5">
            <v-btn style="background: #2cce7d">agree with your Age </v-btn>

            <v-btn style="background: #2cce7d">fav subject </v-btn>

            <v-btn
              id="menu-activator"
              style="background: #2cce7d"
              @click="showLevel"
            >
              your level
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3" style="position: relative">
        <v-layout
          ><v-navigation-drawer
            location="right"
            v-model="drawer"
            temporary=""
            width="350"
            class="pr-0 cart-drawer"
          >
            <div
              class="contains"
              style="
                background-color: rgb(7, 1, 32);
                width: 110%;
                overflow: scroll;
                position: relative;
                margin-right: 50px;
              "
            >
              <v-container>
                <h1 style="color: white; text-align: center">All Quizzes</h1>
                <v-row style="width: 100%">
                  <v-col
                    style="position: relative; right: 0px; align-items: center"
                  >
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz one</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        class="btnStyle"
                        style="background-color: #2cce7d"
                        @click="goToQuestion1"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz two</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion2"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz three</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion3"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz four</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion4"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz five</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion5"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz six</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion6"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz seven</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion7"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz eight</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion8"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz nine</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion9"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-row style="width: 100%">
                  <v-col>
                    <v-card
                      class="mt-5 selected"
                      style="cursor: pointer; display: flex; flex-flow: column"
                    >
                      <v-card-title style="text-align: center"
                        >quiz ten</v-card-title
                      >
                      <v-card-text style="text-align: center"
                        >5 questions</v-card-text
                      >
                      <v-btn
                        style="background-color: #2cce7d"
                        @click="goToQuestion10"
                        >start</v-btn
                      >
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-navigation-drawer></v-layout
        >
      </v-col>
    </v-row>
  </v-container>
  <your-level style="position: absolute; top: 5%; left: 20%; width: 500px" />
</template>
<script>
import { defineComponent } from "vue";
import YourLevel from "@/views/YourLevel.vue";
export default defineComponent({
  inject: ["Emitter"],
  components: {
    YourLevel,
  },
  data() {
    return {
      isShow: true,
      drawer: true,
      firstName: "",
      lastName: "",
      age: 0,
    };
  },
  methods: {
    showLevel() {
      this.Emitter.emit("showLevel");
    },
    signIn() {
      this.$router.push({ name: "signIn" });
    },
    goToQuestion1() {
      this.isShow = false;
      this.$router.push({ name: "quizOne" });
    },
    goToQuestion2() {
      this.isShow = false;
      this.$router.push({ name: "quizTwo" });
    },
    goToQuestion3() {
      this.isShow = false;
      this.$router.push({ name: "quizThree" });
    },
    goToQuestion4() {
      this.isShow = false;
      this.$router.push({ name: "quizFour" });
    },
    goToQuestion5() {
      this.isShow = false;
      this.$router.push({ name: "quizFive" });
    },
    goToQuestion6() {
      this.isShow = false;
      this.$router.push({ name: "quizsix" });
    },
    goToQuestion7() {
      this.isShow = false;
      this.$router.push({ name: "quizSeven" });
    },
    goToQuestion8() {
      this.isShow = false;
      this.$router.push({ name: "quizEight" });
    },
    goToQuestion9() {
      this.isShow = false;
      this.$router.push({ name: "quizNine" });
    },
    goToQuestion10() {
      this.isShow = false;
      this.$router.push({ name: "quizTen" });
    },
  },
  mounted() {
    if (localStorage) {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
      this.age = localStorage.getItem("age");
    }
  },
});
</script>
<style lang="scss">
.v-navigation-drawer__scrim {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background-color: rgb(2, 6, 66);
  color: rgb(255, 255, 255);
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}
.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(20, 200, 200);
  }

  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.quiz {
  background-color: #3828ab;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}
.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.quiz-info .question {
  color: #8f8f8f;
  font-size: 1.2rem;
}
.quiz-info .score {
  color: white;
  font-size: 1.25rem;
}
.options {
  margin-bottom: 1rem;
}
.option {
  padding: 1rem;
  display: block;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
}
.option:hover {
  background-color: #2d213f;
}
.option.correct {
  background-color: #2cce7d;
}
.option.wrong {
  background-color: #655aff;
}
.op:last-of-type {
  margin-bottom: 0;
}
.option.disable {
  opacity: 0.5;
}
.option input {
  display: none;
}
.button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 0.5rem;
}
.button:disabled {
  opacity: 0.5;
}
h2 {
  font-size: 1.25 rem;
  margin-top: 2rem;
  text-align: center;
  background-color: rgb(7, 1, 32);
  border-radius: 10px;
  padding: 7px;
}
p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
.selected {
  margin-top: 10px;
  background-image: linear-gradient(180deg, #021777, #03096128);
  background-size: 400% 400%;
  color: white;
  // animation: bganimation 15s infinite;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

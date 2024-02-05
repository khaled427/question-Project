<template>
  <div class="main d-flex">
    <calc-count style="position: relative; top: 100px" />
    <v-container fluid="" style="position: relative; top: -16px" v-if="core">
      <v-row>
        <v-col>
          <main class="app">
            <h1>the quiz</h1>
            <section class="quiz" v-if="!quizComplated">
              <div class="quiz-info">
                <span class="question">{{ getCurrentQuestion.question }}</span>
                <span class="score">
                  score is {{ score }} / {{ questions.length }}</span
                >
              </div>
              <div class="options">
                <label
                  style="text-align: center"
                  v-for="(option, index) in getCurrentQuestion.options"
                  :key="index"
                  :class="`option ${
                    getCurrentQuestion.selected == index
                      ? index == getCurrentQuestion.answer
                        ? 'correct'
                        : 'wrong'
                      : ''
                  } ${
                    getCurrentQuestion.selected != null &&
                    index != getCurrentQuestion.selected
                      ? 'disable'
                      : ''
                  }`"
                >
                  <input
                    type="radio"
                    :name="getCurrentQuestion.index"
                    :value="index"
                    v-model="getCurrentQuestion.selected"
                    :disable="getCurrentQuestion.section"
                    @change="setAnswer"
                  />
                  <span>{{ option }}</span>
                </label>
              </div>
              <button
                class="button"
                @click="nextQuestion"
                :disable="!getCurrentQuestion.selected"
              >
                {{
                  getCurrentQuestion.index == questions.length - 1
                    ? "finish"
                    : getCurrentQuestion.selected == null
                    ? "select an option"
                    : " next question"
                }}
              </button>
            </section>
            <section v-else>
              <h2>you have finish</h2>
              <p>your score is {{ score }} / {{ questions.length }}</p>
              <v-btn
                style="
                  background-color: #2cce7d;
                  left: 50%;
                  top: 20px;
                  transform: translate(-50%);
                "
                @click="$router.push({ name: 'quizTwo' })"
                >next quiz</v-btn
              >
              <v-btn
                style="
                  background-color: #2cce7d;
                  left: 2.5%;
                  top: 70px;
                  transform: translate(-50%);
                "
                @click="$router.push({ name: 'Home_page' })"
                >home page</v-btn
              >
            </section>
          </main>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import calcCount from "@/views/calcCount.vue";
const core = true;
const questions = ref([
  {
    question: "what is 1+1",
    answer: 2,
    options: ["3", "5", "2"],
    selected: null,
  },
  {
    question: "what is 1*10 ?",
    answer: 0,
    options: ["10", "85", "16"],
    selected: null,
  },
  {
    question: "what is 15/2",
    answer: 3,
    options: ["1", "13", "8", "7.5"],
    selected: null,
  },
]);
const quizComplated = ref(false);
const currentquestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});
const getCurrentQuestion = computed(() => {
  let question = questions.value[currentquestion.value];
  question.index = currentquestion.value;
  return question;
});
const setAnswer = (evt) => {
  questions.value[currentquestion.value].selected = evt.target.value;
  evt.target.value = null;
};
const nextQuestion = () => {
  if (currentquestion.value < questions.value.length - 1) {
    currentquestion.value++;
  } else {
    quizComplated.value = true;
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background-color: rgb(1, 7, 88);
  color: rgb(255, 255, 255);
}
@keyframes ballMove {
  from {
  }
  to {
  }
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}
.contains {
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(200, 200, 200);
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
  background-color: #ff5a5f;
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
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
.selected {
  margin-top: 10px;
  background-image: linear-gradient(
    125deg,
    #2c3e50,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad
  );
  background-size: 400% 400%;
  animation: bganimation 15s infinite;
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

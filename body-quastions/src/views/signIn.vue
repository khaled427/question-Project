<template>
  <v-container class="w-50 bg-grey-lighten-1 mt-5">
    {{ names }}
    <v-row>
      <v-col style="justify-content: center; display: flex">
        <form style="width: 100%">
          <v-card
            style="
              justify-items: center;
              display: flex;
              flex-flow: column;
              align-items: center;
              text-align: center;
            "
          >
            <v-card-title style="text-align: center"
              >YOUR ACCOUNT.</v-card-title
            >
            <div class="firstName">
              <v-card-text style="caret-color: transparent"
                >First name</v-card-text
              >
              <input type="text" v-model="firsName" />
            </div>
            <div class="lastName">
              <v-card-text style="caret-color: transparent"
                >Last name</v-card-text
              >
              <input type="text" v-model="lastName" />
            </div>
            <div class="age">
              <v-card-text style="caret-color: transparent">Age</v-card-text>
              <input type="number" v-model="age" />
            </div>
            <div class="password">
              <v-card-text style="caret-color: transparent"
                >Password</v-card-text
              ><input type="password" v-model="password1" />
            </div>
            <div class="password">
              <v-card-text style="caret-color: transparent"
                >Confirm Password</v-card-text
              >
              <input type="password" v-model="password" />
            </div>
            <div class="password mb-10">
              <v-card-text style="caret-color: transparent">Email</v-card-text>
              <input type="email" v-model="email" />
            </div>
            <v-btn
              style="
                position: absolute;
                bottom: 5px;
                right: 5px;
                background-color: green;
              "
              @click="setToLocalStorage"
              >submit</v-btn
            >
            <v-btn
              style="
                position: absolute;
                bottom: 5px;
                left: 5px;
                background-color: red;
              "
              >reset</v-btn
            >
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      firsName: "",
      lastName: "",
      password: "",
      password1: "",
      email: "",
      age: 15,
    };
  },
  methods: {
    setToLocalStorage() {
      localStorage.setItem("firstName", this.firsName);
      localStorage.setItem("lastName", this.lastName);
      localStorage.setItem("password", this.password);
      localStorage.setItem("email", this.email);
      localStorage.setItem("age", this.age);
      this.firsName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.password1 = "";
      this.age = "";
    },
  },
};
</script>
<style>
body {
  background-color: rgb(2, 6, 66);
  color: rgb(255, 255, 255);
}
input {
  border: 1px solid orange;
  padding: 0px 5px 0px 5px;
}
</style>

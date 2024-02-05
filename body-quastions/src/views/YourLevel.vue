<template>
  <v-container v-if="showLevel">
    <v-btn
      @click="showLevel = false"
      style="
        border-radius: 50%;
        color: red;
        position: absolute;
        top: 0px;
        right: 0;
        z-index: 2;
      "
      ><v-icon>mdi-close</v-icon></v-btn
    >
    <v-row>
      <v-col>
        <v-card style="background-color: rgba(0, 0, 255, 0.281)">
          <v-card class="mb-5">
            <v-card-title
              style="
                color: black;
                text-align: center;
                background-color: rgb(7, 37, 207);
              "
              >level One</v-card-title
            >
            <v-card-text
              style="
                color: black;
                text-align: center;
                background-color: rgb(0, 255, 136);
              "
              >start from the beginner level</v-card-text
            >
          </v-card>
          <v-card class="mb-5">
            <v-card-title
              style="
                color: black;
                text-align: center;
                background-color: rgb(7, 37, 207);
              "
              >level Two</v-card-title
            >
            <v-card-text
              style="
                color: black;
                text-align: center;
                background-color: rgb(0, 255, 136);
              "
              >start from the second level</v-card-text
            >
          </v-card>
          <v-card class="mb-5">
            <v-card-title
              style="
                color: black;
                text-align: center;
                background-color: rgb(7, 37, 207);
              "
              >level Tree</v-card-title
            >
            <v-card-text
              style="
                color: black;
                text-align: center;
                background-color: rgb(0, 255, 136);
              "
              >start from the third level</v-card-text
            >
          </v-card>
          <v-card class="mb-5">
            <v-card-title
              style="
                color: black;
                text-align: center;
                background-color: rgb(7, 37, 207);
              "
              >level Four</v-card-title
            >
            <v-card-text
              style="
                color: black;
                text-align: center;
                background-color: rgb(0, 255, 136);
              "
              >start from the fourth level</v-card-text
            >
          </v-card>
          <v-card class="mb-5">
            <v-card-title
              style="
                color: black;
                text-align: center;
                background-color: rgb(7, 37, 207);
              "
              >level Five</v-card-title
            >
            <v-card-text
              style="
                color: black;
                text-align: center;
                background-color: rgb(0, 255, 136);
              "
              >start from the fifth level</v-card-text
            >
          </v-card></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      showLevel: false,
    };
  },
  mounted() {
    this.Emitter.on("showLevel", () => {
      this.showLevel = true;
    });
  },
};
</script>
<style>
.cardLevel {
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
</style>

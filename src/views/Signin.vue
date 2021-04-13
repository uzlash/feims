<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container custom__bg">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="5" sm="7" md="5">
            <v-card>
              <v-card-text class="mt-12">
              <h1 class="text-center font-weight-thin text-h4 text--darken-1">
                Welcome to <span class="blue--text">feims</span>
              </h1>
                  
              <div class="text-center mt-4">
                <v-btn class="mx-2" color="blue" fab small outlined>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn class="mx-2" color="red" fab small outlined>
                  <v-icon>mdi-google</v-icon>
                </v-btn>
              </div>
              <v-form @submit.prevent ref="form">
                <v-row justify="center">
                  <v-col cols="8">
                    <div>
                      <span>Email <span class="blue--text">*</span></span>
                      <v-text-field
                        v-model="email"
                        solo
                        name="Email"
                       
                        type="text"
                        prepend-inner-icon="mdi-email"
                        color="light-blue"
                        :rules="[rules.required, rules.email]"
                      />
                    </div>
                  </v-col>

                  <v-col cols="8">
                    <div>
                      <span>Password <span class="blue--text">*</span></span>
                      <v-text-field
                        v-model="password"
                        prepend-inner-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        solo
                        label="Enter your Password"
                        name="password"
                        
                        color="blue"
                        @click:append="showPassword = !showPassword"
                        :rules="[rules.required, rules.password]"
                      />
                      <ForgotPasswordPopup />
                    </div>
                  </v-col>
                </v-row>
              </v-form>
              <div class="text-center">
                <v-btn
                  @click="signIn()"
                  :loading="signInLoading"
                 
                  class="text-capitalize px-8"
                  color="light-blue"
                  dark
                 
               
                  >Sign In</v-btn
                >
              </div>
              <v-card-subtitle>Dont have account? <v-btn to="/signup" small text color="blue">Click here</v-btn>

              </v-card-subtitle>
            </v-card-text>
            </v-card>
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
import ForgotPasswordPopup from "../components/ForgotPasswordPopup";
export default {
  components: {
    ForgotPasswordPopup,
  },
  data: () => ({
    step: 1,
    Name: "",
    password: "",
    email: "",

    address: "",

    showPassword: "",
    signUpLoading: false,
    signInLoading: false,
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
  }),
  methods: {
    signIn() {
      const signInData = {
        username: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        this.$store.dispatch("SIGN_IN", signInData);
      }
    },
    signUp() {
      const signUpData = {
        name: this.name,

        username: this.email,
        password: this.password,

        address: this.address,
      };
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("SIGN_UP", signUpData)
          .then(() => {
            //success logic
          })
          .catch((err) => {
            //error logic
            console.log("Error>>>>", err);
          });
      }
    },
  },
};
</script>

<style>
.custom__bg {
  background-color: lightblue;
}
.custom__col {
  background: url("../assets/img.png");
}
.custom__scrollable__div {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
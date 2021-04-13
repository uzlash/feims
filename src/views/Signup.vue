<template>
  <v-app>
    <v-main class="custom__background">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="5" md7 xs10> 
            <v-container fluid class="fillheight">
              <v-card>
                <v-card-text class="mt-12">
                  <h1
                    class="text-center font-weight-thin text-h4 text--darken-2"
                  >
                    Register
                  </h1>

                  <div class="text-center mt-4">
                    <v-btn class="mx-2" color="blue" fab small outlined>
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>

                    <v-btn cl ass="mx-2" color="red" fab small outlined>
                      <v-icon>mdi-google</v-icon>
                    </v-btn>
                  </div>
                  <v-form @submit.prevent ref="form">
                    <v-row justify="center">
                      <v-col cols="12">
                        <div>
                          <span>Name <span class="blue--text">*</span></span>
                          <v-text-field
                            v-model="email"
                            label="Name"
                            name="name"
                            solo
                            type="text"
                            color="blue"
                          />
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div>
                          <span>Email <span class="blue--text">*</span></span>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            solo
                            type="text"
                            color="blue"
                          />
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div>
                          <span
                            >Password <span class="blue--text">*</span></span
                          >
                          <v-text-field
                            solo
                            label="Password"
                            name="password"
                            color="blue"
                          />
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div>
                          <span>Address <span class="blue--text">*</span></span>
                          <v-text-field
                            solo
                            label="Adress"
                            name="Adress"
                            color="blue"
                          />
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                  <div class="text-center">
                    <v-btn class="text-capitalize px-8" color="light-blue" dark
                      >Sign Up</v-btn
                    >
                  </div>

                  <v-card-subtitle class="">Have and account? <v-btn text color="blue" to="/signin" small>Click here</v-btn> </v-card-subtitle>
                </v-card-text>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Signup",
};
</script>
<style scoped>
.custom__background {
}
</style>
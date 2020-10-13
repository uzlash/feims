<template>
  <v-app class="custom__style">
    <v-container>
      <v-row>
        <v-col cols="9" md8>
          <v-col cols="9">
            <v-card class="overflow-hidden">
              <v-toolbar flat color="light-blue">
                <v-icon left color="white">mdi-account</v-icon>
                <v-toolbar-title class="white--text">
                  User Profile
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <span>Name</span>
                <v-text-field
                  color="light-blue"
                  label="Name"
                  solo
                  prepend-inner-icon="mdi-pen"
                ></v-text-field>
              </v-card-text>
              <v-card-text>
                <span>Email</span>
                <v-text-field
                  color="light-blue"
                  label="Email"
                  solo
                  prepend-inner-icon="mdi-email"
                ></v-text-field>
              </v-card-text>
              <v-card-text>
                <span>Address</span>
                <v-text-field
                  color="light-blue"
                  label="Address"
                  solo
                  prepend-inner-icon="mdi-home"
                ></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-col>
        </v-col>
        <v-col cols="3">
          <v-card height="300">
            <v-card class="text-center mt-5" flat>
              <v-avatar size="100" color="">
                <img src="../assets/avatar-1.jpg" alt="alt" />
              </v-avatar>
              <h3 class="">keiko</h3>
              <h6>keiko ng</h6>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {};
  },
};
</script>
<style scoped>
.custom__style {
  background-color: #fafafa;
}
</style>
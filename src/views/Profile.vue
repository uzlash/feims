<template>
  <v-app class="custom__style">
    <v-container>
      <v-row>
        <v-col cols="10">
          <div>
            <v-col cols="12">
              <v-avatar size="150" color="">
                <img src="../assets/avatar-1.jpg" alt="alt" />
              </v-avatar>
            </v-col>
          </div>
          
          <v-col cols="10">
            <div class="text-center">
              <v-col cols="10">
                <v-text-field solo label="Name" prepend-inner-icon="mdi-pen">
                </v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field solo label="Email" prepend-inner-icon="mdi-email">
                </v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field solo label="phone" prepend-inner-icon="mdi-phone">
                </v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  solo
                  label="Adderss"
                  prepend-inner-icon="mdi-home"
                >
                </v-text-field>

                <v-row justify="end">
                  <v-btn color="light-blue" class="white--text"
                    >Save changes</v-btn
                  >
                </v-row>
              </v-col>
            </div>
          </v-col>
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
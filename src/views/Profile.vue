<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md6 xs12>
        <v-card class="ma-5 text-center my-12" elevation-10>
          <v-card-title> </v-card-title>
          <v-avatar class="mb-4" size="300" circle elevation-12>
            <img src="https://i.imgur.com/HBOQXZp.png" alt="" />
          </v-avatar>
          <h2 class="display-1">keiko</h2>
         
          <h3 class="text-h5 font-weight-light">
            <v-icon>mdi-domain</v-icon> keiko Nigeria
          </h3>
          <h4 class="text-h5 font-weight-light">
            <v-icon>mdi-email</v-icon> keikong@yahoo.com
          </h4>
          
          <br />
          <v-divider class=""></v-divider>
          
          
              <v-card flat>
                <v-list v-for="item in History" :key="item.id">
                  <v-list-item>
                    <v-list-item-avatar
                      
                      size="100"
                      
                    >
                     <img src="../assets/building-2.jpeg" alt="">
                    </v-list-item-avatar>

                    <v-list-item-title class="font-weight-light">{{
                      item.title1
                    }}</v-list-item-title>
                  </v-list-item>
                  <v-divider inset></v-divider>
                </v-list>
              </v-card>
            
            

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      dialog: false,
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      History: [
        {
          id: 1,
          color: "blue",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 2,
          color: "orange",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 3,
          color: "blue",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 4,
          color: "red",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 5,
          color: "teal",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 6,
          color: "green",
          icon: "../assets/logo.svg",
          title1: "keiko building",
        },
        {
          id: 7,
          color: "pink",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
        {
          id: 8,
          color: "blue",
          icon: "mdi-file-document",
          title1: "keiko building",
        },
      ],
    };
  },
};
</script>
<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-list-item
          color="light-blue"
          v-for="(child, i) in items"
          :key="i"
          link
          :to="child.route"
        >
          <v-list-item-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ child.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="light-blue"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down font-weight-light">FEIMS</span>
      </v-toolbar-title>
      <v-text-field
        dense
        rounded
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mr-2" v-on="on" v-bind="attrs">
            <v-badge content="15" color="red" overlap>
              <v-icon color="white">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card
          max-width="400"
          class="mx-auto cutom__card--overflow"
          height="400"
          width="350"
        >
          <v-card-title primary-title> Notifications </v-card-title>

          <v-list>
            <v-list-item-subtitle class="ml-3">Earlier</v-list-item-subtitle>
            <v-list-item v-for="message in messages" :key="message.title" to="">
              <v-avatar>
                <img :src="message.image" alt="alt" class="mr-2" />
              </v-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ message.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ message.tile }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-on="on" v-bind="attrs">
            <v-avatar size="32px" item>
              <v-img
                src="https://i.imgur.com/HBOQXZp.png"
                alt="Profile Image"
              ></v-img
            ></v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile">
            <v-list-item-title>Edit profile</v-list-item-title>
          </v-list-item>
         
          <v-list-item to="/logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-map-marker", text: "Facility", route: "/" },
      { icon: "mdi-office-building", text: "Sites", route: "/site" },
      { icon: "mdi-warehouse", text: "Buildings", route: "/building" },
      { icon: "mdi-all-inclusive", text: "Equipments", route: "equipment" },
      { icon: "mdi-chart-bar", text: "Reports", route: "report" },
      { icon: "mdi-cog", text: "Settings", route: "setting" },
    ],
    messages: [
      {
        title: "solo",
        tile: "solo cooperation",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
        
      },
      {
        title: "echo",
        tile: "echo cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "flesh",
        tile: "flesh cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "super",
        tile: "super cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "element",
        tile: "element cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "micro",
        tile: "micro cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "survey",
        tile: "survey cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "eagle",
        tile: "eagle cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "north",
        tile: "north cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "lavel",
        tile: "lavel cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "fine",
        tile: "fine cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "some",
        tile: "some cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "blade",
        tile: "blade cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "jordan",
        tile: "jordan cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "lorem",
        tile: "lorem cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "keiko",
        tile: "keiko cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "swift",
        tile: "swift cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "switch",
        tile: "switch cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "net",
        tile: "net cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
      {
        title: "Ash",
        tile: "ash cooperation",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl47U8lAdlXW5iIfy9gzuhV8wwM6prkX8iFQ&usqp=CAU",
      },
    ],
  }),
};
</script>
<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-list-item color="light-blue"
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
              <v-list-tile-sub-title class="ml-3"
                >Earlier</v-list-tile-sub-title
              >
              <v-list-item
                v-for="message in messages"
                :key="message.title"
                to=""
              >
                <v-avatar>
                  <img src="../assets/b-9.jpeg" alt="alt" class="mr-2" />
                </v-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ message.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    message.tile
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      <v-btn icon large to="/profile">
        <v-avatar size="32px" item>
          <v-img
            src="https://i.imgur.com/HBOQXZp.png"
            alt="Profile Image"
          ></v-img
        ></v-avatar>
      </v-btn>
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
      
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
         {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
         {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
         {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},
        {title: 'keiko', tile: 'keico cooperation'},

        

    ]
  }),
};
</script>
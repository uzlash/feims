<template>
    <v-footer padless app inset>
        <v-card class="flex" flat tile color="" elevation="10">
            <v-card-text class="py-2 white--text text-center">
              <v-breadcrumbs :items="items" large class="pa-2 red--text"></v-breadcrumbs>
              <!-- <Breadcrumbs/> -->
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
            items: [
        {
          text: 'Kasu1',
          disabled: false,
          to: '/site/kasu1',
        },
        {
          text: 'LLH1',
          disabled: false,
          to: '/building/llh1',
        },
        {
          text: 'Equipment',
          disabled: false,
          to: 'breadcrumbs_link_2',
        },
      ]
    })
}
</script>
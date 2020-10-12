<template>
    <v-footer padless app inset>
        <v-card class="flex" flat tile color="" elevation="10">
            <!-- <v-card-text class="py-2 white--text text-center"> -->
                      <v-breadcrumbs :items="items" large class="pa-2 red--text"></v-breadcrumbs>
            <!-- </v-card-text> -->
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
            items: [
        {
          text: 'Sites',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ]
    })
}
</script>
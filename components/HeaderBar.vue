<template>
  <v-app-bar app>
    <v-row class="mx-2">
      <v-toolbar-title class="mr-5">
        <nuxt-link :to="localePath('index')">
          <img :src="logo" style="width:200px"
        /></nuxt-link>
      </v-toolbar-title>
      <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
        <v-btn v-for="i in linkItem.router" :key="i.name" text disabled>{{
          i.name
        }}</v-btn>
        <v-btn v-for="j in linkItem.link" :key="j.name" :href="j.to" text>{{
          j.name
        }}</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-app-bar-nav-icon
          v-show="!$vuetify.breakpoint.mdAndUp"
          @click="$emit('show-draw', !stateDraw)"
        />
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn @click="show" class="mx-1" outlined color="info">
          {{ this.$vuetify.theme.dark ? '開燈' : '關燈' }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="k in linkItem.tool"
          :key="k.name"
          class="mx-1"
          outlined
          color="info"
          disabled
          >{{ k.name }}</v-btn
        >
      </v-toolbar-items>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    linkItem: {
      type: Object,
      required: true,
      default() {
        // the default model
        return {
          router: [{ name: null, icon: null, to: null }],
          link: [{ name: null, icon: null, to: null }],
          tool: [{ name: null, icon: null, to: null }]
        }
      }
    }
  },
  data() {
    return {
      stateDraw: false
    }
  },
  computed: {
    logo() {
      if (this.$vuetify.theme.dark)
        return 'https://zh.nuxtjs.org/logos/built-with-nuxt-white.svg'
      else return 'https://nuxtjs.org/logos/built-with-nuxt.svg'
    }
  },
  methods: {
    show() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

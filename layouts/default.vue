<template>
  <v-app>
    <v-navigation-drawer v-model="draw" app disable-resize-watcher>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <nuxt-link :to="localePath('login')">
              <v-avatar color="primary" class="mr-2">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
              {{
                `${$t('layout.default.login')} / ${$t(
                  'layout.default.register'
                )}`
              }}</nuxt-link
            >
          </v-list-item-title>
          <v-list-item-subtitle v-show="false">
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
      <v-list dense nav>
        <v-btn
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          class="mx-1"
          outlined
          color="info"
        >
          {{ this.$vuetify.theme.dark ? '開燈' : '關燈' }}
        </v-btn></v-list
      >
      <v-list dense nav>
        <v-list-item v-for="i in item.router" :key="i.name" link disabled>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon class="mr-2">{{ i.icon }}</v-icon>
              {{ i.name }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="j in item.link" :key="j.name" :href="j.to" link>
          <v-list-item-content>
            <v-list-item-title
              ><v-icon class="mr-2">{{ j.icon }}</v-icon
              >{{ j.name }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <HeaderBar :linkItem="item" @show-draw="draw = $event" />

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app absolute>
      <span>Yuntech Network Management. All rights reserved.</span>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'Default',
  components: { HeaderBar },
  data() {
    return {
      item: {
        router: [
          {
            name: this.$t('layout.default.contract'),
            icon: 'mdi-information-variant',
            to: null
          },
          {
            name: this.$t('layout.default.announce'),
            icon: 'mdi-bullhorn',
            to: null
          },
          {
            name: this.$t('layout.default.about'),
            icon: 'mdi-face-agent',
            to: null
          }
        ],
        tool: [
          {
            name: this.$t('layout.default.login'),
            icon: 'mdi-information',
            to: this.localePath('login')
          },
          {
            name: this.$t('layout.default.register'),
            icon: 'mdi-information',
            to: this.localePath('register')
          }
        ],
        link: [
          {
            name: this.$t('layout.default.netflow'),
            icon: 'mdi-swap-vertical-bold',
            to: 'http://cnms.yuntech.edu.tw/netflow.pl'
          }
        ]
      },
      draw: false
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
router-link,
a {
  text-decoration: none !important;
}
</style>

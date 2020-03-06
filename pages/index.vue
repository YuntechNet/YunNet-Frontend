<template>
  <div :class="isDark.background">
    <v-container fill-height class="justify-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <p
            :class="isDark.color"
            class="font-weight-medium text-center my-8"
            style="font-size: 10vh;"
          >
            {{ $t('index.yunnet') }}
          </p>
          <v-col
            v-if="false && $vuetify.breakpoint.xlOnly"
            offset="2"
            cols="8"
            class="d-flex justify-space-around my-8"
          >
            <div v-for="j in avatar" :key="j.icon">
              <v-avatar color="teal accent-4" size="62">
                <v-icon dark>{{ j.icon }}</v-icon>
              </v-avatar>
              <p v-show="$vuetify.breakpoint.mdAndUp" class="text-center mt-1">
                {{ j.text }}
              </p>
            </div>
          </v-col>
          <v-img :src="isDark.hero" contain height="50vh"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row align="center">
            <v-col>
              <v-window v-model="window" class="elevation-1" vertical>
                <v-window-item v-for="j in length" :key="j">
                  <v-card>
                    <v-card-text>
                      <div class="mb-4 d-flex">
                        <v-avatar color="grey" class="mr-4"></v-avatar>
                        <v-list-item-title class="title">
                          Title {{ j }}
                        </v-list-item-title>
                        <v-spacer />
                        <v-btn icon>
                          <v-icon>mdi-account</v-icon>
                        </v-btn>
                      </div>

                      <p class="title">
                        2010-08-28 02:01:49
                        學校宿舍流量每天限用8GB，超過用量依照規定封鎖流量。
                        用量達8GB以上/鎖卡3天。 用量達9GB以上/鎖卡4天。
                        用量達10GB以上/鎖卡5天。
                        依此類推至15GB以上視為惡意超流/鎖卡15天
                        若違反宿舍規定，盜用別人網路，造成其他住宿生困擾，依學校校規懲處。
                      </p>
                    </v-card-text>
                    <v-item-group v-model="window" class="text-center mr-6">
                      <div>
                        <v-item>
                          <div>
                            <v-btn icon>
                              <v-icon v-for="n in length" :key="n"
                                >mdi-record</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-item>
                      </div>
                    </v-item-group>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-col></v-row
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 3,
      window: 0,
      avatar: [
        { icon: 'mdi-hammer-wrench', text: '快速維修' },
        { icon: 'mdi-tooltip-text', text: '專人諮詢' },
        { icon: 'mdi-power-plug', text: '設備支援' },
        { icon: 'mdi-police-badge', text: '網路管理' }
      ]
    }
  },
  computed: {
    isDark() {
      if (this.$vuetify.theme.dark)
        return {
          background: 'darkBK',
          hero: '/undraw_online_test_gba7.svg',
          color: ['white--text']
        }
      else
        return {
          background: 'lightBK',
          hero: '/undraw_good_team_m7uu.svg',
          color: ['blue-grey--text', 'text--darken-3']
        }
    }
  }
}
</script>

<style>
.lightBK {
  height: 100%;
  background-color: #eafdff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e6f8fb' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23e2f3f6' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23dfeef2' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23dbe9ed' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23d7e4e9' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.darkBK {
  height: 100%;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>

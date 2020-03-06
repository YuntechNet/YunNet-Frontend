<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="mb-6">
            <span>登入</span>
            <v-spacer />
            <v-btn icon> <v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-title>
            <form @submit.prevent="onSubmit">
              <recaptcha
                @error="onError"
                @success="onSuccess"
                @expired="onExpired"
              />
              <h3>Username:</h3>
              <br />
              <h3>Password:</h3>
            </form>
          </v-card-title>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
export default {
  layout: 'blank',
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      console.log('Succeeded:', token)
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>

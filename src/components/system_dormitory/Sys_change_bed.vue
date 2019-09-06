<template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-10 offset-1 offset-sm-3 col-sm-6 frame rounded-lg"
          style="background-color: rgb(51, 51, 51,0.6);"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <router-link
                  :to="{name:'Userinfo'}"
                  class="btn btn-default btn-lg"
                  style="background-color: white;"
                >
                  <font-awesome-icon icon="times" />
                </router-link>
              </div>
              <div class="float-left">
                <h1>Change bed</h1>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-10 offset-1">
            <b-alert :show="errors" variant="danger">{{errors}}</b-alert>
            <b-form @submit.prevent="submit">
              <h5>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-bed"
                  label="舊床位｜Old bed："
                  label-for="old-bed"
                >
                  <b-form-input
                    id="old-bed"
                    maxlength="40"
                    v-model="old_bed"
                    required
                    placeholder="Old"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-bed"
                  label="新床位｜New bed："
                  label-for="new-bed"
                >
                  <b-form-input
                    id="new-bed"
                    maxlength="40"
                    required
                    v-model="new_bed"
                    placeholder="New"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-left"
                  style="color:white;"
                  id="chang-bed"
                  label="確認床位｜Confirm bed："
                  label-for="confirm-bed"
                >
                  <b-form-input
                    id="confirm-bed"
                    maxlength="40"
                    v-model="REnew_bed"
                    required
                    placeholder="Confirm"
                  ></b-form-input>
                </b-form-group>
              </h5>
              <div>
                <input class="btn btn-primary" type="submit" value="確定" />
                <input class="btn btn-danger" type="reset" value="重填" />
              </div>
            </b-form>
          </div>
          <div class="col-12" style="padding-top: 2%;"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
import { mapState } from "vuex"
import { SYSTEM_CHANGE_BED, ERROR } from "@/store/actions_type"

export default {
  name: "Sys_change_bed",
  components: {
    Background
  },
  data() {
    return {
      old_bed: null,
      new_bed: null,
      REnew_bed: null
    }
  },
  methods: {
    submit() {
      let source_bed = this.old_bed
      let dest_bed = this.new_bed
      if (this.new_bed === this.REnew_bed) {
        this.$store.dispatch(SYSTEM_CHANGE_BED, { source_bed, dest_bed })
      } else {
        this.$store.dispatch(ERROR, "重複床位錯誤!")
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>

<style scoped>
h1,
label {
  color: white;
}
hr {
  background-color: white;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>

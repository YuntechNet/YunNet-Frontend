    <template>
  <div>
    <SysDormitory />
    <div class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 input-group"
        style="background-color: rgb(51, 51, 51,0.6);"
      >
        <b-form-input
          class="col-3 col-sm-3 offset-sm-4"
          type="password"
          id="password"
          required
          v-model="password"
          placeholder="Student ID / Portal / Room / Bed / IP / MAC"
        ></b-form-input>
        <input class="btn btn-primary" type="submit" value="確定" />
        <div class="col-12" style="padding-top: 2%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SysDormitory from "@/components/system_dormitory/SysDormitory"
export default {
  name: "Sys_dorm_query",
  components: {
    SysDormitory
  },
  data() {
    return {
      username: null,
      password: null
    }
  }
}
</script>

<style>
</style>
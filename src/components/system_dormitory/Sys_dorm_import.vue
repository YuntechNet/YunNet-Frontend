    <template>
  <div>
    <SysDormitory />

    <div class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 input-group"
        style="background-color: rgb(51, 51, 51,0.6);"
      >
        <div class="col-12 col-sm-5 offset-sm-6">
          <span style="margin:5px 5px" class="input-group-addon" id="basic-addon3">Type</span>
          <select
            style="margin:10px 5px"
            id="import_select"
            name="import_select"
            class="form-control"
            onchange="ul_switch()"
          >
            <option value=" "></option>
            <option value="bed">Bed</option>

            <option value="user">一般房生</option>
            <option value="panda">晨康房生</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SysDormitory from "@/components/system_dormitory/SysDormitory"
export default {
  name: "Sys_dorm_import",
  components: {
    SysDormitory
  }
}
</script>

<style>
label,
p,
span {
  color: white;
  font-weight: 800;
}
</style>
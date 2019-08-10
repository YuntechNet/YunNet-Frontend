    <template>
<div>
    <System />
    <div class="row">
   <div class="col-12 col-sm-10 offset-sm-1" style="background-color: rgb(51, 51, 51,0.6);">
      <div class="col-12 col-sm-10 offset-sm-1 form-group form-inline">
                <label style="margin:0px 5px;">Account: </label>
                <input style="margin:0px 5px;" class="form-control" id="student_id" name="student_id" type="text" value="">
                <input style="margin:0px 5px;" class="btn btn-primary" type="button" value="Read" onclick="readPermission();">
                
            </div>
        <div class="col-12" style="padding:1%"></div>
   </div>
   </div >
   </div>
</template>

<script>
import System from "@/components/system_universal/System"

export default {
  name: "Sys_uni_permission",
  components: {
    System,

  }
}
</script>

<style>
label,p{
    color:white;
    font-weight:800;
}
</style>
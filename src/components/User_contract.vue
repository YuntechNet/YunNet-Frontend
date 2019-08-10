    <template>
  <div class="row">
    <background />
    <section class="container-fluid">
      <div class="row">
        <div class="col-12" style="padding:3%;"></div>
        <div
          class="col-12 col-sm-10 offset-sm-1 frame"
          style="background-color: rgb(51, 51, 51,0.6);height:130vh;"
        >
          <div class="row">
            <div class="col-10 offset-1" style="padding-top: 3%; padding-bottom: 2%; color: white;">
              <div class="float-right">
                <a class="btn btn-default btn-lg" href="./" style="background-color: white;">
                  <font-awesome-icon icon="times" />
                </a>
              </div>
              <div class="float-left">
                <h1>User Contract</h1>
              </div>
            </div>
          </div>
          <div class="col-10 offset-1">
            <hr />
          </div>
          <div class="col-12" style="padding:2%;"></div>
          <div class="col-12 col-sm-10 offset-sm-1" style="height:80vh;">
            <iframe
              id="contract"
              name="contract"
              width="100%"
              height="100%"
              src="./#/contract"
              style="background-color: white;"
            ></iframe>
          </div>
        </div>
        <div class="col-12" style="padding:20%;"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from "@/components/Background"
export default {
  name: "User_contract",
  components: {
    Background
  }
}
</script>

<style scoped>
hr {
  background-color: white;
}

</style>
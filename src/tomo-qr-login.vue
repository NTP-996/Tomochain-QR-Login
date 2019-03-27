<script>
import axios from "axios";
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  name: "TomoQrLogin", // vue component name
  components: {
    VueQrcode
  },
  data() {
    return {
      qrCode: "text"
    };
  },
  props: {
    address: {
      type: String,
      required: true
    },
    app: {
      type: String,
      required: true
    }
  },
  created: async function() {
    const hasQRCOde = this.loginByQRCode();
    if (await hasQRCOde) {
      this.interval = setInterval(async () => {
        await this.getLoginResult();
      }, 3000);
    }
  },
  mounted() {},
  methods: {
    async loginByQRCode() {
      // generate qr code
      const { data } = await axios.get(
        "http://9b77992e.ngrok.io/api/auth/generateLoginQR"
      );
      this.id = data.id;
      this.message = this.app + data.message;
      this.qrCode = encodeURI(
        "tomochain:login?message=" + this.message + "&submitURL=" + data.url
      );
      return true;
    },
    async getLoginResult() {
      // calling api every 2 seconds
      const { data } = await axios.get(
        "http://9b77992e.ngrok.io/api/auth/getLoginResult?id=" +
          this.id
      );

      if (!data.error && data) {
        this.address = data.user;
        this.$emit("success", this.address);
      }
    }
  }
};
</script>

<template>
  <div class="tomo-qr-login">
    <div class="container">
      <vue-qrcode
        :options="{ width: 250 }"
        :value="qrCode"
        class="img-fluid text-center text-lg-right"
        style="height: 220px;width: 220px;"
      />
    </div>
  </div>
</template>

<style scoped>
.tomo-qr-login {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.tomo-qr-login p {
  margin: 0 0 1em;
}
</style>
 
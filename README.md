# Tomochain QR Login

Tomochain login by QR

### Installing

```
npm i tomo-qr-login --save
```

### Usage 

App.vue


```
<template>
    <tomo-qr-login v-on:success="load($event)" v-bind:app="appname"/>
    <p v-if="loading === true">{{address}}</p>
</template>
```
```
<script>
import TomoQrLogin from "./components/tomo-qr-login";

export default {
  name: "app",
  data() {
    return {
      loading: false,
      useraddress: "",
      appname: "YOUR_APP_NAME"
    };
  },
  components: {
    TomoQrLogin
  },
  methods: {
    load(address) {
      this.loading = true;
      this.address = address;
    }
  }
};
</script>
```


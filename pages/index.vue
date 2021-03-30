<template>
<div> 
    
    <Navbar /> 
   
 </div> 
</template>

<script>

import Vue from 'vue';
import VueWait from 'vue-wait';

Vue.use(VueWait); // add VueLoading as Vue plugin

export default {
  name: 'Index',
  nuxtI18n: {
    paths: {
      ru: '/',
      en: '/'
    }
  }
}



// export default ({app}) => {
//     // inject options from module
//     const pluginOptions = [<%= serialize(options) %>][0]
//     app.wait = new VueWait(pluginOptions)
// }
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
} */
</style>
<template>
<div> 
  <progress-bar v-if="$wait.any">{{$t('loading')}}</progress-bar>  
    <Navbar /> 
   
 </div> 
</template>

<script>

import Vue from 'vue';
import VueWait from 'vue-wait';


Vue.use(VueWait); // add VueLoading as Vue plugin

export default {
  // name: 'Index',
  nuxtI18n: {
    paths: {
      ru: '/',
      en: '/'
    }
  }
}

</script>

<style>

</style>
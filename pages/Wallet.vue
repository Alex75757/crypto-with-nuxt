<template>
<div v-if="$store.state.success">
    <Navbar /> 
     <b-form @click="onSubmit" class="Group14">
         <b-label> You got permision! </b-label>
     <b-button type="submit"  variant="primary" class="Rect19">
            {{ $t('walletPage.overallBalance') }}
        </b-button>
     </b-form>
 

</div>  
<div v-else> <Navbar />  </div>

    

</template>

<script>
import axios from 'axios'

export default {

 methods: {
    onSubmit (event) {
      event.preventDefault()
    console.log("Bearer" + this.$store.state.access_token)
      
    
    axios.defaults.headers.common['Authorization'] = "Bearer" + this.$store.state.access_token
    axios ({
    
            method: 'get',
            url: 'http://80.87.192.59:5252/api/wallet ',
           
          })
          .then(response => {
            console.log(`response.data.wallets = ${JSON.stringify(response.data.wallets)}`)
            this.$store.commit('walletTokens', response.data.wallets)
            console.log(this.$store.state.tokens)
            this.$router.push("/Wallet2")
          })
          .catch(error => {
          console.log(error)
          })
        

    },
    
  },

 
}
</script>

<style scoped>

.Group14{
  /* Group 14 */

color: aqua;
position: absolute;
width: 245px;
height: 288px;
left: 597px;
top: 113px;
}

.Rect19{
  /* Rectangle 19 */


position: absolute;
width: 245px;
height: 41px;
left: -60px;
top: 40px;

background: linear-gradient(88.29deg, #2F80ED 1.44%, #DE16CA 100%);
border-radius: 3px;
}
</style>
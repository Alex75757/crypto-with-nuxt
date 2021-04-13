<template>
  <div>
    
  <progress-bar v-if="$wait.any">Please wait...</progress-bar>

    <b-form @click="onSubmit">
      <b-form  class="Group13">
      
      <b-form-group>
        <b-form-input
          
          v-model="form.email"
          :placeholder="$t('email')"
          type="email"
          required
        />
      </b-form-group>

      <b-form-group>
        <b-form-input
          
          v-model="form.password"
          :placeholder="$t('password')"
          type="password"
          
          required
          
        />
       
      </b-form-group>
    </b-form>

    <b-button type="submit"  variant="primary" class="Rect19">
        {{ $t('loginPage.loginButton') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
     form: {
        email: '',
        password: ''
     },
     token: []
     
       
    }
    
  },
 
  methods: {
    onSubmit (event) {
      event.preventDefault()

      console.log(JSON.stringify(this.form))

      axios ({
            method: 'post',
            url: 'http://80.87.192.59:5252/api/auth/login',
            data: {
              email: this.form.email,
              password: this.form.password
            // Bearer: access_token,
            }
          })
          .then(response => {
            console.log(response.data)
            console.log(response.status)
            this.token = response.data
            console.log(this.token)
            console.log(this.token.success)
            this.$store.commit('walletSuccess', response.data)
            this.$store.commit('walletSuccessEmail', this.form.email)
            this.$router.push("/Wallet")
            console.log(`store.success = ${this.$store.state.success}`)
          })
          
            
          
          .catch(error => {
          console.log("Access denined")
          console.log(error)

          })
        

    },
    
  }
}
</script>

<style scoped>
.Group13{
  /* Group 13 */


position: absolute;
width: 245px;
height: 288px;
left: 597px;
top: 143px;
}
.Rect19{
  /* Rectangle 19 */


position: absolute;
width: 245px;
height: 41px;
left: 597px;
top: 390px;

background: linear-gradient(88.29deg, #2F80ED 1.44%, #DE16CA 100%);
border-radius: 3px;
}

.Group15{
  /* Group 15 */


position: absolute;
width: 22px;
height: 10.35px;
left: 196px;
top: 329px;

}

.Ellipse1{
  /* Ellipse 1 */


position: absolute;
width: 5.35px;
height: 5.35px;
left: 196px;
top: 334px;

background: #FFFFFF;
}

.Ellipse2{
  /* Ellipse 2 */


position: absolute;
width: 5.35px;
height: 5.35px;
left: 204.32px;
top: 329px;

background: #FFFFFF;
}

.Ellipse3{
  /* Ellipse 3 */


position: absolute;
width: 5.35px;
height: 5.35px;
left: 212.65px;
top: 334px;

background: #FFFFFF;
}

</style>
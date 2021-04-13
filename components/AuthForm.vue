<template>
<v-wait for="fetching data">
    <my-waiter slot="waiting" /> 
 
 <div  >
    
    <b-form @submit="onSubmit">
    <b-form  class="Group13">
     <b-form-group>
        <b-form-input
         
          v-model="form.name"
          :placeholder="$t('name')"
          aria-describedby="input-live-help input-live-feedback"
          required
          @blur="handleBlurName"
        />
        <b-form-invalid-feedback :state="validationName">
          {{nameError}}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-email"
          v-model="form.email"
          :placeholder="$t('email')"
          aria-describedby="input-live-feedback"
          
          @blur="handleBlurEmail"
          
        />
        <b-form-invalid-feedback :state="validationEmail">
          {{emailError}}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-pass"
          v-model="form.password"
          :placeholder="$t('password')"
          type="password"
          aria-describedby="input-live-feedback"
          
          @blur="handleBlurPassword"
        />
        <b-form-invalid-feedback :state="validationPassword">
          {{passwordError}}
        </b-form-invalid-feedback>
      </b-form-group>
    </b-form>

     <b-button type="submit" variant="primary"  class="Rect19">
        {{ $t('registerPage.registerButton') }}
      </b-button>
    </b-form>  
  </div>
 </v-wait>  
</template>

<script>
// import MySpinner from './MySpinner.vue'
import axios from 'axios'
export default {
  // name: 'AuthForm',
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      },
      token: null,
      nameError: '',
      emailError: '',
      passwordError: ''
    }
  },  
  computed: {
    validationName () {
      return this.form.name.length >= 2 && this.form.name.length <= 100
    },
    validationEmail () {
      return this.form.email.includes("@") 
      // && !(this.form.email.startsWith('@'))
    },
    validationPassword () {
      return this.form.password.length >= 4
    }
  },
  methods: {
    
    handleBlurName () {
      this.nameError = this.$t('registerPage.nameError')
    },
    handleBlurEmail () {
      this.emailError = this.$t('registerPage.emailError')
    },
    handleBlurPassword () {
      this.passwordError = this.$t('registerPage.passwordError')
    },

    // mounted() {
      
      
    onSubmit (event) {
      event.preventDefault()
      if (!this.validationName || !this.validationEmail || !this.validationPassword) {
        // Alert("Error in input!!! Try again")
        
        console.log("Hi, not so clever")
        console.log(this.nameError)
      }
        else {
          console.log("Hi, clever")
        
        
          console.log(JSON.stringify(this.form))
          
          axios ({
            method: 'post',
            url: 'http://80.87.192.59:5252/api/auth/register',
            data: {
              name: this.form.name,
              email: this.form.email,
              password: this.form.password
            // Bearer: access_token,
            }
          })
          .then(response => {
            console.log(response.data)
            console.log(response.status)
            this.token = response.data
            
            this.$router.push('/Login')   
          })
          .catch(error => {
          console.log(error)
          })
        }
          
          
      this.$router.push('/Wallet')    
      console.log(`token = ${this.token}`)
      }
        
    // }
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

.authoriz{
  /* Регистрация */


position: absolute;
width: 109px;
height: 21px;
left: 665px;
top: 143px;

font-family: Roboto;
font-style: oblique;
font-weight: bold;
font-size: 18px;
line-height: 21px;
src: url('~assets/fonts/Roboto-Regular.ttf') format('truetype');
/* identical to box height */

color: #FFFFFF;
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
</style>
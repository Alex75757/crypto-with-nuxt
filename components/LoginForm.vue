<template>
  <div>
    <b-form @submit="onSubmit" class="Group13">
      <!-- <p >{{ $t('loginPage.head') }}</p> -->
      <b-form-group>
        <b-form-input
          id="input-email"
          v-model="form.email"
          :placeholder="$t('email')"
          type="email"
          required
        />
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-pass"
          v-model="form.password"
          :placeholder="$t('password')"
          type="password"
          aria-describedby="input-live-help input-live-feedback"
          required
          @blur="handleBlurPassword"
        />
       
      </b-form-group>
    </b-form>

    <b-button type="submit" variant="primary" class="Rect19">
        {{ $t('loginPage.loginButton') }}
      </b-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
     form: {
        email: '',
        password: ''
      },
      show: true,
       
    }
    
  },
 
  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(JSON.stringify(this.form))
    },
    handleBlurPassword () {
      this.passwordError = this.$t('registerPage.passwordError')
    }
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
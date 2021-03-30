<template>
  <div  >
    <b-form class="Group13">
     <b-form-group>
        <b-form-input
          id="input-name"
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
        <b-form-invalid-feedback :state="validationPassword">
          {{passwordError}}
        </b-form-invalid-feedback>
      </b-form-group>
    </b-form>

     <b-button type="submit" variant="primary"  class="Rect19">
        {{ $t('registerPage.registerButton') }}
      </b-button>
  </div>
</template>

<script>

export default {
  name: 'AuthForm',
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      },
      show: true,
      nameError: '',
      passwordError: ''
    }
  },  
  computed: {
    validationName () {
      return this.form.name.length >= 2 && this.form.name.length <= 100
    },
    validationPassword () {
      return this.form.password.length >= 6
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(JSON.stringify(this.form))
    },
    handleBlurName () {
      this.nameError = this.$t('registerPage.nameError')
    },
    handleBlurPassword () {
      this.passwordError = this.$t('registerPage.passwordError')
    }
  }
}

// const {resolve} = require('path');

// module.exports = function nuxtVueWaitModule(moduleOptions) {
//     const options = Object.assign({}, this.options.wait, moduleOptions);

//     // Register plugin
//     this.addPlugin({
//         src: resolve(__dirname, 'vue-wait-plugin.template.js'),
//         fileName: 'vue-wait-plugin.js',
//         options: options
//     })
// };

// // required by nuxt
// module.exports.meta = require('../package.json');

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
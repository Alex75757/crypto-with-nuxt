<template >
  <div class="Desktop-2" >
    <b-navbar class="navbar navbar-expand-lg navbar-dark">
       
        <b-navbar-brand href="/" class="bigwallet">
            <img src="~/assets/img/bigwallet.svg" >
        </b-navbar-brand>
       
        <b-navbar-nav class="custom-nav">
          
          <b-nav-item>
            <nuxt-link exact active-class="active" class="nav-link " :to="localePath('/Wallet')">
              {{ $t('navbar.wallet') }}
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link exact active-class="active" class="nav-link" :to="localePath('/Login')">
              {{ $t('navbar.login') }}
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link exact active-class="active" class="nav-link" :to="localePath('/Register')">
              {{ $t('navbar.register') }}
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="switchLocalePath('ru')">
              RU
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="switchLocalePath('en')">
              EN
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style >
  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: 0;
  }
  /* hide close when burger shown */
  .navbar-toggler.collapsed .close-icon {
    display: none;
  }
  .navbar-toggler:not(.collapsed) .navbar-toggler-icon {
    display: inline;
  }
  .Desktop-2{
  /* Desktop - 2 */


position: relative;
width: 1440px;
height: 1024px;

background: #1C1C1C;

  }  


  .bigwallet{
/* BIGWALLET */


position: absolute;
width: 126px;
height: 20px;
left: 322px;
top: 37px;

/* background: linear-gradient(90deg, #F53491 0.99%, #4F86B9 98.7%); */

  }
  
  .Rect1{
  /* Rectangle 1 */


    position: absolute;
    width: 796px;
    height: 1024px;
    left: 322px;
    top: 0px;

    background: #1C1C1C;
  }
  .custom-nav{
    /* Кошельки Вход Регистрация */


position: absolute;
width: 273px;
height: 21px;
left: 731px;
top: 30px;

font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color: #FFFFFF;
  }
</style>
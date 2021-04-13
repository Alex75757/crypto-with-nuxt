<template>
  <div v-if="$store.state.success">
      <b-card-group deck class="Group13">    
          <b-card 
                v-for="(tit,i) in $store.state.tokens"
                :key="i"
                border-variant="danger"
                header-text-variant="danger"
                align="center"
                
            >
             
                 <b-card-title
                    align="center"
                 >
                     {{$store.state.tokens[i].title}}
                 </b-card-title>
                <b-card-text>
                     Balance is {{$store.state.tokens[i].balance}} 
                </b-card-text> 
                 <b-button-group>
                    <b-button href="#" variant="info">
                         {{ $t('wallet.get') }}
                    </b-button>
                     <b-button href="#" variant="info">
                         {{ $t('wallet.send') }}
                    </b-button>
                 </b-button-group>
               
            </b-card> 
        </b-card-group>
   
  </div>
  
</template>

<script>


</script>

<style scoped>
.Group13{
  /* Group 13 */


position: absolute;
left: 150px;
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
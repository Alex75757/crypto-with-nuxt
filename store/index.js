export const store = () => ({
    state: {
      success: false,
      access_token: null,
      email: null,
      password: null,
      token_type: null,
      tokens: [],
    }
})
    
export const mutations = {
      walletSuccess(state, payload) {
        state.access_token = payload.access_token
        state.success = payload.success
        state.token_type = payload.token_type
              
      },

      walletSuccessEmail(state, payload) {
        state.email = payload
        console.log(`state.email = ${state.email}`)
      },

      walletTokens(state, payload) {
        //   for (let i in payload) {
        //       console.log(`payload[i].title = ${payload[i].title}`)
        //     debugger
                state.tokens = payload
                
        //         // state.tokens = payload[i].balance
        //         console.log(`state.tokens = ${state.tokens}`)
        //   }
      }
}


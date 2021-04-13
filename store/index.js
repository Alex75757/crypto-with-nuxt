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
                     state.tokens = payload
      },
}


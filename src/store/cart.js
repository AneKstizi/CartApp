export default {
  state: {
    cart: []
  },
  mutations: {
    SET_CART (state, payload) {
      if (state.cart.length) {
        let isProdutcExists = false
        state.cart.map(item => {
          if (item.article === payload.article) {
            isProdutcExists = true
            item.quantity += 1
          }
        })
        if (!isProdutcExists) {
          state.cart.push(payload)
        }
      } else {
        state.cart.push(payload)
      }
    },
    REMOVE__ITEM__CART (state, index) {
      state.cart.splice(index, 1)
    },
    INCREMENT (state, index) {
      state.cart[index].quantity++
    },
    DECREMENT (state, index) {
      --state.cart[index].quantity < 1 && state.cart.splice(index, 1)
    }
  },
  actions: {
    ADD_TO_CART ({ commit }, payload) {
      commit('SET_CART', payload)
    },
    DELETE__FROM__CART ({ commit }, index) {
      commit('REMOVE__ITEM__CART', index)
    },
    INCREMENT_CART_ITEM ({ commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM ({ commit }, index) {
      commit('DECREMENT', index)
    }
  },
  getters: {
    CART (state) {
      return state.cart
    },
    TOTAL_PRICE (state) {
      return state.cart.reduce((p, n) => {
        p += n.price * n.quantity
        return p
      }, 0)
    }
  }
}

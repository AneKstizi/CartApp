export default {
  state: {
    catalog: [
      {
        image: 'image-0.jpg',
        price: 250,
        article: 'T1',
        descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
        name: 'Ролл угорь стандарт',
        quantity: 1
      },
      {
        image: 'image-1.jpg',
        price: 395,
        article: 'T2',
        descr: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
        name: 'Калифорния лосось стандарт',
        quantity: 1
      },
      {
        image: 'image-2.jpg',
        price: 250,
        article: 'T3',
        descr: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
        name: 'Окинава стандарт',
        quantity: 1
      },
      {
        image: 'image-3.jpg',
        price: 250,
        article: 'T4',
        descr: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь..',
        name: 'Цезарь маки хl',
        quantity: 1
      },
      {
        image: 'image-4.jpg',
        price: 300,
        article: 'T5',
        descr: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
        name: 'Ясай маки стандарт 185 г',
        quantity: 1
      },
      {
        image: 'image-4.jpg',
        price: 450,
        article: 'T6',
        descr: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
        name: 'Ролл с креветкой стандарт',
        quantity: 1
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    PRODUCTS (state) {
      return state.catalog
    }
  }
}

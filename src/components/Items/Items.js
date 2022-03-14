const productos = [
  { id: 1,
  name: "El Argento",
  img: "el-argento.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 15,
  price: "15 CHF",
  },

  { id: 2,
  name: "Marie Antoinette",
  img: "/marie-antoinette.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 10,
  price: "18 CHF",
  },

  { id: 3,
  name: "Willy Wonka",
  img: "/willy-wonka.jpg",
  imgAlt : "Argentinian breakfast",
  stock: 5,
  price: "13 CHF",
  }
]

export const getFetch = new Promise ((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout (() => {
      resolve(productos)
    }, 2000);
  } else {
    reject(console.log("error 404"))
  }
})


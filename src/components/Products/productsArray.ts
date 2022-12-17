type Product = {
  id: number,
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const productsArray: Product[] = [
  {
    id:1,
    name: "iPhone X",
    description: "This is iPhone X",
    type: "phone",
    capacity: 64,
    price:500
  },
  {
    id:2,
    name: "iPhone 13 Pro",
    description: "This is iPhone 13 Pro",
    type: "phone",
    capacity: 128,
    price:1000
  },
  {
    id:3,
    name: "iPhone XS",
    description: "This is iPhone XS",
    type: "phone",
    capacity: 512,
    price:800
  },
  {
    id:4,
    name: "iPhone 14 Pro Max",
    description: "This is iPhone 14 Pro Max",
    type: "phone",
    capacity: 256,
    price:200
},
  {
    id:5,
    name: "iPhone 8 Plus",
    description: "This is iPhone 8 Plus",
    type: "phone",
    capacity: 64,
    price:500
},
  {
    id:6,
    name: "iPhone 12",
    description: "This is iPhone 12",
    type: "phone",
    capacity: 128,
    price:100
}
]

export default productsArray
export interface productDetails {
  id: number;
  productTitle: string;
  productDesc: string;
  image: string;
  price: number;
}

const productData: Array<productDetails> = [
  {
    id: 1,
    productTitle: "Sauce Labs Backpack",
    productDesc:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    image:
      "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
    price: 29.99,
  },
  {
    id: 2,
    productTitle: "Sauce Labs Bike Light",
    productDesc:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    image:
      "https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg",
    price: 9.99,
  },

  {
    id: 3,
    productTitle: "Sauce Labs Bolt T-Shirt",
    productDesc:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    image:
      "https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5.jpg",
    price: 10.99,
  },

  {
    id: 4,
    productTitle: "Sauce Labs Onesie",
    productDesc:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    image:
      "https://www.saucedemo.com/static/media/red-onesie-1200x1500.2ec615b2.jpg",
    price: 30.99,
  },
  {
    id: 5,
    productTitle: "Test.allTheThings() T-Shirt (Red)",
    productDesc:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    image:
      "https://www.saucedemo.com/static/media/red-tatt-1200x1500.30dadef4.jpg",
    price: 33.99,
  },
];

export default productData;

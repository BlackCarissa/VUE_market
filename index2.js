
Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    `
})

var app = new Vue({
    el: '#app',
    data: { cars: [{
        product: "Supra",
        brand: "Toyota",
        selectedVariant: 5,
        details: ['Полное название: Toyota Supra A80','Годы выпуска: 1993—2002', 'Двигатель: 2997 куб.см 2JZ-GTE твин-турбо','КПП: 6-ступ. механическая V16x'],
        variants: [
            {
              variantId: '199',
              variantColor: '#C0C0C0',
              variantColorName:'Alpine Silver Metallic',
              variantImage:'https://autobild.bg/wp-content/uploads/2019/11/Toyota-Supra-zum-Rollr-Royce-Preis-1200x800-37057b5a7d42d97c.jpg',
              variantQuantity: 3  
            },
            {
              variantId: '1A1',
              variantColor: '#72635F',
              variantColorName:'Anthracite Metallic',
              variantImage:'https://smclassiccars.com/uploads/postfotos/1993-toyota-supra-mkiv-anthracite-metallic-one-owner-no-accidents-no-reserve-8.jpg',
              variantQuantity: 1     
            },
            {
              variantId: '752',
              variantColor: '#063D64',
              variantColorName:'Baltic Blue Metallic',
              variantImage:'https://www.garagewhifbitz.co.uk/wp-content/uploads/2023/08/IMG_6979-1024x768.jpg',
              variantQuantity: 0     
            },
            {
              variantId: '202',
              variantColor: '#000000',
              variantColorName:'Black',
              variantImage:'https://i.pinimg.com/originals/61/1c/1c/611c1c2476b17c78da36a1da705de124.jpg',
              variantQuantity: 4     
            },
            {
              variantId: '6P3',
              variantColor: '#134743',
              variantColorName:'Deep Jewel Green Pearl',
              variantImage:'https://cdn.motor1.com/images/mgl/GrR0A/s1/1997-toyota-supra-ebay.jpg',
              variantQuantity: 0     
            },
            {
              variantId: '3L2',
              variantColor: '#D2182F',
              variantColorName:'Renaissance Red',
              variantImage:'https://res.cloudinary.com/caradvice/image/private/q_auto/v1594269590/gzfp9lcybtv9exwaggop.jpg',
              variantQuantity: 2     
            }
          ],
        cart: 0,
        onSale: true,
        price: 'cr 150,000'
    },
    {
        product: "RX7",
        brand: "Mazda",
        selectedVariant: 1,
        details: ['Полное название: Mazda RX7 FD3S','Годы выпуска: 1992—2002', 'Двигатель: 1300 куб.см 13B-REW твин-турбо','КПП: 5-ступ. механическая BV66-19-090D'],
        variants: [
            {
              variantId: 'PZ',
              variantColor: '#000000',
              variantColorName:'Brilliant Black',
              variantImage:'https://dominiccars.sk/wp-content/uploads/2019/05/rx7-fd10.jpg',
              variantQuantity: 1  
            },
            {
              variantId: 'HZ',
              variantColor: '#FFFF99',
              variantColorName:'Sunburst Yellow',
              variantImage:'https://motorillustrated.com/wp-content/uploads/2018/09/uX5XI15.jpg',
              variantQuantity: 0  
            }
          ],
        cart: 0,
        onSale: false,
        price: 'cr 180,500'
    },
    {
      product: "GTR34 Z-Tune",
      brand: "Nissan",
      selectedVariant: 0,
      details: ['Полное название: Nissan Skyline BNR34 GTR Z-Tune','Годы выпуска: 1999-2002', 'Двигатель: 2600 куб.см RB28DETT турбо','КПП: 6-ступ. механическая  Getrag 233'],
      variants: [
          {
            variantId: 'SB',
            variantColor: '#a7a7a7',
            variantColorName:'Silver',
            variantImage:'https://widewp.ru/images/cars/3698.jpg',
            variantQuantity: 1  
          }
        ],
      cart: 0,
      onSale: false,
      price: 'cr 650,000'
  },
  {
    product: "NSX Type-R",
    brand: "Honda",
    selectedVariant: 0,
    details: ['Полное название: Honda NSX Type-R NA2','Годы выпуска: 1991–2005', 'Двигатель: 3,179 cc (3.2 L; 194.0 cu in) Honda C32B V6','КПП: 6-ступ. механическая'],
    variants: [
        {
          variantId: 'NH565',
          variantColor: '#f2f2f2',
          variantColorName:'Grand Prix White',
          variantImage:'https://www.j-garage.com/honda/pic4-8.jpg',
          variantQuantity: 1  
        }
      ],
    cart: 0,
    onSale: false,
    price: 'cr 750,000'
}
]},
    methods: {
        addToCart() {
            this.cart += 1
        },
        RemovefromCart() {
            this.cart -= 1
        },
        updateProduct(car,index) {
            car.selectedVariant = index;
        },
        title(car) {
            return car.brand + ' ' + car.product;
        },
        image(car) {
            return car.variants[car.selectedVariant].variantImage;
        },
        inStock(car) {
            return car.variants[car.selectedVariant].variantQuantity
        },
        sale(car) {
            if (car.onSale && this.inStock(car)) {
                return '*Акция от ' + ' ' + car.brand + '. Получите скидку 30% при traid in.'
            }
            return ''
        }
    },
    computed: {
    }
})
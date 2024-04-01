//Create a new component for product-details with a prop of details. 

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
Vue.component('product', {
    props: {
    },
    template: `
    <div  v-for="car in cars" :car="car">
        <div class="product_cart">
            <div class="product-image">
                <img :src="image(car)" id='cars'/>
            </div>
            <div class="product-info">
                <h1>{{ title(car) }}</h1>
                <p v-if="inStock(car)">В наличии</p>
                <p v-else :class="{ outOfStock: !inStock(car) }">Автомобиль остутствует в продаже</p>
                <p>Характеристики:</p>
                <product-details :details="car.details"></product-details>
                <p>Доступные варианты окраски:</p>
                <div class="container">
                    <div class="color-box" v-for="(variant, index) in car.variants" :key="variant.variantId"
                    :style="{ backgroundColor:variant.variantColor }" @mouseover="updateProduct(car,index)">
                    </div>
                </div>
                <button v-on:click="addToCart" :disabled="!inStock(car)" :class="{ disabledButton: !inStock(car) }">
                {{car.price}}
                </button>
                <p>{{ sale(car) }}</p>
            </div>
        </div>
    </div>
     `,
    data() {
        return {
            cars: [{
                product: "Supra",
                brand: "Toyota",
                selectedVariant: 0,
                details: ['Полное название: Toyota Supra A80', 'Годы выпуска: 1993—2002', 'Двигатель: 2997 куб.см 2JZ-GTE твин-турбо', 'КПП: 6-ступ. механическая V16x'],
                variants: [
                    {
                        variantId: '199',
                        variantColor: '#C0C0C0',
                        variantColorName: 'Alpine Silver Metallic',
                        variantImage: 'https://autobild.bg/wp-content/uploads/2019/11/Toyota-Supra-zum-Rollr-Royce-Preis-1200x800-37057b5a7d42d97c.jpg',
                        variantQuantity: 3
                    },
                    {
                        variantId: '1A1',
                        variantColor: '#72635F',
                        variantColorName: 'Anthracite Metallic',
                        variantImage: 'https://smclassiccars.com/uploads/postfotos/1993-toyota-supra-mkiv-anthracite-metallic-one-owner-no-accidents-no-reserve-8.jpg',
                        variantQuantity: 1
                    },
                    {
                        variantId: '752',
                        variantColor: '#063D64',
                        variantColorName: 'Baltic Blue Metallic',
                        variantImage: 'https://www.garagewhifbitz.co.uk/wp-content/uploads/2023/08/IMG_6979-1024x768.jpg',
                        variantQuantity: 0
                    },
                    {
                        variantId: '202',
                        variantColor: '#000000',
                        variantColorName: 'Black',
                        variantImage: 'https://i.pinimg.com/originals/61/1c/1c/611c1c2476b17c78da36a1da705de124.jpg',
                        variantQuantity: 4
                    },
                    {
                        variantId: '6P3',
                        variantColor: '#134743',
                        variantColorName: 'Deep Jewel Green Pearl',
                        variantImage: 'https://cdn.motor1.com/images/mgl/GrR0A/s1/1997-toyota-supra-ebay.jpg',
                        variantQuantity: 0
                    },
                    {
                        variantId: '3L2',
                        variantColor: '#D2182F',
                        variantColorName: 'Renaissance Red',
                        variantImage: 'https://res.cloudinary.com/caradvice/image/private/q_auto/v1594269590/gzfp9lcybtv9exwaggop.jpg',
                        variantQuantity: 2
                    }
                ],
                cart: 0,
                onSale: true,
                price: 'cr. 178,000'
            },

        ],
        };
    },
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

var app = new Vue({
    el: '#app'
})
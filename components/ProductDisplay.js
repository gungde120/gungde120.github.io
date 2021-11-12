app.component('product-display', {
    props: {
        premium: {
        type: Boolean,
        required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <h2>{{ price }}</h2>
            <p v-if="inStock">Stok Tersedia</p>
            <p v-else>Stok Habis</p>
            
            <p>Shipping: {{ shipping }}</p>
            <ul>
            <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <p>Pilihan Warna : </p>
            <div
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
            </div>
            
            <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
            </button>

            <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="removeFromCart">
            Remove Item
            </button>
        </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
        return {
            product: 'Dream Catcher',
            brand: 'Kumara',
            selectedVariant: 0,
            price: 'Rp.89.000,00',
            details: ['Ukuran  30cm x 60cm', 'Tali gantungan 30cm', 'Bahan sintetis tahan lama'],
            variants: [
            { id: 2238, color: 'blue', image: './assets/images/dc-blue.png', quantity: 80,  },
            { id: 2237, color: '#00FF54', image: './assets/images/dc-green.png', quantity: 0 },
            { id: 2235, color: 'red', image: './assets/images/dc-red.png', quantity: 100 }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
            return 'Free'
            }
            return 2.99
        }
    }
})
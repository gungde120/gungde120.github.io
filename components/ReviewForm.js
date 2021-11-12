app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Berikan Ulasan Anda</h3>
        <label for="name">Nama :</label>
        <input id="name" v-model="name">

        <label for="review">Pesan :</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating :</label>
        <select id="rating" v-model.number="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>

        <label for="recommend">Apakah anda merekomendasikan produk ini?</label>
        <select id="recommend" v-model="recommend">
            <option>Ya</option>
            <option>Tidak</option>
        </select>

    <input class="button" type="submit" value="Submit">  

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },

    methods: {
    onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
            alert('Review is incomplete. Please fill out every field.')
            return
        }

        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
          recommend: this.recommend // solution

        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null // solution
    }
    }
})
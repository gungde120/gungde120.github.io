app.component('review-list', {
    props: {
        reviews: {
        type: Array,
        required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Ulasan</h3>
        <ul v-for="(review, index) in reviews" :key="index">
            {{ review.name }} memberikan {{ review.rating }} bintang
            <br/>
            "{{ review.review }}"
            <br/>
            Recommended : {{ review.recommend }}
        </ul>
    </div>
`
})
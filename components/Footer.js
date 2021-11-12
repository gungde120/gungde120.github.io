app.component('sagu-footer',{
    props: ['tentang'],
    template:
    /*html*/
    `<div id="footer">
    {{ tentang }}
    <ul>Simple 
        <a href="https://vuejs.org/" target="_blank" style="color: #fffb00">
        Vue.js 
        </a> 
        front-end by 
        <a href="https://github.com/gungde120" target="_blank" style="color: #fffb00">
        Gungde Iswara
        </a> 
        - Teknik Informatika
        <a href="https://www.primakara.ac.id/" target="_blank" style="color: #fffb00">
        STMIK Primakara.
        </a>
        2021
    </ul>
    </div>
    `,
    data() {
        return {
            tentang: 'Sagumata adalah sebuah ide perancangan online marketplace khusus produk souvenir & kerajinan oleh-oleh khas Bali.'
        }
    }
})
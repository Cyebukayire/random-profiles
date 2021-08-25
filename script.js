const app = Vue.createApp({
    data() {
        return {
            firstName: 'Felix',
            lastName: 'Rasmussen',
            country: 'Denmark',
            city: 'Gl. Rye', 
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/15.jpg',
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()   
            // console.log(results)   
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.country = results[0].location.country
            this.city = results[0].location.city
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')
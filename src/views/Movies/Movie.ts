import { ref } from "vue";

export default {
    data() {
        return {
            movieSearch: "",
            API_Key: '876cde9a3amsh634ce99e10cfff1p104015jsn3ef4d14f414d',
            responseAvailable: false,
            movieResults: undefined
        }
    },

    methods: {
        async searchMovie() {
            const searchTimeout = ref(null)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': this.API_Key,
                    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
                }
            }

            this.responseAvailable = false
            clearTimeout(searchTimeout.value)
            searchTimeout.value = setTimeout(async () => {
                if (this.searchMovie !== "") {
                    await fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${this.movieSearch}&page=1`, options)
                        .then(response => {
                            if (response.ok) {
                                return response.json()
                            } else {
                                alert("Server Error " + response.status)
                            }
                        }).then(response => {
                            this.movieResults = response.results
                            console.log(this.movieResults)
                        }).catch(err => console.error(err))

                    this.responseAvailable = true
                    this.movieSearch = ""
                    return
                }
            }, 30)

        }
    }
}
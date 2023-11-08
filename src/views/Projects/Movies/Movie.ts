import { ref } from "vue";
import ProjectsNavBarVue from "@/components/ProjectsNavBar.vue";
import axios from "axios";

export default {
    components: {
        ProjectsNavBarVue
    },
    data() {
        return {
            isLoading: false,
            movieSearch: "",
            movieResults: undefined,
            API_Key: '876cde9a3amsh634ce99e10cfff1p104015jsn3ef4d14f414d',
        }
    },

    methods: {
        async searchMovie() {
            //Old method for API//
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': this.API_Key,
                    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
                }
            }

            const searchTimeout = ref(null)
            this.isLoading = true
            clearTimeout(searchTimeout.value)

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
                        this.isLoading = false
                    }).catch(err => console.error(err))
                this.movieSearch = ""
                return
            }

            //Change for when backend is up//

            // searchTimeout.value = setTimeout(async () => {
            //     if (this.searchMovie !== "") {
            //         axios.get('https://localhost:44395/api/Movie/MovieLookup?name=' + this.movieSearch)
            //         .then(response => {
            //             this.movieResults = response.data.results
            //             this.isLoading = false
            //         }).catch(err => console.error(err))
            //         this.movieSearch = ""
            //         return
            //     }
            // }, 30)

        }
    }
}
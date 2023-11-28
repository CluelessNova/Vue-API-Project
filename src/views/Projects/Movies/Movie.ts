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
            errorLoad: false,
            errorMessage: null,
            movieSearch: "",
            movieResults: undefined
        }
    },

    methods: {
        async searchMovie() {
            const searchTimeout = ref(null)
 
            this.isLoading = true
            this.errorLoad = false
            clearTimeout(searchTimeout.value)
            searchTimeout.value = setTimeout(async () => {
                if (this.searchMovie !== "") {
                    //axios.get('https://api.jacoblevinsky.com/api/Movie/MovieLookup?name=' + this.movieSearch)
                    axios.get('https://localhost:44395/api/Movie/MovieLookup?name=' + this.movieSearch)
                    .then(response => {
                        this.movieResults = response.data.results
                        this.isLoading = false
                        this.errorLoad = false
                    }).catch(error => {
                        console.error(error)
                        this.errorMessage = error
                        this.errorLoad = true
                        this.isLoading = false
                    })
                    this.movieSearch = ""
                    return
                }
            }, 30)

        }
    }
}
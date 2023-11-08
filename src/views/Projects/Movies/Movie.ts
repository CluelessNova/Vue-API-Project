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
            movieResults: undefined
        }
    },

    methods: {
        async searchMovie() {
            const searchTimeout = ref(null)
            this.isLoading = true
            clearTimeout(searchTimeout.value)
            searchTimeout.value = setTimeout(async () => {
                if (this.searchMovie !== "") {
                    axios.get('https://localhost:44395/api/Movie/MovieLookup?name=' + this.movieSearch)
                    .then(response => {
                        this.movieResults = response.data.results
                        this.isLoading = false
                    }).catch(err => console.error(err))
                    this.movieSearch = ""
                    return
                }
            }, 30)

        }
    }
}
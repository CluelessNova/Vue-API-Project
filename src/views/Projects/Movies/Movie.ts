import { ref } from "vue";
import axios from "axios";
import Skeleton from 'primevue/skeleton'
import ProgressSpinner from 'primevue/progressspinner'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';

export default {
    components:{
        Skeleton,
        ProgressSpinner,
        InputText,
        Button,
        Dialog
    },
    data() {
        return {
            showDialogHelp: false,
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
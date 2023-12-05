import { ref } from "vue";
import axios from "axios";
import Skeleton from 'primevue/skeleton'
import ProgressSpinner from 'primevue/progressspinner'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Tooltip from 'primevue/tooltip'
import Divider from 'primevue/divider'

export default {
    components:{
        Skeleton,
        ProgressSpinner,
        InputText,
        Button,
        Dialog,
        Card,
        Accordion,
        AccordionTab,
        Tooltip,
        Divider
    },
    data() {
        return {
            showDialogHelp: false,
            loadingMovies: false,
            showDetails: false,
            loadingDetails: false,
            loadingMovieId: null,
            errorLoad: false,
            errorMessage: null,
            movieSearch: "",
            movieResults: undefined,
            movieDetails: undefined
        }
    },

    methods: {
        async searchMovie() {
            const searchTimeout = ref(null)
 
            this.loadingMovies = true
            this.errorLoad = false
            clearTimeout(searchTimeout.value)
            searchTimeout.value = setTimeout(async () => {
                if (this.searchMovie !== "") {
                    axios.get('https://api.jacoblevinsky.com/api/Movie/MovieSearch/' + this.movieSearch)
                    .then(response => {
                        this.movieResults = response.data.results
                        this.loadingMovies = false
                        this.errorLoad = false
                    }).catch(error => {
                        console.error(error)
                        this.errorMessage = error
                        this.errorLoad = true
                        this.loadingMovies = false
                        this.movieResults = null
                    })
                    this.movieSearch = ""
                    return
                }
            }, 30)
        },

        async getDetails(id) {
            this.loadingDetails = true
            this.loadingMovieId = id

            axios.get('https://api.jacoblevinsky.com/api/Movie/MovieDetails/' + id)
            .then(response => {
                this.movieDetails = response.data
                this.openDetails()
                this.loadingDetails = false
            }).catch(error => {
                console.error(error)
                this.showDetails = false
                this.loadingDetails = false
            })
            return
        },

        openDetails() {
            this.showDetails = true
            document.body.style.overflow = 'hidden'
        },

        closeDetails() {
            this.showDetails = false
            document.body.style.overflow = ''
        }
    }
}
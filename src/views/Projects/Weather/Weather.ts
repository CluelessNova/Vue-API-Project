import { ref } from "vue"
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
            weatherForecast: null,
            townSearch: "",
            weatherHourly: null,
            weatherHourlyDatetime: []
        }
    },
    
    methods: {
        async fetchData(){
            const searchTimeout = ref(null)

            this.isLoading = true
            this.errorLoad = false
            clearTimeout(searchTimeout.Value)
            searchTimeout.value = setTimeout(async () => {
                if (this.townSearch !== "") {
                    //axios.get('https://api.jacoblevinsky.com/api/Weather/WeatherForecast?location='+ this.townSearch + '&days=3')
                    axios.get('https://localhost:44395/api/Weather/WeatherForecast?location='+ this.townSearch + '&days=3')
                    .then(response => {
                        this.weatherForecast = response.data
                        this.weatherHourly = response.data.forecast.forecastday[0].hour
                        this.isLoading = false
                    })
                    .catch(error => {
                        console.error(error)
                        this.errorLoad = true
                        this.errorMessage = error
                        this.isLoading = false
                    })
                    this.townSearch = ""
                    return
                }
            }, 30) 
        }     
    },
}   
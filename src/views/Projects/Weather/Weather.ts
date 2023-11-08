import { ref } from "vue"
import ProjectsNavBarVue from '../../../components/ProjectsNavBar.vue'
import axios from "axios";

export default {
    components: {
        ProjectsNavBarVue
    },
    data() {
        return {
            isLoading: false,
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
            clearTimeout(searchTimeout.Value)
            searchTimeout.value = setTimeout(async () => {
                if (this.townSearch !== "") {
                    axios.get('https://localhost:44395/api/Weather/WeatherForecast?location='+ this.townSearch + '&days=3')
                    .then(response => {
                        this.weatherForecast = response.data
                        this.weatherHourly = response.data.forecast.forecastday[0].hour
                        this.isLoading = false
                    })
                    .catch(error => {
                        console.error(error)
                        this.isLoading = false
                    })
                    this.townSearch = ""
                    return
                }
            }, 30)  
        },
    }   
    
}
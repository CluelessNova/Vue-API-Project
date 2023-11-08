import { ref } from "vue"
import ProjectsNavBarVue from '../../../components/ProjectsNavBar.vue'
import axios from "axios";

export default {
    components: {
        ProjectsNavBarVue
    },
    data() {
        return {
            API_Key: '876cde9a3amsh634ce99e10cfff1p104015jsn3ef4d14f414d',
            isLoading: false,
            weatherForecast: null,
            townSearch: "",
            weatherHourly: null,
            weatherHourlyDatetime: []
        }
    },
    
    methods: {
        async fetchData(){
            //Old method for API//
            const searchTimeout = ref(null)
            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': this.API_Key,
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            }

            clearTimeout(searchTimeout.value)
            this.isLoading = true
            clearTimeout(searchTimeout.Value)
            searchTimeout.value = setTimeout(async () => {
                if (this.townSearch !== "") {
                    await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.townSearch}&days=3`, options)
                    .then(response => {
                        if (response.ok){
                           return response.json()
                        } else {
                            alert("Server Error " + response.status)
                        }
                    }).then(response => {
                        this.weatherForecast = response
                        this.weatherHourly = response.forecast.forecastday[0].hour
                        this.isLoading = false
                    }).catch(err => console.error(err));

                    this.townSearch = ""
                    return
                }
            }, 30)
            
            //Change for when backend is up//

            // searchTimeout.value = setTimeout(async () => {
            //     if (this.townSearch !== "") {
            //         axios.get('https://localhost:44395/api/Weather/WeatherForecast?location='+ this.townSearch + '&days=3')
            //         .then(response => {
            //             this.weatherForecast = response.data
            //             this.weatherHourly = response.data.forecast.forecastday[0].hour
            //             this.isLoading = false
            //         })
            //         .catch(error => {
            //             console.error(error)
            //             this.isLoading = false
            //         })
            //         this.townSearch = ""
            //         return
            //     }
            // }, 30) 
        }     
    },
}   
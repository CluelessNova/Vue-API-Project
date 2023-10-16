import { ref } from "vue"
import ProjectsNavBarVue from '../../../components/ProjectsNavBar.vue'

export default {
    components: {
        ProjectsNavBarVue
    },
    data() {
        return {
            weatherForecast: undefined,
            responseAvailable: false,
            API_Key: '876cde9a3amsh634ce99e10cfff1p104015jsn3ef4d14f414d',
            townSearch: "",
            weatherHourly: undefined,
            weatherHourlyDatetime: []
        }
    },
    
    methods: {
        async fetchData(){
            const searchTimeout = ref(null)
            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': this.API_Key,
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            }

            this.responseAvailable = false
            clearTimeout(searchTimeout.value)
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
                        console.log(response)
                        this.weatherForecast = response
                        this.weatherHourly = response.forecast.forecastday[0].hour
                    }).catch(err => console.error(err));

                    this.responseAvailable = true
                    this.townSearch = ""
                    return
                }
            }, 30)    
        },

        // timeOnly(hourlyDate) {
        //     const timeStr = hourlyDate.split(" ")[1]
        //     return timeStr.substring(0, 5)
        // }
    }
    
}
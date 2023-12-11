import { ref } from "vue"
import axios from "axios";
import Skeleton from 'primevue/skeleton'
import ProgressSpinner from 'primevue/progressspinner'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'
import Tooltip from 'primevue/tooltip'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

export default {
    components:{
        Skeleton,
        ProgressSpinner,
        InputText,
        Button,
        Dialog,
        Card,
        Divider,
        Panel,
        Accordion,
        AccordionTab,
        Tooltip
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
                    axios.get('https://api.jacoblevinsky.com/api/Weather/'+ this.townSearch + '/3')
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
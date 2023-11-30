import TabMenu from 'primevue/tabmenu'
import Movies from '../Movies/Movie.vue'
import Weather from '../Weather/Weather.vue'
import DealCalc from '../DealCalc/DealCalc.vue'

export default {
    components: {
        TabMenu,
        Movies,
        Weather,
        DealCalc
    },
    data() {
        return {
            items: [
              { label: 'Movies', component: Movies },
              { label: 'Weather', component: Weather },
              { label: 'Deal Calculator', component: DealCalc },
            ],
            currentTab: 'Movies'
          };
    },
    methods: {
        onTabChange(event) {
            console.log(event.index)
            const selectedTab = this.items[event.index]
            if (selectedTab){
                this.currentTab = selectedTab.component      
            }
        }
    }
}
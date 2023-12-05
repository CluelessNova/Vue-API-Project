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
            activeIndex: 0
          };
    },
    created() {
        const savedIndex = sessionStorage.getItem('activeTabIndex')
        if (savedIndex !== null && this.items[savedIndex]){
            this.activeIndex = parseInt(savedIndex, 10)
        }
    },
    methods: {
        onTabChange(event) {
                this.activeIndex = event.index 
                sessionStorage.setItem('activeTabIndex', event.index)     
        }
    }
}
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
            currentTab: 'Movies',
            activeIndex: 0
          };
    },
    created() {
        const savedIndex = sessionStorage.getItem('activeTabIndex')
        if (savedIndex !== null && this.items[savedIndex]){
            this.activeIndex = parseInt(savedIndex, 10)
            this.currentTab = this.items[this.activeIndex].component
        }
    },
    methods: {
        onTabChange(event) {
            const selectedTab = this.items[event.index]
            if (selectedTab){
                this.currentTab = selectedTab.component 
                sessionStorage.setItem('activeTabIndex', event.index)     
            }
        }
    }
}
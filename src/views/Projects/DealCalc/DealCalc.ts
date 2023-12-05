import Galleria from 'primevue/galleria'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tooltip from 'primevue/tooltip'

export default {
    components: {
        Galleria,
        Button,
        Dialog,
        Tooltip
    },
    data() {
        return {           
            showDialogHelp: false,
            slides: [
                { src: require("../../../assets/images/DealCalc/DealCalc_1.png"), caption: "All Accounts Page" },
                { src: require("../../../assets/images/DealCalc/DealCalc_2.png"), caption: "All Opportunities in Accounts Page" },
                { src: require("../../../assets/images/DealCalc/DealCalc_3.png"), caption: "B2B Opportunity Deal" },
                { src: require("../../../assets/images/DealCalc/DealCalc_4.png"), caption: "B2B2C/First Party Opportunity Deal" },
            ]
        }
    }
}

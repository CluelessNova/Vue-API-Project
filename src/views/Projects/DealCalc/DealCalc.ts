import ProjectsNavBarVue from "@/components/ProjectsNavBar.vue"

export default {
    components: {
        ProjectsNavBarVue,
    },
    data() {
        return {
            slideIndex: 0, 
            slides: [
                { src: require("../../../assets/images/DealCalc/DealCalc_1.png"), caption: "All Accounts Page" },
                { src: require("../../../assets/images/DealCalc/DealCalc_2.png"), caption: "All Opportunities in Accounts Page" },
                { src: require("../../../assets/images/DealCalc/DealCalc_3.png"), caption: "B2B Opportunity Deal" },
                { src: require("../../../assets/images/DealCalc/DealCalc_4.png"), caption: "B2B2C/First Party Opportunity Deal" },
            ]
        }
    },
    methods: {
        plusSlides(n) {
            this.showSlides(this.slideIndex + n);
        },
        currentSlide(n) {
            this.showSlides(n - 1); // Adjust for 0-based indexing
        },
        showSlides(n) {
            const totalSlides = this.slides.length; // since you have 5 slides
            this.slideIndex = (n + totalSlides) % totalSlides; // Ensures correct cycling of slides
        }
    }
}

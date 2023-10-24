import axios from "axios";

export default {
    data() {
      return {
        i: 0,
        j: 0,
        firstText: 'A back-end focused software engineer building APIs and server-side applications',
        secondText: 'Experience with front-end development and web application development',
        speed: 40,
        currentIndex: 0,
        differentText: ['Hola, mi nombre es', 'Ciao il mio nome è', 'Hello, my name is',  'こんにちは、私の名前は', "Bonjour, je m'appelle"],
        displayText: 'Hello, my name is',
        originalText: 'Hello, my name is'
      };
    },
    methods: {
      typeWriter() {
        if (this.i < this.firstText.length) {
          document.getElementById("myDescription-first").innerHTML += this.firstText.charAt(this.i);
          this.i++;
          setTimeout(this.typeWriter, this.speed);
        } else if (this.j < this.secondText.length) {
          document.getElementById("myDescription-second").innerHTML += this.secondText.charAt(this.j);
          this.j++;
          setTimeout(this.typeWriter, this.speed);
        }
      },
      
      toggleText(){
        if (this.currentIndex < this.differentText.length){
          this.displayText = this.differentText[this.currentIndex];
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
    },
    
    mounted() {
      setInterval(this.toggleText, 2000);
    },

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.typeWriter(); // Call the function when entering the route
        // vm.translate();
      });
    },
  };

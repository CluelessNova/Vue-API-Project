export default {
    data() {
      return {
        typeWriterTimeout: null,
        toggleTextInterval: null,
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
        const firstElement = document.getElementById("myDescription-first");
        const secondElement = document.getElementById("myDescription-second");

        if (this.i < this.firstText.length && firstElement) {
          firstElement.innerHTML += this.firstText.charAt(this.i);
          this.i++;
          this.typeWriterTimeout = setTimeout(this.typeWriter, this.speed);
        } else if (this.j < this.secondText.length && secondElement) {
          secondElement.innerHTML += this.secondText.charAt(this.j);
          this.j++;
          this.typeWriterTimeout = setTimeout(this.typeWriter, this.speed);
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
      this.toggleTextInterval = setInterval(this.toggleText, 2000);
    },

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.typeWriter(); // Call the function when entering the route
      });
    },
    beforeDestroy() {
      if (this.typeWriterTimeout) {
        clearTimeout(this.typeWriterTimeout);
      }
      if (this.toggleTextInterval) {
        clearInterval(this.toggleTextInterval);
      }
    }
  };

const app = Vue.createApp({
    data(){
        return {
            number: 0,
            timer: null
        };
    },
    methods: {
        add(number){
            this.number += number;
        }
    },
    computed: {
        finalResult(){
            if(this.number < 37){
                return 'Not there yet!';
            }else if(this.number === 37){
                return this.number;
            }else if(this.number > 37){
                return 'Too much!';
            }
        }
    },

    watch:{
        number(){
            clearTimeout(this.timer);
            this.timer = setTimeout(()=> {
                this.number = 0;
            }, 5000);
        }
    }

});

app.mount('#assignment');
const {createApp} = Vue;

createApp({
    data(){
        return{
            randomEmail: [],
            base: 'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getEmail(){
            this.randomEmail = [];
            for(let i = 0; i < 10; i++){
                axios.get(this.base + 'random/mail').then((res)=>{
                    this.randomEmail.push(res.data.response);
                });
            }
        }
    }
}).mount('#app')
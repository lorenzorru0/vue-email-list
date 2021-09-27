const app = new Vue({
    el: "#root",
    data: {
        emailArray: [],
        arrayLength: 10
    },
    methods: {
        addEmail() {
            this.arrayLength++;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emailArray.push(response.data.response);
                })
        }
    },
    mounted() {
        for( let i = 0; i < this.arrayLength; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emailArray.push(response.data.response);
                })
        }
    }
})
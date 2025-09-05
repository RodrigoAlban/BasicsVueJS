const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Terminar o curso e aprender Vue.Js!',
            courseGoalB: 'Masterizar Vue.Js e contruir apps fodas.',
            vueLink: 'https://vuejs.org/user-goal'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
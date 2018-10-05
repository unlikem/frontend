Vue.component('like', {
    template: '<button @click="add()">👍 {{num}}</button>',
    data: function () {
        return {
            num: 10,
            flag: false,
        }
    },
    methods: {
        add: function () {
            this.flag = !this.flag
            if (this.flag) {
                this.num += 1
            }
            else {
                this.num -= 1
            }
        }
    }
})

new Vue({
    el: '#app'    
})
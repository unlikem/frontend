Vue.component('balance', {
    template: `
    <div>
        <show @show_balance="show_balance = !show_balance"></show>
        <div v-if="show_balance">98亿</div>
    </div>
    `,
    data: function () {
        return {
            show_balance: false
        }
    }
});
Vue.component('show', {
    template: '<button @click="on_click">显示余额</button>',
    methods: {
        on_click() {
            this.$emit('show_balance');
        }
    }
});

var app = new Vue({
    el: '#app',
})
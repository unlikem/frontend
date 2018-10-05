new Vue({
    el: '#seg1'
    components: {
        alert: {
            template: '<button @click="on_click">点击</button>',
            methods: {
                on_click: function() {
                    alert('Yo')
                }
            }
        }
    }
})
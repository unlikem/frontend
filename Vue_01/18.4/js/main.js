var app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        onClick: function() {
            console.log('点到了');
        },
        onSubmit: function() {
            // e.preventDefault();
            console.log('提交了');
        }
    }
})
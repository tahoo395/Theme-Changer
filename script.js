let vm = new Vue({
    el: "#body",
    data: {

        // Initial Datas

        theme: {
            light: false,
            dark: true,
        },
        btn_theme: `fas fa-sun`,
        opposite_of_btn_theme:`fas fa-moon`
    },
    methods: {
        theme_changer() {

            // Making Variables to make code more easier

            theme = this.theme;
            btn_theme = this.btn_theme
            opposite_of_btn_theme = this.opposite_of_btn_theme
            
            // Changing the theme based on some condition 

            theme.light = theme.light ? false : true;
            theme.dark = theme.dark ? false : true;
        },
    },
    computed: {
        btn() {

            // Changing the theme changer button based on some condition

            return this.theme.dark ? this.btn_theme : this.opposite_of_btn_theme
        }
    }
});

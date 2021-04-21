const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            nextIndex: 0
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.keyword + "&startIndex=" + this.nextIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        decrementIndex() {
            if (this.nextIndex > 0) {
                this.nextIndex -= 20;
            }
        },
        incrementIndex() {
            this.nextIndex = this.nextIndex + 20;
        }
    }
})
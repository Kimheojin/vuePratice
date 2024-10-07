const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setname() {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");

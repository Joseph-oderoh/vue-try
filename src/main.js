import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.config.errorHandler = (err) => {
    /* handle error */
  }

app.component('TodoDeleteButton', TodoDeleteButton)

app.mount('#app')
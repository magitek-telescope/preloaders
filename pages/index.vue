<template>
  <section class="wrapper" :class="{'is-modal': status =='show'}">
    <div>
      <h1 class="title">
        preloaders
      </h1>
      <p class="description">
        My preloader collection using CSS Animation.<br>
        by <a href="https://github.com/potato4d">@potato4d</a>
      </p>

      <div class="container">
        <article class="card" v-for="loader in loaders">
          <iframe :src="`/loaders/${loader}`"></iframe>
          <h1 class="card-title">
            <span>{{loader}}</span>
            <span class="card-show" @click="handleClick(loader)">show source</span>
          </h1>
        </article>
      </div>
    </div>

    <div class="modal" v-if="status == 'show'">
      <div class="modal-content">
        <code><pre>{{source}}</pre></code>
      </div>
      <div class="modal-background" @click="handleHide"></div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loaders: [
        'rippleandheart',
        'ellipses02',
        'circles01',
        'ellipses01'
      ],
      status: 'wait',
      source: ''
    }
  },
  methods: {
    async handleClick (loader) {
      try {
        this.status = 'loading'
        const { data: html } = await axios.get(`/loaders/${loader}`)
        this.source = html.match(/(<body>)[\s\S]*?(<\/body>)/)[0].replace(`<body>\n`, '').replace('</body>', '')
        this.status = 'show'
      } catch (e) {
        this.status = 'wait'
        alert('Error.')
      }
    },
    handleHide () {
      this.status = 'wait'
    }
  }
}
</script>

<style>
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px;
}

.wrapper.is-modal{
  height: 100vh;
  overflow: hidden;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.description {
  margin: 10px 0 30px;
  text-align: center;
  line-height: 1.8;
  font-size: 16px;
  color: #35495e;
}

.container {
  display: flex;
  width: 1280px;
  padding: 10px;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.093);
  margin-bottom: 30px;
}

.card iframe {
  width: 100%;
  height: 300px;
  border: 0;
}

.card .card-title {
  color: #666;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
}

.card .card-show{
  font-size: 13px;
  color: #77CFF7;
  cursor: pointer;
}

.card .card-show:hover{
  text-decoration: underline;
}

a,
* a{
  color: #77CFF7;
}

.modal{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content{
  position: static;
  width: 960px;
  height: 90vh;
  overflow: scroll;

  background: #fff;
  padding: 10px;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
}

.modal-content code,
.modal-content pre{
  font-family: Monaco;
}

.modal-content pre {
  padding: 10px;
  background: #f0f0f0;
  border-radius: 4px;
  display: block;
}

.modal-background{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

</style>

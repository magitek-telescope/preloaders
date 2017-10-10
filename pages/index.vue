<template>
  <section class="wrapper">
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
            <span class="card-show">show source</span>
          </h1>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      loaders: [
        'ellipses02',
        'circles01',
        'ellipses01'
      ]
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
</style>

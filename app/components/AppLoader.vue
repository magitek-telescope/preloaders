<template>
  <article class="card">
    <iframe :src="`/loaders/${loader}/`" />
    <h1 class="card-title">
      <span>{{loader}}</span>
      <span
        class="card-show"
        @click="handleClick"
      >
        show source
      </span>
    </h1>
  </article>
</template>

<script>
export default {
  props: {
    loader: String
  },
  methods: {
    handleClick() {
      this.$emit('click', this.loader)
    }
  }
}
</script>

<style scoped>

.card {
  width: 400px;
  max-width: 100%;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.093);
  margin-bottom: 30px;
}

.card iframe {
  width: 100%;
  height: 300px;
  border: 0;
  overflow: hidden;
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

@media (max-width: 600px) {
  .card iframe {
    width: calc(100vw - 20px);
    height: calc(75vw);
  }
}

</style>

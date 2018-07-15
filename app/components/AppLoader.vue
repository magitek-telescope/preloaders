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

</style>

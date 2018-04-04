
<template>
  <div>
    <div>Page Format: {{ pageFormat }}</div>
    <div>Page: {{ page }}</div>
    <m-button interactive>Example</m-button>
  </div>
</template>

<script>

export default {
  name: 'PgReadView',
  computed: {
    pageFormat () {
      return this.$store.getters.pageFormat
    },
    page () {
      return this.$store.getters.page
    }
  },
  beforeRouteUpdate (to, from, next) {
    Promise.all([
      this.getPage(),
      this.getPageFormat()
    ]).then(() => {
      next()
    })
  },
  created () {
    this.getPage()
    this.getPageFormat()
  },
  methods: {
    getPage () {
      this.$store.dispatch('getPage', this.$route.params.pageId)
    },
    getPageFormat () {
      this.$store.dispatch('getPageFormat', this.$route.params.pageId)
    }
  }
}
</script>

<style scoped>

</style>

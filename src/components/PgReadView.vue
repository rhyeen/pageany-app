
<template>
  <div>{{ pageFormat }}</div>
</template>

<script>

export default {
  name: 'PgReadView',
  computed: {
    pageFormat () {
      return this.$store.state.pageFormat
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
      this.$store.dispatch('getPageFormat', this.$route.params.pageId)
    },
    getPageFormat () {
      this.$store.dispatch('getPageFormat', this.$route.params.pageId)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #27292B;
}
</style>

<style lang="scss">
  // $mdc-theme-primary: #2196f3;
  // $mdc-theme-secondary: #ff1744;
  // $mdc-theme-background: #f5f5f5;
  // $mdc-ripple-fg-opacity: 0.16;
  @import "material-components-vue/dist/theme/styles";
  @import "material-components-vue/dist/ripple/styles";
  @import "material-components-vue/dist/typography/styles";
  @import "material-components-vue/dist/button/styles";
</style>

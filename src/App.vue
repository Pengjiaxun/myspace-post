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

<style lang="scss">
    @import "assets/sass-store/_base.scss";
    @import "assets/sass/public/global.scss";
    @import "assets/sass/animate.min.css";

    #app {
      height: 100%;
    }
</style>

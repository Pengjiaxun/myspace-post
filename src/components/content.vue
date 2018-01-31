<template>
    <div class="ui-content">
        <slot name="ui-content"></slot>
    </div>
</template>
<style lang="scss">
    @import "../assets/sass-store/_base.scss";
    .ui-content{
        background-image: url('../assets/images/material/img-bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 100%;
        padding: 30px 40px;
    }
</style>
<script>
    export default {
        name: 'ui-content'
    }
</script>

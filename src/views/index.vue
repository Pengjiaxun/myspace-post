<template>
    <div class="container">
        <div class="bg animated bounceIn">
            <img src="../assets/images/material/index_bg.png">
        </div>
        <div v-show="clickme"
            class="clickme animated shake"
            @click="toInputName">
            <img src="../assets/images/material/clickme.png"
                width="250">
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            clickme: false
        }
    },
    methods: {
        toInputName() {
            this.$router.push('input-name')
        }
    },
    mounted() {
        const self = this
        setTimeout(() => {
            self.clickme = true
        }, 1000);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
    height: 100%;
    text-align: center;
    .bg {
        height: 100%;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .clickme {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 60px;
        img {
            width: 177.5px;
        }
    }
  }
</style>

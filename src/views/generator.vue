<template>
    <ui-content>
        <div slot="ui-content"
            class="generator-page">
            <div class="you-text animated lightSpeedIn">
                <img src="../assets/images/material/you-text.png" />
            </div>
            <div class="img-wrap animated bounceInLeft">
                <!-- <img ref="img" :src="imgUrl" /> -->
                <img ref="img"
                    :src="require(`../assets/images/person/${imgUrl}.png`)">
            </div>
            <router-link class="btn animated zoomInUp"
                :to="{name: 'Result', query: { imgUrl: imgUrl, name: name}}">
                <img src="../assets/images/material/generate-btn.png" />
            </router-link>
        </div>
    </ui-content>
</template>
<script>
import UiContent from './../components/content.vue';
import $ from 'jquery';
import Drag from '../assets/js/drag';
import imgData from '../assets/js/img-infos';
import html2canvas from 'html2canvas';

export default {
    name: 'generator',
    components: {
        UiContent
    },
    data() {
        const { name } = this.$route.query;
        return {
            name,
            imgUrl: '',
            newImgUrl: ''
        }
    },
    methods: {
        // 获取图片 url
        getImgUrl() {
            const currImgData = imgData.filter(item => item.name === this.name);
            this.imgUrl = currImgData[0].url;
        }
    },
    mounted() {
        this.getImgUrl();
        //            this.$nextTick(() => {
        //                var $targetObj = $(this.$refs.img);
        //                //初始化设置
        //                Drag.init($targetObj, function (left, top, scale, rotate) {
        //                    $targetObj.css({
        //                        left: left,
        //                        top: top,
        //                        'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)',
        //                        '-webkit-transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'
        //                    });
        //                });
        //                //初始化拖动手势（不需要就注释掉）
        //                Drag.drag($targetObj, function (left, top) {});
        //                //初始化缩放手势（不需要就注释掉）
        //                Drag.scale($targetObj, function (scale) {});
        //                //初始化旋转手势（不需要就注释掉）
        //                //Drag.rotate($targetObj, function (rotate) {});
        //            })
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass-store/_base.scss";
.generator-page {
  height: 100%;
  width: 100%;
  $scale: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .you-text,
  .btn {
    display: flex;
    flex-shrink: 0;
  }
  .you-text {
    height: 67px/$scale;
    width: 478px/$scale;
  }
  .img-wrap {
    border: 6px solid #ffa53a;
    background-color: #fff;
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    margin: 30px 0;
    position: relative;
    padding: 20px 20px 0 20px;
    overflow: hidden;
    img {
      /*max-height: none;*/
      /*max-width: none;*/
      /*position:relative;*/
      /*transform-origin:center*/
    }
  }
  .btn {
    display: block;
    height: 116px/$scale;
    width: 364px/$scale;
  }
}
</style>

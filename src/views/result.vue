<template>
    <ui-content class="container">
        <div slot="ui-content"
            class="result-page">
            <div class="photo"
                v-show="!canvas">
                <div class="photo-inner"
                    id="html2canvas">
                    <img src="../assets/images/material/img-box.png">
                    <div class="avatar-container">
                        <!-- <img :src="url" /> -->
                        <img :src="require(`../assets/images/person/${actorName}.png`)">
                    </div>
                    <div class="text-wrap">
                        <div class="actor">
                            Rapper
                            <span class="actor-name">{{this.nickname}}</span>
                        </div>
                        <div class="label">
                            {{this.signature}}
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="canvas"
                id="canvas"
                class="canvas animated flip">
                <div class="canvas-inner">
                    <img id="canvas2img"
                        class="canvas2img"
                        :src="imgUrl">
                    <div :class="{'btn-save': true, animated: true, bounceInUp: true}"
                        @click="save">
                        <img src="../assets/images/material/press_tip.png"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
    </ui-content>
</template>
<script>
import Vue from 'vue'
import html2canvas from 'html2canvas'
import labels from '../config/labels'
import nickname from '../config/name'
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import UiContent from './../components/content.vue';

export default {
    name: 'result',
    components: {
        UiContent
    },
    data() {
        return {
            signature: '',
            canvas: false,
            url: '',
            imgUrl: '',
            actorName: '',
            nickname: ''
        }
    },
    methods: {
        random() {
            return Math.ceil(Math.random() * labels.length) - 1
        },
        createLabel() {
            this.signature = labels[this.random()]
        },
        createImg() {
            const self = this
            html2canvas(document.querySelector("#html2canvas")).then(function (canvas) {
                self.canvas = true
                self.imgUrl = canvas.toDataURL()
                // document.querySelector("#canvas").appendChild(canvas);
            })
        },
        save() {
        },
        showLoading() {
            this.$vux.loading.show({ text: '海报生成中...' })
        },
        hideLoading() {
            this.$vux.loading.hide()
        }
    },
    created() {
        this.actorName = this.$route.query.name
        this.nickname = nickname[this.actorName] ? nickname[this.actorName] : this.actorName
        this.url = this.$route.query.imgUrl
        this.createLabel()
        this.showLoading()
    },
    mounted() {
        setTimeout(() => {
            this.createImg()
            this.hideLoading()
        }, 800);
    }
}
</script>
<style lang="scss" scoped>
    .container {
      padding: 15px 30px;
    }
    .result-page{
        $scale: 2*1.5;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .photo,
        .canvas{
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .photo{
            .photo-inner{
                position: relative;
                overflow: hidden;
            }
            .avatar-container{
                position: absolute;
                left:0;
                bottom: 20%;
                width: 100%;
                z-index: 10;
                text-align: center;
                img{
                    width: 50%;
                }
            }
            .text-wrap{
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 5px;
                padding: 5px 10px;
            }
            .actor {
                 color: #030101;
                 font-weight: bolder;
                 .actor-name {
                     font-size: 18px;
                 }
            }
            .label {
                color: #ffa53a;
                background-color: #030101;
                padding: 3px 5px;
            }
        }
        .canvas{
            $btnWidth: 577px;
            $btnHeight: 142px;
            $marginTop: 10px;
            padding-bottom: $btnHeight/$scale + $marginTop;
            .canvas-inner{
                position: relative;
                /*overflow: hidden;*/
            }
            .btn-save{
                position: absolute;
                left: 50%;
                top: 100%;
                width: $btnWidth/$scale;
                height: $btnHeight/$scale;
                margin-left: -$btnWidth/$scale/2;
                margin-top: $marginTop;
                &.hidden{
                    visibility: hidden;
                }
            }
        }
    }
</style>
<style lang="less">
    .weui-mask_transparent {
        background-color: #111;
    }
</style>


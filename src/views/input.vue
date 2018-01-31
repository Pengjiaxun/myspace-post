<template>
    <ui-content>
        <div slot="ui-content"
            class="input-page">
            <div class="who-text animated zoomInDown">
                <img src="../assets/images/material/who-text.png" />
            </div>
            <div class="input-wrap animated bounceInLeft">
                <div class="person">
                    <img src="../assets/images/material/person.png" />
                </div>
                <div class="input-box">
                    <img src="../assets/images/material/input-box.png" />
                </div>
                <input v-model="name"
                    type="text"
                    class="input"
                    placeholder="输入你的真名" />
                <p :class="{hide: !isShowTips, 'input-tips': true, 'animated': true, 'bounceIn': true} ">{{this.tips}}</p>
            </div>
            <div class="btn animated zoomIn"
                @click="toGenerator">
                <img src="../assets/images/material/next-btn.png" />
            </div>
        </div>
    </ui-content>
</template>
<script>
import UiContent from './../components/content.vue';
import imgData from '../assets/js/img-infos';

export default {
    name: 'input-name',
    components: {
        UiContent
    },
    data() {
        return {
            name: '',
            isShowTips: false,
            tips: '你骗人，云空间没有你!'
        }
    },
    methods: {
        //检查是否存在对应的图片
        isImgCheck() {
            const currImgData = imgData.filter(item => item.name === this.name);
            return !!currImgData.length;
        },
        toGenerator() {
            const name = this.name.trim();
            if (this.isImgCheck(name)) {
                this.isShowTips = false;
                this.$router.push({
                    path: 'generator',
                    query: {
                        name: name
                    }
                })
            } else {
                this.isShowTips = true;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../assets/sass-store/_base.scss";
.input-page {
  height: 100%;
  width: 100%;
  $scale: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .who-text,
  .input-wrap,
  .btn {
    display: flex;
    flex-shrink: 0;
  }
  .who-text {
    height: 225px/$scale;
    width: 414px/$scale;
  }
  .input-wrap {
    height: 140px/$scale;
    width: 479px/$scale;
    margin: 50px 0;
    position: relative;
    padding: 10px 30px;
    align-items: center;
    .input-box {
      height: 140px/$scale;
      width: 479px/$scale;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .input {
      background-color: transparent;
      color: #fff;
      font-size: 24px;
      position: relative;
      z-index: 10;
      height: 32px;
      text-align: center;
      &::placeholder {
        color: #5e3000;
      }
    }
    .hide {
      display: none;
    }
    .input-tips {
      color: #f00;
      font-size: 16px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      text-align: center;
      font-weight: bolder;
    }
  }
  .person {
    height: 161px/$scale;
    width: 182px/$scale;
    position: absolute;
    bottom: 87%;
    right: 10%;
  }
  .btn {
    height: 116px/$scale;
    width: 364px/$scale;
  }
}
</style>

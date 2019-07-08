<template>
  <header class="f-header">
    <div class="f-content">
      <div class="f-header__logo">
        <img src="~@/assets/images/logo.png" alt="" />
      </div>
      <div class="f-header__nav">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            <a
              @click="onSelect(menu)"
              href="javascript:;"
              v-if="menu.id != 'download'"
              :class="{ active: active == menu.id }"
              >{{ menu.name }}</a
            >
          </li>
          <li>
            <a href="javascript:;" @click="showDownload"
              >相关下载 <i class="el-icon-arrow-down"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="f-header__code">
        <img src="~@/assets/images/ercode.jpg" alt="" />
      </div>
    </div>
    <el-dialog :modal="false" title="相关下载" :visible.sync="dialog">
      <div class="m-download">
        <div class="item">
          <a href="http://144.34.213.22/software/python-3.6.8-amd64.exe">
            <div>python-3.6.8</div>
            <div class="p">点击下载</div>
          </a>
        </div>
      </div>
    </el-dialog>
  </header>
</template>

<script>
export default {
  name: 'FHeader',
  props: {
    current: {
      type: String,
      default: 'index'
    }
  },
  data() {
    return {
      menus: [
        {
          name: '首页',
          id: 'index'
        },
        {
          name: '关于我们',
          id: 'about'
        },
        {
          name: '课程体系',
          id: 'case'
        },
        {
          name: '联系我们',
          id: 'contact'
        }
      ],
      active: this.current,
      dialog: false
    }
  },
  methods: {
    onSelect(item) {
      this.$emit('select', item.id)
      this.active = item.id
    },
    showDownload() {
      this.dialog = true
    }
  }
}
</script>

<style lang="less">
.f-header {
  height: 90px;
  overflow: hidden;
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  .f-content {
    display: flex;
    margin: 0 auto;
    height: 100%;
  }
  &__logo {
    width: 200px;
    height: 100%;
    text-align: center;
    img {
      height: 100px;
    }
  }
  &__nav {
    flex: 1;
    text-align: right;
    height: 100%;
    ul {
      height: 100%;
      padding: 0;
      margin: 0;
      li {
        line-height: 90px;
        height: 90px;
        display: inline-block;
        padding: 0 20px;
        list-style: none;
        cursor: pointer !important;
        a {
          display: block;
          color: #999;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          padding: 0 5px;
          height: 80px;
          position: relative;
          &:after {
            content: ' ';
            height: 4px;
            background-color: #ffc501;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transform: scale(0);
            transition: 0.4s all;
          }
          &.active,
          &:hover {
            color: #ffc501;
            &:after {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  &__code {
    margin-left: 20px;
    img {
      height: 90px;
      width: 90px;
    }
  }
}

.m-download {
  display: flex;
  align-items: center;
  .item {
    width: 150px;
    height: 100px;
    display: flex;

    a {
      display: flex;
      background-color: #333;

      border-radius: 5px;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: #fff;
      font-size: 20px;
      text-align: center;
      transition: 0.4s all;
      flex-direction: column;
      .p {
        font-size: 16px;
        color: #eee;
      }
      &:hover {
        background-color: #0371df;
      }
    }
  }
}
</style>

<template>
  <div class="forum">
    <div class="toplist-wrap">
      <div class="list" v-for="(item,index) in toplist" :key="index">
        <div class="img">
          <img :src="item.img" alt />
        </div>
        <span class="font">{{item.title}}</span>
      </div>
    </div>
    <div class="hot">
      <h1>热门</h1>
      <div class="color-font">
        <span
          v-for="(item,index) in colorfont"
          :key="index"
          v-bind:style="{background:item.bg_color}"
        >{{item.text}}</span>
      </div>
    </div>
    <div class="section">
      <van-tabs v-model="active" swipeable type="line" line-width=".5rem"	 color="#333333">
        <van-tab title="最新">

        </van-tab>
        <van-tab title="精华">精华</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "question",
  data() {
    return {
      toplist: [],
      colorfont: [],
      active: 0,
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios
        .get("/data/社区/community.json")
        .then(res => {
          console.log(res);
          this.toplist = res.data.data.nav;
          this.colorfont = res.data.data.hot_label;
          console.log(this.toplist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.forum {
  width: 100%;
}
.toplist-wrap::-webkit-scrollbar {
  display: none;
}
.toplist-wrap::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden; //占位但不可见
}
.toplist-wrap {
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;

  .list {
    display: inline-block;
    position: relative;
    margin: 0 20/100rem;
    width: 120/100rem;
    height: 128/100rem;
    .img {
      width: 120/100rem;
      img {
        border-radius: 8px;
        width: 120/100rem;
      }
    }
    .font {
      border-radius: 8px;
      background-color: rgba(97, 96, 96, 0.8);
      height: 100%;
      line-height: 128/100rem;
      width: 80%;
      padding: 0 10%;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
    }
  }
}
.hot {
  padding: 0 20/100rem;
  margin: 80/100rem 0;
  h1 {
    margin-bottom: 20/100rem;
    font-size: 20px;
    color: #333333;
  }
  .color-font {
    span {
      display: inline-block;
      height: 40/100rem;
      line-height: 40/100rem;
      color: #fff;
      font-size: 12px;
      padding: 0 8/100rem;
      border-radius: 3px;
      margin: 10/100rem;
    }
  }
}
</style>
<template>
  <div class="block-vertical">
    <b-card-group v-for="item in news" :key="item.id">
      <b-card
        :img-src="item.img"
        :img-alt="item.title"
        img-left
        tag="article"
        class="politics-news_item"
        @click="redirect(item.url)"
      >
        <b-card-title>
          {{ item.name }}
        </b-card-title>
        <b-card-text class="text">
          {{
            80 > item.title.length
              ? item.title
              : `${item.title.substring(0, 80)}...`
          }}
        </b-card-text>
        <b-card-text class="tag">
          <b-icon icon="dot" variant="primary" scale="2" />
          <a href="#" class="card-link">{{ item.cat }}</a>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "BlockVertical",
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    redirect(url) {
      return (window.location.href = url);
    },
  },
};
</script>
<style lang="scss" scoped>
.block-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .card {
    border: none;
    padding-left: 10px;
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      .card-title {
        margin: 0%;
        line-height: 18px;
        font-size: 14px;
        font-weight: 500;
      }
      .text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 18px;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        height: 36px;
        margin-top: 10px;
      }
      .card-link {
        margin-left: 9px;
        color: #666666;
        font-weight: 500;
      }
    }
    img {
      width: 100px;
      object-fit: cover;
      margin-right: 19px;
      border-radius: 5px;
    }
    @media screen and (max-width: 980px) {
      margin-top: 12px;
    }
  }
}
</style>

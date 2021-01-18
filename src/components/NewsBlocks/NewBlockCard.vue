<template>
  <b-card
    :img-src="item.img.replace('100_100', '170_100')"
    :img-alt="item.title"
    img-top
    tag="article"
    class="block-4x2_item"
  >
    <b-card-text class="text">
      {{ item.title }}
    </b-card-text>
    <b-card-text class="tag">
      <b-icon icon="dot" variant="primary" scale="2" />
      <a href="#" class="card-link">{{ item.cat }}</a>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  name: "Block4x2",
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.block-4x2 {
  display: flex;
  flex-wrap: wrap;

  .card-group {
    width: 25%;

    .card {
      border: none;
      padding: 0 10px;
      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        .text {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 18px;
          font-size: 14px;
          font-weight: 500;
          height: 36px;
          margin-top: 10px;
        }
        .card-link {
          margin-left: 9px;
          font-size: 14px;
          color: #666666;
          font-weight: 500;
        }
      }
      img {
        object-fit: cover;
        margin-right: 19px;
      }
    }
    @media screen and (max-width: 767px) {
      width: 50%;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
}
@for $i from 1 through 4 {
  .card-group:nth-child(#{$i + 4}) {
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="block-6x2">
    <b-link class="detailed_link">
      <span>Подробнее</span>
      <b-icon icon="chevron-right" variant="primary" scale="0.7"
    /></b-link>
    <div class="block-6x2_row">
      <b-card-group
        v-for="item in news.slice(0, 6)"
        :key="item.id"
        class="block-6x2_row"
        @click="redirect(item.url)"
      >
        <b-card
          :img-src="item.img.replace('100_100', '170_100')"
          :img-alt="item.title"
          img-top
          tag="article"
          class="block-6x2_item"
        >
          <b-card-text class="text">
            {{ item.title }}
          </b-card-text>
          <b-card-text class="tag">
            <b-icon icon="dot" variant="primary" scale="2" />
            <a href="#" class="card-link">{{ item.cat }}</a>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="block-6x2_row">
      <b-card-group
        v-for="item in news.slice(6, 12)"
        :key="item.id"
        class="block-6x2_row"
        @click="redirect(item.url)"
      >
        <b-card
          :img-src="item.img.replace('100_100', '170_100')"
          :img-alt="item.title"
          img-top
          tag="article"
          class="block-6x2_item"
        >
          <b-card-text class="text">
            {{ item.title }} {{ item.title }}
          </b-card-text>
          <b-card-text class="tag">
            <b-icon icon="dot" variant="primary" scale="2" />
            <a href="#" class="card-link">{{ item.cat }}</a>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "Block6x2",
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
.block-6x2 {
  margin-top: 20px;
  .detailed_link {
    display: flex;
    padding: 15px;
    justify-content: flex-end;
    align-items: center;
    span {
      color: #999999;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .block-6x2_row {
    display: flex;
    @media screen and (max-width: 990px) {
      flex-wrap: wrap;
    }
  }

  .card-group {
    width: 100%;
    @media screen and (max-width: 990px) {
      width: 33%;
    }

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
          position: relative;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          line-height: 18px;
          font-size: 14px;
          font-weight: 500;
          height: 50px;
          margin-top: 10px;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 1) 100%
            );
            display: block;
            height: 14px;
            bottom: 0;
          }
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
</style>

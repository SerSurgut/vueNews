<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div
        v-for="item in news"
        :key="item.id"
        :class="index % 2 === 0 ? ['111111'] : ['odd']"
      >
        <b-carousel-slide :img-src="item.img.replace('100_100', '300_150')" >
          <div class="tag">
            <b-icon icon="dot" variant="primary" scale="2" />
            <a href="#" class="card-link">{{ item.cat }}</a>
          </div>
          <p class="text">
            {{ item.title }}
          </p>
          <div>
            <b-button :href="item.url"
              >Читать далее
              <b-icon icon="chevron-right" variant="Light" scale="1"
            /></b-button>
          </div>
        </b-carousel-slide>
      </div>
    </b-carousel>
    <div class="block-news-list">
      <b-card-group v-for="item in news.slice(0, 5)" :key="item.id">
        <b-card tag="article" class="block-news-list_item" @click="redirect(item.url)">
          <b-card-text class="text">
            <b-icon icon="diamond-fill" variant="primary" scale="0.7" />
            {{ item.title }}
          </b-card-text>
          <b-card-text class="tag">
            <b-icon icon="dot" variant="primary" scale="1.2" />
            <a href="#" class="card-link">{{ item.cat }}</a>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: 1,
    },
    left: {
      type: String,
      default: "riight",
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    redirect(url){
        return window.location.href = url
    }
  },
};
</script>
<style lang="scss">
#carousel-1 {
  .carousel-inner {
    z-index: 1;
  }
  .carousel-control-next,
  .carousel-control-prev {
    z-index: 5;
  }
  .carousel-control-prev {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      left:0;
      border: 40px solid transparent;
      border-left: 50px solid #1A7C98;
    }
  }
  .carousel-control-next {
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: 100%;
      border: 40px solid transparent;
      border-right: 50px solid #1A7C98;
    }
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    width: 10px !important;
    height: 10px !important;
    z-index: 5 !important;
  }

  .carousel-caption {
    left: 0%;
    top: 0px;
    bottom: 0;
    width: 100%;
    padding: 10px 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.29);
    .tag {
      a {
        color: #ffffff;
      }
    }
    .text {
      text-align: left;
      line-height: 20px;
      font-size: 16px;
      padding: 0 15px;
    }
    .btn {
      background: linear-gradient(90deg, #275dae 0%, #0c9a81 100%);
      display: inline-block;
    }
  }
}
.block-news-list {
  padding-top: 15px;

  .card-body {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .block-news-list_item {
    border: none;
  }
  .text {
    display: flex;
    margin-bottom: 5px;
    svg {
      margin-top: 5px;
      margin-right: 5px;
    }
  }

  .tag {
    border-bottom: 2px solid #9999;
    margin: 0;
    padding-bottom: 10px;
    a {
      color: #888888;
      font-weight: 500;
    }
  }
}
.block-news-list .card-group:last-child .tag {
  border-bottom: none;
}
</style>
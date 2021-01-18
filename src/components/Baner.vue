<template>
  <div class="politics-news" v-if="newsPoliticList">
    <b-card-group v-for="item in newsPoliticList" :key="item.id" class="wrapper">
        <b-card :img-src="item.img" img-alt="Image" img-top tag="article" class="politics-news_item">
          <b-card-text>
            {{ item.title }}
          </b-card-text>
        </b-card>
    </b-card-group>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  name: "BlockPolitic",
  computed: {
    ...mapGetters({newsPoliticList: "getNewsPolitic"})
  }
};
</script>
<style lang="scss" scoped></style>

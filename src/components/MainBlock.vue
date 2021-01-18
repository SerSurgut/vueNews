<template>
  <div class="container main-container">
    <template v-if="window.width > 360">
      <b-row>
        <b-col cols="12" sm="12" md="4" class="pt-3">
          <BlockVertical :news="lives.slice(0, 3)" />
        </b-col>
        <b-col cols="12" sm="12" md="8" class="pt-3">
          <Block4x2 :news="politics.slice(0, 8)" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="pt-3">
          <Block6x2 :news="publics.slice(0, 12)" />
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row>
        <b-col cols="12" class="p-0">
          <Carusel :news="lives"/>
        </b-col>
        <b-col cols="12" class="mt-3 p-0">
          <Carusel :news="politics" />
        </b-col>
        <b-col cols="12" class="mt-3 p-0">
          <Carusel :news="publics" />
        </b-col>
      </b-row>
    </template>
  </div>
</template>
<script>
import BlockVertical from "./NewsBlocks/BlockVertical";
import Block4x2 from "./NewsBlocks/Block4x2";
import Block6x2 from "./NewsBlocks/Block6x2";
import Carusel from "./NewsBlocks/Carusel";
import { mapGetters } from "vuex";
export default {
  name: "MainBlock",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
        themes: [],
      },
    };
  },
  components: {
    BlockVertical,
    Block4x2,
    Block6x2,
    Carusel,
  },
  computed: {
    ...mapGetters({
      politics: "getNewsPolitic",
      lives: "getNewsLive",
      publics: "getNewsPublic",
    }),
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.themes = [this.politics, this.lives, this.politics];
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>
<style lang="scss">
.main-container {
  flex-grow: 1;
  padding-bottom: 50px;
  .card{
    cursor: pointer;
  }
  
}
</style>

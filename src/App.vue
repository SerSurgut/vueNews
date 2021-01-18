<template>
  <div id="app">
    <HeaderBlock/>
    <MainBlock/>
    <FooterBlock/>
    
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock'
import MainBlock from './components/MainBlock'
import FooterBlock from './components/FooterBlock'

import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    HeaderBlock, MainBlock, FooterBlock
  },
  created(){
    this.fetchNewsList()
  },
  methods:{
    ...mapActions(["fetchNewsList"]),
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
    min-height: 100vh;
  flex-direction: column;height: 100%;

}
</style>

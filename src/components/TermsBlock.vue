<template>
  <div class="terms">
    <BLink href="#" class="terms_item">Terms of Use</BLink>
    <BLink href="#" class="terms_item">Privacy Policy</BLink>
  </div>
</template>
<script>
export default {
  name: "TermsBlock"
};
</script>
<style lang="scss" scoped>
.terms {
  .terms_item {
    text-align: center;
    margin-right: 30px;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.05em;
    color: #999999;
    @media screen and (max-width: 360px){
      display: block;
      padding:5px;
      width: 100%;
      margin: 0;

    }
  }
  @media screen and (max-width: 970px){
    padding: 12px 0 20px;
  }
}
</style>

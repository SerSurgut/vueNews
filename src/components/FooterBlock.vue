<template>
  <footer>
    <div class="footer-links">
      <ContactLinks />
      <TermsBlock />
    </div>
    <div class="footer-copyright-block">
      © 2021. Все права защищены.
    </div>
  </footer>
</template>
<script>
import ContactLinks from "./ContactLinks";
import TermsBlock from "./TermsBlock";
export default {
  name: "FooterBlock",
  components: {
    ContactLinks,
    TermsBlock
  }
};
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  height: 217px;
  color: #666666;
  background:rgba(25, 25, 25, 1);
;
  .footer-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 98px;
    border-bottom: 1px solid rgba(204, 204, 204, 0.15);
      @media screen and (max-width: 970px) {
        flex-direction: column;
        height:auto
      }    
  }
  .footer-copyright-block {
    text-align: center;
    padding-top: 20px;
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (max-width: 970px){
    height: auto;
    padding: 40px 30px 80px 30px
  }
}
</style>



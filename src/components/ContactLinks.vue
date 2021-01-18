<template>
  <div class="contact-links">
    <BLink href="mailto:mail@mail.com" class="contact-links-item">
      <img src="@/assets/email.png" alt="email" title="email" />
      <span>mail@mail.com</span>
    </BLink>
    <BLink href="Skype:Skype?add" class="contact-links-item">
      <img src="@/assets/skype.png" alt="Skype" title="Skype" />
      <span>Skype</span>
    </BLink>
    <BLink href="tg://resolve?domain=Telegram" class="contact-links-item">
      <img src="@/assets/telegram.png" alt="Telegram" title="Telegram" />
      <span>Telegram</span>
    </BLink>
    <BLink href="tel:+78001234567" class="contact-links-item"> <img src="@/assets/phone.png" alt="email" title="email" />8-<span>800</span>-123-45-67 </BLink>
  </div>
</template>
<script>
export default {
  name: "ContactLinks"
};
</script>
<style lang="scss" scoped>
.contact-links {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
    @media screen and (max-width: 970px) {
    flex-wrap: wrap;
    justify-content: space-around;;
    }
  .contact-links-item {
    margin-right: 30px;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
    color: #fff;
    img {
      margin-right: 20px;
    }
    span {
      color: #0D9A81;
    }
    @media screen and (max-width: 980px) {
      margin-top: 12px;
    }
    @media screen and (max-width: 360px) {
      margin-right: 0;
      &:first-child {
        width: 100%;
        order: 2;
      }
      &:last-child {
        width: 100%;
        order: -1;
      }
    }

  }
}
</style>

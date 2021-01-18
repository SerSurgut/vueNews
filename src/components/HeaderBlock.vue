<template>
  <BNavbar toggleable="lg" type="dark">
    <BNavbarBrand href="#">Вариант В</BNavbarBrand>
    <BNavbarToggle target="nav-collapse">
      <HumburgerIcon />
    </BNavbarToggle>
    <BCollapse id="nav-collapse" class="justify-content-end" is-nav>
      <BNavbarNav>
        <BNavItem class="navbar-link" href="#">Link 1</BNavItem>
        <BNavItem class="navbar-link" href="#">Link 2</BNavItem>
        <BNavItem class="navbar-link" href="#">Link 3</BNavItem>
        <BNavItem class="navbar-link" href="#">Link 4</BNavItem>
        <BNavItem class="navbar-link" href="#">Link 5</BNavItem>
        <BNavItem class="navbar-link" href="#">Link 5</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
import HumburgerIcon from "./Icons/HumburgerIcon";
export default {
  name: "HeaderBlock",
  components: {
    HumburgerIcon
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  background: linear-gradient(90deg, #275dae 0%, #0c9a81 100%);
}
  .navbar-dark {
    .navbar-toggler {
      border: 0;
    }
  }
</style>

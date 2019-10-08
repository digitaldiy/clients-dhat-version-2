<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Nav />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default {
  components: {
    Nav,
    Footer
  }
}
</script>



<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
   
    <slot/>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer"
export default {
  components: {

    Footer
  }
}
</script>



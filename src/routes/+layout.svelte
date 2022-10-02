<ProgressBar />

<script lang="ts">
  import { Navbar } from "$lib/components/layouts/navbar";
  import { ProgressBar } from "$lib/components/elements/progress-bar";
  import { Footer } from "$lib/components/layouts/footer";
</script>

<Navbar />

<div class="content">
  <div class="page">
    <slot></slot>
  </div>
  
  <div class="footer">
    <Footer />
  </div>
</div>

<style lang="scss">
  @import "../lib/scss/variables.scss";

  .content {
    .page {
      min-height: calc(100vh - #{$height-navbar} - #{$height-footer});
    }
  }
</style>
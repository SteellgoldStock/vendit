<ProgressBar/>

<script lang="ts">
  import { ProgressBar } from "$lib/components/elements/progress-bar";
  import { Sidebar } from "$lib/components/layouts/sidebar";
</script>

<Sidebar />

<div class="content">
  <slot></slot>
</div>

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  .content {
    @media (min-width: $breakpoint-md) {
      margin-left: 310px;
    }
  }
</style>
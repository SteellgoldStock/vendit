<script lang="ts">
  export let alt: string = "Image";
</script>

<div class="group">
  <slot></slot>
</div>

<style lang="scss">
  @import "../../../../../lib/scss/colors.scss";
  @import "../../../../../lib/scss/variables.scss";

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>
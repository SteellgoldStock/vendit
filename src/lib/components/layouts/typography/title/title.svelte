<script lang="ts">
  export let subtitle: string = "";
  export let size: "1" | "2" | "3" | "4" | "5" | "6" = "1";
</script>

{#if subtitle}
  <div class="head">
    <h1 class="xl{size}"><slot></slot></h1>
    <h2 class="xl2">{subtitle}</h2>
  </div>
{:else}
  <h1 class="xl{size}"><slot></slot></h1>
{/if}

<style lang="scss">
  @import "../../../../scss/colors.scss";
  @import "../../../../scss/variables.scss";

  .head {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 700;
    color: $white-800;
  }

  h1.xl1 {
    font-size: 2.5rem;
  }

  h1.xl2 {
    font-size: 2rem;
  }

  h1.xl3 {
    font-size: 1.75rem;
  }

  h1.xl4 {
    font-size: 1.5rem;
  }

  h1.xl5 {
    font-size: 1.25rem;
  }

  h1.xl6 {
    font-size: 1rem;
  }
</style>
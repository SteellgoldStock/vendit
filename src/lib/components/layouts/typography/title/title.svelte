<script lang="ts">
  export let subtitle: string = "";
  export let size: "1" | "2" | "3" | "4" | "5" | "6" = "1";
  export let weight: number = 500;
  export let color: "black" | "white" = "black";
</script>

{#if subtitle}
  <div class="head">
    <h1 class="xl{size} w{weight} {color}"><slot></slot></h1>
    <h2 class="xl2 {color} {weight - 200}">{subtitle}</h2>
  </div>
{:else}
  <h1 class="xl{size} w{weight} {color}"><slot></slot></h1>
{/if}

<style lang="scss">
  @import "../../../../scss/colors.scss";
  @import "../../../../scss/variables.scss";

  .head {
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: -30px;
    }
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

  h1.w100, h2.w100 {
    font-weight: 100;
  }

  h1.w200, h2.w200 {
    font-weight: 200;
  }

  h1.w300, h2.w300 {
    font-weight: 300;
  }

  h1.w400, h2.w400 {
    font-weight: 400;
  }

  h1.w500, h2.w500 {
    font-weight: 500;
  }

  h1.w600, h2.w600 {
    font-weight: 600;
  }

  h1.w700, h2.w700 {
    font-weight: 700;
  }

  h1.w800, h2.w800 {
    font-weight: 800;
  }

  h1.w900, h2.w900 {
    font-weight: 900;
  }

  .black {
    color: $white-900;
  }

  .white {
    color: $white-100;
  }
</style>
<script lang="ts">
  export let note: number = 0;

  import Star from "./Star.svelte";
</script>

<div class="card">
  <div class="stars">
    {#each Array.from({ length: 5 }) as _, i}
      {#if note >= i + 1}
        <Star />
      {:else if note >= i + 0.5}
        <Star half={true} />
      {:else}
        <Star disabled={true} />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #495273;
    border-radius: 10px;
    padding: 10px;
    width: 110px;
    height: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .stars {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }
</style>
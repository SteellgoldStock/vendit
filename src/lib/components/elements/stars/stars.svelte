<script lang="ts">
  export let note: number = 0;
  export let showNote: boolean = false;

  import Star from "./Star.svelte";
</script>

<div class="card {showNote ? "large" : "normal"}">
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

  {#if showNote}
  <div class="note">
    ({note}/5)
  </div>
{/if}
</div>

<style lang="scss">
  @import "src/lib/scss/colors.scss";
  @import "src/lib/scss/variables.scss";

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #495273;
    border-radius: 10px;
    padding: 5px;
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

  .large {
    width: 180px;

    .note {
      margin-left: 10px;
      color: white;
      font-weight: 400;
    }
  }
</style>
<script lang="ts">
  export let title: string = "Lorem ipsum dolor sit amet";

  export let active = false;
</script>

<div class="accordion">
  <div class="header" on:click={() => (active = !active)}>
    <h4 class="title">
      {title}
    </h4>

    <div class="icon">
      {#if active}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />
        </svg>
      {:else}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" />
        </svg>
      {/if}
    </div>
  </div>

  {#if active}
    <div class="content">
      <p>
        <slot></slot>
      </p>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../../../../lib/scss/colors.scss";
  @import "../../../../lib/scss/variables.scss";

  .accordion {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: $accordion;
    margin-bottom: 20px;
    user-select: none;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      cursor: pointer;

      .title {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;
        color:rgb(221, 221, 221)
      }

      .icon {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: white;
        border-radius: 50%;

        svg {
          fill: black;
        }
      }
    }

    .content {
      padding: 20px;
      border-top: 1px solid $white-700;

      p {
        font-size: 15px;
        margin: 0;
        color: white;
      }
    }
  }
</style>
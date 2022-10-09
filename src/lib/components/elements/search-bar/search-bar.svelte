<script lang="ts">
  export let placeholder: string = "Search for a plugin";
  export let value: string | undefined = undefined;
</script>

<div class="search-bar">
  {#if value}
    <input type="text" placeholder={placeholder} value={value} />
  {:else}
    <input type="text" placeholder={placeholder} />
  {/if}
  
  <div class="button">
    <button>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</div>

<style lang="scss">
  @import "src/lib/scss/colors.scss";
  @import "src/lib/scss/variables.scss";

  .search-bar {
    display: flex;
    justify-content: center;
    
    input {
      background-color: #3D486B;
      outline: none;
      border: solid 5px #414D74;
      padding: 10px 15px;
      width: 100%;
      font-size: 1rem;
      color: rgba($color: #ffffff, $alpha: 50%);
      border-radius: 20px 0 0 20px;

      &::placeholder {
        color: rgba($color: #ffffff, $alpha: 20%);
      }
    }

    button {
      background: #414D74;
      border: none;
      cursor: pointer;
      border-radius: 0 20px 20px 0;
      border: solid 5px #414D74;
      color: $white;
      background-color: #414D74;
      padding: 10px;
      outline: none;
      transition: background-color 0.2s ease-in-out;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background-color: #3D486B;
      }
    }
  }
</style>
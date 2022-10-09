<script lang="ts">
  interface Option {
    value: string | number;
    text: string | number;
    disabled?: boolean;
    selected?: boolean;
  }

  export let options: Option[];
  export let color: "blue" | "red" | "green" | "yellow" | "purple" | "orange" | "white" | "primary" | "secondary" | "tertiary" = "primary";
</script>

<select class={color}>
  {#each options as option}
    <option value={option.value} disabled={option.disabled} selected={option.selected}>{option.text}</option>
  {/each}
</select>

<style lang="scss">
  @import "src/lib/scss/colors.scss";
  @import "src/lib/scss/variables.scss";

  select {
    color: #fff;
    padding: 10px 20px 10px 10px;
    border-radius: $button-radius;
    text-decoration: none;
    border: none;

    cursor: pointer;
    
    &:focus {
      outline: none;
    }

    &.blue {
      background-color: $blue;
    }

    &.red {
      background-color: $red;
    }

    &.green {
      background-color: $green;
    }

    &.yellow {
      background-color: $yellow;
    }

    &.purple {
      background-color: $purple;
    }

    &.orange {
      background-color: $orange;
    }

    &.white {
      background-color: $white;
      color: $white-900;
    }

    &.primary {
      background-color: $primary;
    }

    &.secondary {
      background-color: $secondary;
    }

    &.tertiary {
      background-color: $tertiary;

      &:hover {
        background-color: #212736;
      }
    }
  }
</style>
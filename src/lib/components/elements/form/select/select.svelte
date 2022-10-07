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
  @import "../../../../scss/colors.scss";
  @import "../../../../scss/variables.scss";

  select {
    background-color: #3b4b80;
    color: #fff;
    padding: 10px 20px;
    border-radius: $button-radius;
    text-decoration: none;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

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
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
      }
    }
  }

  select:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  }
</style>
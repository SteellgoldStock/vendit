<script lang="ts">
  export let half: boolean = false;
  export let disabled: boolean = false;
</script>

<i class="fa-solid fa-star {half ? "half" : ""} {disabled ? "disabled" : ""}"></i>

<style lang="scss">
  @import "../../../scss/colors.scss";
  
  i.half {
    color: $yellow;
    background: linear-gradient(to right, $yellow 50%, $white-100 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  i.disabled {
    color: $white-100;
  }

  i {
    color: $yellow;
  }
</style>
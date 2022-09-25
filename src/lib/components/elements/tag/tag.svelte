<script lang="ts">
  export let text = "Hello world";
  export let type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" = "primary";
</script>

<span class="tag {type}">
  {text}
</span>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .tag {
    background: $white-300;
    color: $white-900;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .primary {
    background: $primary;
    color: $white;
  }

  .secondary {
    background: $secondary;
    color: $white;
  }

  .success {
    background: $green;
    color: $white;
  }

  .danger {
    background: $red;
    color: $white;
  }

  .warning {
    background: $orange;
    color: $white;
  }

  .info {
    background: $blue;
    color: $white;
  }
</style>
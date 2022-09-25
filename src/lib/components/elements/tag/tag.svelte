<script lang="ts">
  export let text = "Hello world";
  export let type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "special" = "primary";
</script>

<span class="tag {type}">
  <div class="text">
    {text}
  </div>
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
    font-weight: 800;
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

  .light {
    background: $white-100;
    color: $white-900;
    border: 2px solid $white-300;
  }

  .dark {
    background: $white-900;
    color: $white;
  }

  .special {
    // text gradiant color
    background: linear-gradient(180deg, #465F85 0%, #3A496D 100%);

    .text {
      // text gradiant color
      background: linear-gradient(92.68deg, #EAE692 1.83%, #94DF9B 32.1%, #9BF9E6 62.37%, #79C3ED 92.64%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }
  }
</style>
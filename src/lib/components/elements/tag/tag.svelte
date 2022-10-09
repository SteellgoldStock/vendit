<script lang="ts">
  export let text = "Hello world";
  export let type: "primary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "special" = "primary";
</script>

<div class="tag">
  <span class="tag {type}">
    <div class="text">
      {text}
    </div>
  </span>
</div>

<style lang="scss">
  @import "src/lib/scss/colors.scss";
  @import "src/lib/scss/variables.scss";

  .tag {
    display: flex;
  }

  span.tag {
    background: $white-300;
    color: $white-900;
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 800;
  }

  span.primary {
    background: $primary;
    color: $white;
  }

  span.success {
    background: $green;
    color: $white;
  }

  span.danger {
    background: $red;
    color: $white;
  }

  span.warning {
    background: $orange;
    color: $white;
  }

  span.info {
    background: $blue;
    color: $white;
  }

  span.light {
    background: $white-100;
    color: $white-900;
    border: 2px solid $white-300;
  }

  span.dark {
    background: $white-900;
    color: $white;
  }

  span.special {
    // text gradiant color
    background: linear-gradient(180deg, #465F85 0%, #3A496D 100%);

    .text {
      // text gradiant color
      background: linear-gradient(92.68deg, #EAE692 1.83%, #94DF9B 32.1%, #9BF9E6 62.37%, #79C3ED 92.64%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }
  }
</style>
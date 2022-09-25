<script lang="ts">
  export let progress: number = 0;
</script>

<div class="progressbar">
  <div class="progress" style="width: {progress}%"></div>
</div>

<style type="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .progressbar {
    width: 100%;
    height: 10px;
    background: #455E84;
    overflow: hidden;

    .progress {
      height: 100%;
      background: $yellow;
    }

    transition: width 0.5s ease;
  }
</style>
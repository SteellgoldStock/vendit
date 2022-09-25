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
    position: absolute;
    width: 100%;
    height: 3px;
    background: #455E84;
    overflow: hidden;

    .progress {
      height: 100%;
      background: $yellow;
      transition: width 0.5s ease;
      border-radius: 0 50px 50px 0;
    }
  }
</style>
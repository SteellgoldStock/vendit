<script lang="ts">
  let width: number = 1;
  import { afterNavigate } from "$app/navigation";

  function hideProgressBar() {
    const progressBar = document.querySelector(".progressbar");
    progressBar?.style.setProperty("display", "none");
  }

  afterNavigate(async () => {
    width = 100;

    setTimeout(() => {
      hideProgressBar();
    }, 1000);
  });
</script>

<div class="progressbar">
  <div class="progress" style="width: {width}%"></div>
</div>

<style type="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .progressbar {
    position: absolute;
    width: 100%;
    height: 5px;
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
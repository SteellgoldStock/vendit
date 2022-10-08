<script lang="ts">
  interface Slider {
    min: number;
    max: number;
    step: number;
  }

  export let slider: Slider;

  export let value = 0;
</script>

<div class="slider">
  <input type="range" min={slider.min ?? 0} max={slider.max ?? 5} step={slider.step ?? 1} bind:value={value}>
</div>

<style lang="scss">
  @import '../../../../scss/colors.scss';
  @import '../../../../scss/variables.scss';

  .slider {
    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      height: 0.5rem;
      border-radius: 0.5rem;
      background: $secondary;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;

      // edit the slider's thumb appearance to star
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: white;
        cursor: pointer;
      }
    }
  }
</style>
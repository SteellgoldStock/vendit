<script lang="ts">
  export let buyDate: string;
</script>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <div>
    Vous avez acheter ce plugin le <strong>{buyDate}</strong>, dite nous ce que vous en avez pensé!
  </div>
</div>

<style lang="scss">
  @import '../../../../scss/colors.scss';
  @import '../../../../scss/variables.scss';

  .alert {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: $tertiary;
    color: $white-400;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    gap: 10px;

    svg {
      width: 2rem;
      height: 2rem;
      fill: $white-400;
    }
  }
</style>
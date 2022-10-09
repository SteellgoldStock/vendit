<div class="alert" role="alert">
  <div>
    <slot></slot>
  </div>
</div>

<style lang="scss">
  @import 'src/lib/scss/colors.scss';
  @import 'src/lib/scss/variables.scss';

  .alert {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: $tertiary;
    color: $white-400;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    gap: 10px;
  }
</style>
<script lang="ts">
  import { Stars } from "$lib/components/elements/stars";
    import Tag from "$lib/components/elements/tag/tag.svelte";
</script>

<h1>Salut </h1>
<div class="title">
  <h1>VENDIT</h1>
  <Tag text="BETA" type="primary" />
</div>
<Stars note={2.5} showNote={true} />

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  .title {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-weight: 900;
    }
  }
</style>
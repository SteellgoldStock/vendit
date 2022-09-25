<script lang="ts">
  import Tag from "$lib/components/elements/tag/tag.svelte";
    import Paragraph from "$lib/components/layouts/typography/paragraph/paragraph.svelte";
import { Title } from "$lib/components/layouts/typography/title";
</script>

<div class="header">
  <div class="title">
    <Title color="white" weight={900}>VENDIT</Title>
    <Tag text="BETA" type="special" />
  </div>
  <div class="subject">
    <Paragraph>
      Find your favorite PocketMine plugin sellers here
    </Paragraph>
  </div>
</div>

<hr class="separator">

<div class="sellers">
  <div class="title">
    <Title color="white" weight={900} subtitle="and 30+ mores">DISCOVER ALL SELLERS</Title>
  </div>
</div>

<style lang="scss">
  @import "../../src/lib/scss/colors.scss";
  @import "../../src/lib/scss/variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background: $primary;
    color: $white;

    @media (max-width: $breakpoint-md) {
      padding: 10px 30px;
      text-align: center;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .subject {
      margin-top: -30px;
    }
  }

  .sellers {
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
  }

  .separator {
    border: 0;
    height: 5px;
    // background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0));
    background: white;
  }
</style>
<script lang="ts">
  import { Accordion } from "$lib/components/elements/accordion";
  import { Separator } from "$lib/components/elements/separator";
  import { getLang } from "$lib/utils/lang/lang";

  // json to array
  let accordions: any = getLang().about.accordions;
  const faqs = Object.keys(accordions).map((key) => accordions[key]);
</script>

<svelte:head>
  <title>Vendit ・ About</title>
</svelte:head>

<div class="header">
  <div class="title">
    <h1 class="title">{ getLang().about.title }</h1>
  </div>
  <div class="subject">
    { getLang().about.subtitle }
  </div>
</div>

<Separator />

<section class="faq">
  {#each faqs as faq}
    <Accordion title={faq.title}>
      { @html faq.text }
    </Accordion>
  {/each}
</section>

<style lang="scss">
  @import "../../../src/lib/scss/colors.scss";
  @import "../../../src/lib/scss/variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $px50 $px20;
    background: $primary;
    color: $white;

    @media (max-width: $breakpoint-md) {
      padding: $px10 $px30;
      text-align: center;
    }

    .title {
      h1 {
        font-size: $font-size-11;
        font-weight: $font-weight-7;
        margin: 0;
      }

      display: flex;
      align-items: center;
      gap: $px10;
    }
  }

  section.faq {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: $px50;
    background: linear-gradient(253.27deg, #2B324E 16.67%, rgba(58, 70, 118, 0.9) 47.32%);
  }
</style>
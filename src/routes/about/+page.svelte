<script>
  import { Accordion } from "$lib/components/elements/accordion";
  import { Separator } from "$lib/components/elements/separator";
</script>

<div class="header">
  <div class="title">
    <h1 class="title">ABOUT VENDIT</h1>
  </div>
  <div class="subject">
    Here are some answers to the question
  </div>
</div>

<Separator />

<section class="faq">
  <Accordion active={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Accordion>
  <Accordion active={false} title="How to buy plugins on Vendit" />
</section>

<style lang="scss">
  @import "../../../src/lib/scss/colors.scss";
  @import "../../../src/lib/scss/variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    background: $primary;
    color: $white;

    @media (max-width: $breakpoint-md) {
      padding: 10px 30px;
      text-align: center;
    }

    .title {
      h1 {
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
      }

      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  section.faq {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: 50px;
    background: linear-gradient(253.27deg, #2B324E 16.67%, rgba(58, 70, 118, 0.9) 47.32%);

    .rows {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 50px 20px;
      margin: 0 auto;
      max-width: 1200px;

      .text {
        h2 {
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          color: $white;
        }

        p {
          font-size: 1.4rem;
          color: $white;
        }
      }
    }
  }
</style>
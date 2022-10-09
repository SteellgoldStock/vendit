<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/elements/button';
  import { getLang } from "$lib/utils/lang/lang";

  let status: number = $page.status;
</script>

<svelte:head>
  <title>Vendit ・ Error {status}</title>
</svelte:head>

<div class="error">
  <h1>{status}</h1>
  <p>{ getLang().error_page.errors[status] }</p>
  
  <div class="button">
    <Button buttonInfo={{
      type: "link",
      text: getLang().error_page.button,
      icon: "fa-solid fa-arrow-left",
      href: "/"
    }} />
  </div>
</div>

<style lang="scss">
  @import "src/lib/scss/colors.scss";
  @import "src/lib/scss/variables.scss";

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - #{$height-navbar} - #{$height-footer});

    @media (max-width: $breakpoint-md) {
      min-height: 40vh;
    }

    h1 {
      font-size: 7rem;
      font-weight: $font-weight-7;
      margin: 0;
      color: $white;
    }

    p {
      font-size: $font-size-3;
      font-weight: $font-weight-2;
      margin: 0;
      color: $white;
    }

    .button {
      margin-top: $px40;
      padding: $px10;
    }
  }
</style>
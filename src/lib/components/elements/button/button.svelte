<script lang="ts">
  interface ButtonInfo {
    type: "button" | "link";
    text: string;
    href?: string;
    icon?: string; // font awesome icon
  }

  export let buttonInfo: ButtonInfo;

  let icon: string;
  if (buttonInfo.icon) {
    icon = `<i style="margin-right: 10px;" class="${buttonInfo.icon}"></i>`;
  }
</script>

{#if buttonInfo.type === "button"}
  <button class="button">
    {@html icon ?? ""}
    {buttonInfo.text}
  </button>
{:else if buttonInfo.type === "link"}
  <a href={buttonInfo.href} class="button">
    {@html icon ?? ""}
    {buttonInfo.text}
  </a>
{/if}

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .button {
    background-color: #3D486B;
    color: #fff;
    padding: 10px 20px;
    border-radius: $button-radius;
    text-decoration: none;
    border: solid 3px rgb(77, 88, 133);
  }
</style>
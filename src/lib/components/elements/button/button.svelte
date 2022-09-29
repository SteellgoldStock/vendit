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
    icon = `<i style="margin-left: 10px;" class="${buttonInfo.icon}"></i>`;
  }
</script>

{#if buttonInfo.type === "button"}
  <button class="button">
    {buttonInfo.text}
    {@html icon ?? ""}
  </button>
{:else if buttonInfo.type === "link"}
  <a href={buttonInfo.href} class="button">
    {buttonInfo.text}
    {@html icon ?? ""}
  </a>
{/if}

<style lang="scss">
  .button {
    background-color: #3D486B;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    border: solid 3px rgb(77, 88, 133);
  }
</style>
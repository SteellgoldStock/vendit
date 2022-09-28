<script lang="ts">
  import { Image } from "$lib/components/elements/image";
  import Tag from "$lib/components/elements/tag/tag.svelte";
</script>

<div class="header">
  <div class="title">
    <h1 class="title">VENDIT</h1>
    <Tag text="BETA" type="special" />
  </div>
  <div class="subject">
    Find your favorite PocketMine plugin sellers here
  </div>
</div>

<hr class="separator">

<div class="sellers">
  <div class="row">
    <div class="left">
      <div class="title">
        <h2 class="title">DISCOVER OUR SELLERS</h2>
        <p class="subtitle">There are many more!</p>
      </div>
    </div>

    <div class="right">
      <div class="sellers-imgs">
        <img src="https://cdn.discordapp.com/avatars/504392983244832780/ed108638e6cba46a3498bc6da92158f6.webp?size=256" alt="Gaëtan">
        <img src="https://cdn.discordapp.com/avatars/533306853317279773/6eac2d06855a52de73bc48343a00a2c1.png?size=256" alt="Romain">
        <img src="https://cdn.discordapp.com/avatars/371298344921726978/2e12f0a06b95725bf492c1a22e43b4b6.png?size=256" alt="Loupio">
        <img src="https://cdn.discordapp.com/avatars/233351173665456129/a_cee03ee0f97ee3c550840d584bc55c21.png?size=256" alt="Bluzzi">
        <img src="https://cdn.discordapp.com/avatars/162633729703936001/c68325b9d4509bcd7e4a56a32dd6ff30.png?size=256" alt="King">
      </div>
    </div>
  </div>

  <hr class="separator">
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

  .sellers {
    margin-top: -8px;
    background: linear-gradient(180deg, #2B324E 35.24%, rgba(58, 70, 118, 0.9) 100%);

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: $white;

      h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2rem;

        @media (max-width: $breakpoint-md) {
          font-size: 1.5rem;
        }
      }
      
      p {
        font-size: 1rem;
        font-weight: 400;
        margin-top: -15px;

        @media (max-width: $breakpoint-md) {
          width: 250px;
        }
      }
    }

    .images {
      margin-top: -10px;
      
      .top {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
        height: 100px;
      }

      .bottom {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        height: 65px;
        opacity: 0.5;
      }
      
      padding-bottom: 50px;
    }

    @media (max-width: $breakpoint-md) {
      .images {
        .top {
          height: 40px;
        }

        .bottom {
          height: 40px;
        }
      }
    }
  }

  .separator {
    border: 0;
    height: 5px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.30), rgba(0, 0, 0, 0));
  }
</style>
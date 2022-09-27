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
  <div class="title">
    <h2 class="title">Featured sellers</h2>
    <p class="subtitle">These are our best sellers on this platform</p>
  </div>
  <div class="images">
    <!-- TODO: Automatically generate this by top sellers of month -->
    <div class="top">
      <Image alt="User 1" src="/assets/users/fictives/1.png" />
      <Image alt="User 2" src="/assets/users/fictives/2.png" />
      <Image alt="User 3" src="/assets/users/fictives/3.png" />
      <Image alt="User 4" src="/assets/users/fictives/4.png" />
      <Image alt="User 5" src="/assets/users/fictives/5.png" />
      <Image alt="User 6" src="/assets/users/fictives/6.png" />
    </div>
    <div class="bottom">
      <Image alt="User 7" src="/assets/users/fictives/7.png" />
      <Image alt="User 8" src="/assets/users/fictives/8.png" />
      <Image alt="User 9" src="/assets/users/fictives/9.png" />
      <Image alt="User 10" src="/assets/users/fictives/10.png" />
      <Image alt="User 11" src="/assets/users/fictives/11.png" />
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
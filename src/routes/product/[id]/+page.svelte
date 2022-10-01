<script lang="ts">
    import { Button } from "$lib/components/elements/button";
import { Stars } from "$lib/components/elements/stars";


</script>

<section class="product">
  <div class="rows">
    <div class="row1">
      <img class="pinned" src="https://media.discordapp.net/attachments/951208784200630392/1018195129531650231/unknown.png?width=756&height=473" height="100px" alt="">
    </div>

    <div class="row2">
      <div class="note">
        <Stars note={4.5} />
      </div>
      <div class="infos">
        <h1 class="title">Market Plugin</h1>
        <div class="price">
          <h2 class="now-price">59.99€</h2>
        </div>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../../lib/scss/colors.scss";
  @import "../../../lib/scss/variables.scss";

  .product {

    .rows {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      gap: 30px;
      width: 80%;
      margin: 0 auto;

      .row1 {
        img {
          width: 500px;
          height: 100%;
          object-fit: cover;
        }
      }

      .row2 {
        .infos {
          color: $white;

          .title {
            font-size: 2rem;
            font-weight: 900;
            text-transform: uppercase;
            margin-top: 0.20rem;
          }

          .price {
            .now-price {
              font-size: 1rem;
              font-weight: 500;
              text-transform: uppercase;
              margin-top: -30px;
            }
          }
        }
      }
    }
  }
</style>
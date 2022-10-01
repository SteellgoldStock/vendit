<script lang="ts">
  import { Button } from "$lib/components/elements/button";
  import { Stars } from "$lib/components/elements/stars";
    import { destroy_component } from "svelte/internal";

  interface ProductInterface {
    slug: string;
    name: string;
    description: string;
    price: number;
    seller: string;
    rating: number;
    images: string[];

    comments: {
      name: string;
      comment: string;
      rating: number;
    }[];
  }

  let product: ProductInterface = {
    slug: "product-1",
    name: "Plugin cool",
    description: "Ceci est un plugin très cool omg",
    price: 6,
    seller: "Squash",
    rating: 4,
    images: [
      "https://media.discordapp.net/attachments/951208784200630392/1018195129531650231/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195186465116210/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195247215411211/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195336122081310/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195396129992775/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195186465116210/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195247215411211/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195336122081310/unknown.png",
      "https://media.discordapp.net/attachments/951208784200630392/1018195396129992775/unknown.png"
    ],

    comments: [{
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 4,
    }],
  };
</script>

<svelte:head>
  <title>Product ・ {product.name}</title>
</svelte:head>

<section class="product">
  <div class="rows">
    <div class="row1">
      <img src={product.images[0]} alt="">
      <div class="images">
        {#each product.images as image, i}
          {#if i > 0}
            <img src={image} alt={product.name} />
          {/if}
        {/each}
      </div>
    </div>

    <div class="row2">
      <div class="note">
        <Stars note={product.rating} />
      </div>
      <div class="infos">
        <h1 class="title">{product.name}</h1>
        <div class="price">
          <h2 class="now-price">Selled by {product.seller} for {product.price}€</h2>
        </div>
        <p class="description">{@html product.description}</p>
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
      gap: 30px;
      width: 80%;
      margin: 0 auto;

      .row1 {
        img {
          width: 500px;
          height: 300px;
          object-fit: cover;
        }
        
        .images {
          display: flex;
          flex-direction: row;
          gap: 10px;
          padding: 10px 0;
          // max per line
          max-width: 500px;
          overflow-x: auto;

          &::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px $primary;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background: $secondary;
            border-radius: 100px;
          }

          img {
            width: 75px;
            height: 100%;
            object-fit: cover;
          }
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
              margin-top: -30px;
            }
          }
        }
      }
    }
  }
</style>
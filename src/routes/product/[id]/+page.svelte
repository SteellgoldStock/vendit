<script lang="ts">
  import { Button } from "$lib/components/elements/button";
  import { Separator } from "$lib/components/elements/separator";
  import { Stars } from "$lib/components/elements/stars";
  import { Comment } from "$lib/components/elements/product/comment";

  interface ProductInterface {
    slug: string;
    name: string;
    description: string;
    price: number;
    seller: {
      name: string;
      description: string;
      avatarURL: string;
    };
    images: string[];

    comments: {
      name: string;
      text: string;
      rating: number;
      avatarURL: string;
      date: string;
    }[];
  }

  let product: ProductInterface = {
    slug: "product-1",
    name: "Plugin cool",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa nam. Dolorem, aut magni corrupti nemo illum doloribus rerum enim pariatur, aperiam perferendis culpa, quaerat est beatae adipisci reprehenderit necessitatibus saepe ab earum. Quaerat labore neque suscipit aliquid enim quisquam, laudantium quae accusamus beatae cupiditate alias temporibus ipsam nesciunt inventore impedit distinctio, repellat nulla corrupti rerum. Adipisci nemo in consequuntur nesciunt animi temporibus ut beatae eos molestias consectetur incidunt, id saepe, esse facere sequi enim eveniet voluptatum doloribus fuga? Est, vero nisi. Consequatur, sunt, beatae dicta eius nostrum impedit totam, aliquid nulla pariatur quaerat tempora itaque debitis ratione ex in.",
    price: 6,
    seller: {
      name: "Squash",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
      avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256"
    },
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
      name: "Bluzzi",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 3.5,
      avatarURL: "https://cdn.discordapp.com/avatars/233351173665456129/a_cee03ee0f97ee3c550840d584bc55c21.png?size=256",
      date: "10/09/2021"
    }, {
      name: "Gaëtan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 5,
      avatarURL: "https://cdn.discordapp.com/avatars/504392983244832780/9ff08250c46bfd775c5b30a73e1a48a8.png?size=256",
      date: "07/09/2021"
    }, {
      name: "Romain",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 1,
      avatarURL: "https://cdn.discordapp.com/avatars/533306853317279773/6eac2d06855a52de73bc48343a00a2c1.png?size=256",
      date: "21/09/2021"
    }, {
      name: "Loupio",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 4,
      avatarURL: "https://cdn.discordapp.com/avatars/371298344921726978/2e12f0a06b95725bf492c1a22e43b4b6.png?size=256",
      date: "13/09/2021"
    }
  ]
  };

  // global note from all comments
  let rating: number = 0;
  product.comments.forEach((comment) => {
    rating += comment.rating;
  });
  rating = parseFloat((rating / product.comments.length).toFixed(1));
</script>

<svelte:head>
  <title>Product ・ {product.name}</title>
</svelte:head>

<section class="product">
  <div class="rows">
    <div class="row1">
      <div class="images">
        {#each product.images as image, i}
          <img src={image} alt={product.name} />
        {/each}
      </div>
    </div>

    <div class="row2">
      <div class="note">
        <Stars note={rating} showNote={true} />
      </div>
      <div class="infos">
        <h1 class="title">{product.name}</h1>
        <div class="price">
          <h2 class="now-price">Selled by {product.seller.name} for {product.price}€</h2>
        </div>
        <p class="description">{@html product.description}</p>
      </div>

      <div class="actions">
        <Button buttonInfo={{
          text: "Buy now",
          type: "button",
          icon: "fa-brands fa-paypal"
        }} />

        <Button buttonInfo={{
          text: "Add to cart",
          type: "button",
          icon: "fa-solid fa-shopping-cart",
          href: "/cart"
        }} />

        <Button buttonInfo={{
          text: "Add to wishlist",
          type: "button",
          icon: "fa-solid fa-heart"
        }} />

        <Button buttonInfo={{
          text: "Report",
          type: "button",
          color: "red",
          icon: "fa-solid fa-flag"
        }} />
      </div>
    </div>
  </div>
</section>

<br>

<div class="seller-card">
  <img src={product.seller.avatarURL} alt="{product.seller} Avatar">
  <div class="infos">
    <h1 class="title">{product.seller.name}</h1>
    <p class="description">{product.seller.description}</p>
  </div>
</div>

<br>

<Separator />

<br>

<section class="comments">
  <div class="comments-list">
    {#each product.comments as comment}
      <Comment comment={comment} />
    {/each}
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
          object-fit: cover;
          border-radius: 10px;
        }
        
        .images {
          display: flex;
          flex-direction: row;
          gap: 10px;
          padding: 10px 0;
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
            width: 500px;
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

        .actions {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-top: 20px;

          @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
            width: 80%;
            margin: 0 auto;
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      .rows {
        flex-direction: column;
        gap: 0;

        .row1 {
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;

          img.pinned {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .images {
            max-width: 100%;
          }
        }

        .row2 {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }

  .seller-card {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 80%;
    margin: 0 auto;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 100px;
    }

    .infos {
      color: $white;

      .title {
        font-size: 1.5rem;
        font-weight: 900;
        text-transform: uppercase;
        margin-top: 0.20rem;
      }
    }
  }

  .comments {
    .comments-list {
      // 2 comments per row
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      width: 80%;
      margin: 0 auto;
      padding: 0 0 20px;
    }

    @media (max-width: $breakpoint-md) {
      .comments-list {
        grid-template-columns: repeat(1, 1fr);

        .comment {
          .infos {
            .header {
              .title {
                font-size: 1rem;
              }
            }

            .description {
              margin-top: 10px;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
</style>
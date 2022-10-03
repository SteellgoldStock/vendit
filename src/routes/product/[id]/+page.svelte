<script lang="ts">
  import { Button } from "$lib/components/elements/button";
  import { Separator } from "$lib/components/elements/separator";
  import { Stars } from "$lib/components/elements/stars";
  import { Comment } from "$lib/components/elements/product/comment";
  import { getLang, params } from "$lib/utils/lang/lang";

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
          <a href="/seller/{product.seller.name}">
            <img src={product.seller.avatarURL} width="30px" height="30px" alt="">
          </a>
          <h2 class="now-price">
            { params(getLang().product.page.selled_by, [product.seller.name, product.price]) }
          </h2>
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
      gap: $gap-30;
      width: 80%;
      margin: 0 auto;

      .row1 {
        img {
          object-fit: cover;
          border-radius: $image-radius;
        }
        
        .images {
          display: flex;
          flex-direction: row;
          gap: $gap-10;
          padding: $px10 0;
          max-width: ($px100 * 5) + ($px10 * 3);
          overflow-x: auto;

          &::-webkit-scrollbar {
            width: px10;
            height: $px10;
          }

          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px $primary;
            border-radius: $image-radius;
          }

          &::-webkit-scrollbar-thumb {
            background: $secondary;
            border-radius: $px100;
          }

          img {
            width: ($px100 * 5);
            height: 100%;
            object-fit: cover;

            @media (max-width: $breakpoint-md) {
              width: 100%;
            }
          }
        }
      }

      .row2 {
        .infos {
          color: $white;

          .title {
            font-size: $font-size-6;
            font-weight: $font-weight-7;
            text-transform: uppercase;
            margin-top: 0.20rem;
          }

          .price {
            display: flex;
            align-items: center;
            margin-top: -30px;

            img {
              border-radius: $image-radius * 10;
              margin-right: $px10;
            }

            .now-price {
              font-size: $font-size-1;
              font-weight: $font-weight-3;
            }
          }
        }

        .actions {
          display: flex;
          flex-direction: row;
          gap: $gap-10;
          margin-top: $px20;

          @media (max-width: $breakpoint-md) {
            flex-direction: column;
            gap: $gap-10;
            width: 95%;
            margin: 0 auto;
          }
        }
      }
    }

    @media (max-width: $breakpoint-md) {
      .rows {
        flex-direction: column;
        gap: $gap-25;

        .row1 {
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: $gap-10;

          img.pinned {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: $image-radius;
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

  .comments {
    .comments-list {
      // 2 comments per row
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $gap-20;
      width: 80%;
      margin: 0 auto;
      padding: 0 0 $px20;
    }

    @media (max-width: $breakpoint-md) {
      .comments-list {
        grid-template-columns: repeat(1, 1fr);

        .comment {
          .infos {
            .header {
              .title {
                font-size: $font-size-1;
              }
            }

            .description {
              margin-top: $px10;
              font-size: $font-size-5-md;
            }
          }
        }
      }
    }
  }
</style>
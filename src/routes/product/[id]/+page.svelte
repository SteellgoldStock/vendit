<script lang="ts">
  import { Button } from "$lib/components/elements/button";
  import { Separator } from "$lib/components/elements/separator";
  import { Stars } from "$lib/components/elements/stars";

  interface ProductInterface {
    slug: string;
    name: string;
    description: string;
    price: number;
    seller: string;
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa nam. Dolorem, aut magni corrupti nemo illum doloribus rerum enim pariatur, aperiam perferendis culpa, quaerat est beatae adipisci reprehenderit necessitatibus saepe ab earum. Quaerat labore neque suscipit aliquid enim quisquam, laudantium quae accusamus beatae cupiditate alias temporibus ipsam nesciunt inventore impedit distinctio, repellat nulla corrupti rerum. Adipisci nemo in consequuntur nesciunt animi temporibus ut beatae eos molestias consectetur incidunt, id saepe, esse facere sequi enim eveniet voluptatum doloribus fuga? Est, vero nisi. Consequatur, sunt, beatae dicta eius nostrum impedit totam, aliquid nulla pariatur quaerat tempora itaque debitis ratione ex in.",
    price: 6,
    seller: "Squash",
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
      rating: 4.5,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 5,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 3,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 4,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 4.5,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 5,
    },
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
      rating: 3,
    }],
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
        <Stars note={rating} showNote={true} />
      </div>
      <div class="infos">
        <h1 class="title">{product.name}</h1>
        <div class="price">
          <h2 class="now-price">Selled by {product.seller} for {product.price}€</h2>
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
  <img src="https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256" alt="{product.seller} Avatar">
  <div class="infos">
    <h1 class="title">{product.seller}</h1>
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?</p>
  </div>
</div>

<br>

<Separator />

<section class="comments">
  <h1 class="title">Comments</h1>
  <div class="comments-list">
    {#each product.comments as comment}
      <div class="comment">
        <div class="note">
          <Stars note={comment.rating} showNote={true} />
        </div>
        <div class="infos">
          <h1 class="name">{comment.name}</h1>
          <p class="comment">{@html comment.comment}</p>
        </div>
      </div>
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
          width: 500px;
          height: 300px;
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

        .actions {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-top: 20px;
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
    h1.title {
      font-size: 2rem;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
    }
  }
</style>
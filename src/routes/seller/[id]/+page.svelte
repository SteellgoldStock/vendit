<script lang="ts">
  interface ProductInterface {
    slug: string;
    name: string;
    description: string;
    price: number;
    images: string[];

    comments: {
      name: string;
      comment: string;
      rating: number;
      avatarURL: string;
    }[];
  }

  interface SellerInterface {
    id: string;
    name: string;
    description: string;
    avatarURL: string;
    products?: ProductInterface[];

    social: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      youtube?: string;

      in: {
        followers: number;
        following: number;
      }
    };
  }

  let seller: SellerInterface = {
    id: "1",
    name: "Squash",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
    avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",

    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",

      in: {
        followers: 59,
        following: 12
      }
    }
  };
</script>

<svelte:head>
  <title>Seller ・ {seller.name}</title>
</svelte:head>

<section class="presentation">
  <div class="top">
    <div class="banner">
      <img src="https://media.discordapp.net/attachments/951208784200630392/1012395263828181062/Rectangle_123_1.png" alt="Banner">
    </div>
    <img src={seller.avatarURL} alt={seller.name} />
  </div>

  <div class="header">
    <h1 class="seller_name">{seller.name}</h1>
    <p class="seller_description">{seller.description}</p>
  </div>

  <div class="actions">
    <button class="action follow">Follow</button>
    <button class="action message">Message</button>
  </div>

  <div class="stats">
    <div class="row">
      <h1 class="stats_value">{seller.social.in.followers}</h1>
      <p class="stats_label">Followers</p>
    </div>

    <div class="row">
      <h1 class="stats_value">{seller.social.in.following}</h1>
      <p class="stats_label">Following</p>
    </div>

    <div class="row">
      <h1 class="stats_value">0</h1>
      <p class="stats_label">Products</p>
    </div>

    <div class="row">
      <h1 class="stats_value">0</h1>
      <p class="stats_label">Comments</p>
    </div>
</section>

<style lang="scss">
  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .banner {
        width: 100%;
        height: 10rem;
        border-radius: 1rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      .seller_name {
        font-size: 2rem;
        font-weight: 600;
      }

      .seller_description {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
      }
    }

    .actions {
      display: flex;
      gap: 1rem;

      .action {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &.follow {
          background-color: var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-dark);
          }
        }

        &.message {
          background-color: var(--color-white);
          color: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            background-color: var(--color-primary);
            color: var(--color-white);
          }
        }
      }
    }

    .stats {
      display: flex;
      gap: 1rem;

      .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .stats_value {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .stats_label {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
</style>
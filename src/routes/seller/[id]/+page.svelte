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
  <div class="presentation__avatar">
    <img src={seller.avatarURL} alt={seller.name} />
  </div>

  <div class="presentation__content">
    <h1 class="presentation__content__name">{seller.name}</h1>
    <p class="presentation__content__description">{seller.description}</p>
  </div>

  <div class="presentation__actions">
    <button class="presentation__actions__button">Follow</button>
    <button class="presentation__actions__button">Message</button>
  </div>

  <div class="presentation__stats">
    <div class="presentation__stats__stat">
      <h1 class="presentation__stats__stat__value">{seller.social.in.followers}</h1>
      <p class="presentation__stats__stat__label">Followers</p>
    </div>

    <div class="presentation__stats__stat">
      <h1 class="presentation__stats__stat__value">{seller.social.in.following}</h1>
      <p class="presentation__stats__stat__label">Following</p>
    </div>

    <div class="presentation__stats__stat">
      <h1 class="presentation__stats__stat__value">0</h1>
      <p class="presentation__stats__stat__label">Products</p>
    </div>

    <div class="presentation__stats__stat">
      <h1 class="presentation__stats__stat__value">0</h1>
      <p class="presentation__stats__stat__label">Comments</p>
    </div>
</section>

<style lang="scss">
  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    &__avatar {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      &__name {
        font-size: 1.5rem;
        font-weight: 600;
      }

      &__description {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
      }
    }

    &__actions {
      display: flex;
      gap: 0.5rem;

      &__button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #2f3136;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
      }
    }

    &__stats {
      display: flex;
      gap: 1rem;

      &__stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        &__value {
          font-size: 1.5rem;
          font-weight: 600;
        }

        &__label {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
</style>
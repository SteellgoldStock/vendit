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
    products: ProductInterface[];
  }

  let seller: SellerInterface = {
    id: "1",
    name: "Squash",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
    avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
    products: [
      {
        slug: "1",
        name: "Squash",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
        price: 10,
        images: [
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
        ],
        comments: [
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
        ],
      },
      {
        slug: "2",
        name: "Squash",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
        price: 10,
        images: [
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
          "https://cdn.discordapp.com/attachments/887202202000578580/887202222200946708/unknown.png",
        ],
        comments: [
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
          {
            name: "Squash",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus cum. Ut nam debitis aspernatur molestias non exercitationem, impedit cupiditate?",
            rating: 5,
            avatarURL: "https://cdn.discordapp.com/avatars/947125111981506601/f5ecce981646f5eaa0cf4c2eed88ca75.png?size=256",
          },
        ],
      },
    ]
  };
</script>

<svelte:head>
  <title>Seller ・ {seller.name}</title>
</svelte:head>
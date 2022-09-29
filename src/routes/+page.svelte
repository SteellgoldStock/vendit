<script lang="ts">
  import Button from "$lib/components/elements/button/button.svelte";
import { SearchBar } from "$lib/components/elements/search-bar";
  import { Separator } from "$lib/components/elements/separator";
  import { Tag } from "$lib/components/elements/tag";
</script>

<svelte:head>
  <title>Vendit ・ Homepage</title>
</svelte:head>

<div class="header">
  <div class="title">
    <h1 class="title">VENDIT</h1>
  </div>
  <div class="subject">
    Find your favorite PocketMine plugin sellers here
  </div>

  <br>
  
  <SearchBar placeholder="Search for a plugin" />
</div>

<Separator />

<div class="sellers">
  <div class="rows">
    <div class="text">
      <h2>Sellers</h2>
      <p>Find your favorite PocketMine plugin sellers here</p>
      
      <div class="button">
        <Button buttonInfo={{
          type: "link",
          text: "See more sellers",
          icon: "fa-solid fa-plus",
          href: "#"
        }} />
      </div>
    </div>
    <div class="images">
      <div class="col1">
        <img class="img1" src="https://cdn.discordapp.com/avatars/233351173665456129/a_cee03ee0f97ee3c550840d584bc55c21.png?size=256" height="150px"alt="Bluzzi">
      </div>
      <div class="col2">
        <img class="img1" src="https://cdn.discordapp.com/avatars/533306853317279773/6eac2d06855a52de73bc48343a00a2c1.png?size=256" height="100px" alt="Romain">
        <img class="img2" src="https://cdn.discordapp.com/avatars/371298344921726978/2e12f0a06b95725bf492c1a22e43b4b6.png?size=256" height="100px" alt="Loupio">
      </div>
      <div class="col3">
        <img class="img1" src="https://cdn.discordapp.com/avatars/504392983244832780/ed108638e6cba46a3498bc6da92158f6.webp?size=256" height="90px" alt="Gaëtan">
        <img class="img2" src="https://cdn.discordapp.com/avatars/162633729703936001/c68325b9d4509bcd7e4a56a32dd6ff30.png?size=256" height="100px" alt="King">
      </div>
    </div>
  </div>
</div>

<Separator />

<div class="products">
  <div class="rows">
    <div class="show-md text">
      <h2>Buy or sell your plugins</h2>
      <p>There are so many, add yours?<br>and be among the pinned!</p>
    </div>
    <div class="images">
      <div class="col1">
        <img class="img1" src="https://raw.githubusercontent.com/Bluzzi/ChestFinder/2d25f96f2b9009513647cf510abaab41b0f2927d/icon-cf.png" height="150px"alt="ChestFinder">
        <img class="img2" src="https://raw.githubusercontent.com/nhanaz-pm-pl/AntiExplosions/df11dec1f62396e11b1540bea4ce4818947199b6/icon.png" height="150px"alt="AntiExplosions (nhanaz-pm-pl)">
      </div>
      <div class="col2">
        <img class="img1" src="https://raw.githubusercontent.com/nhanaz-pm-pl/KeepInventory/ec115877db5dae7528532f168aa925d000cd6d38/icon.png" height="100px" alt="KeepInventory (nhanaz-pm-pl)">
        <img class="img2" src="https://raw.githubusercontent.com/nhanaz-pm-pl/HealthLimit/f3b5a5332a7e06a93d968d433aec8ac15791454a/icon.png" height="100px" alt="HealthLimit (nhanaz-pm-pl)">
      </div>
      <div class="col3">
        <img class="img1" src="https://raw.githubusercontent.com/nhanaz-pm-pl/BetterCancel/79e0c00e97e5546367eabc1539817bfa6d7f8434/icon.png" height="90px" alt="BetterCancel (nhanaz-pm-pl)">
        <img class="img2" src="https://raw.githubusercontent.com/nhanaz-pm-pl/AntiFallDamage/75d1a3c945bde136a9674f6c31f3ccd3b3fe5e03/icon.png" height="100px" alt="AntiFallDamage (nhanaz-pm-pl)">
      </div>
    </div>
    <div class="hidden-md text">
      <h2>Buy or sell your plugins</h2>
      <p>There are so many, add yours?<br>and be among the pinned!</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../src/lib/scss/colors.scss";
  @import "../../src/lib/scss/variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
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
    margin-bottom: -8px;
    padding: 50px;
    background: linear-gradient(253.27deg, #2B324E 16.67%, rgba(58, 70, 118, 0.9) 47.32%);

    .rows {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 50px 20px;
      margin: 0 auto;
      max-width: 1200px;

      .text {
        h2 {
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          color: $white;
        }

        p {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0;
          color: $white-600;
        }

        .button {
          margin-top: 30px;
        }
      }

      .images {
        display: flex;
        gap: 10px;

        img {
          border-radius: 15px;
          object-fit: cover;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
          transition: all 0.20s ease-in-out;
        }

        img:hover {
          transform: scale(1.02);
        }

        .col1 {
          img {
            width: 190px;
            height: 190px;
          }
        }

        .col2, .col3 {
          display: flex;
          flex-direction: column;
          gap: 10px;

          img.img1 {
            width: 150px;
            height: 150px;
          }

          img.img2 {
            width: 150px;
            height: 150px;
          }
        }

        .col3 {
          img.img1 {
            width: 120px;
            height: 120px;
          }
        }
      }
    }

    @media (max-width: $breakpoint-md) {
      .rows {
        flex-direction: column;
        gap: 20px;

        .text {
          text-align: center;
        }

        .images {
          gap: 5px;

          img {
            border-radius: 10px;
          }

          .col1 {
            img {
              width: 130px;
              height: 130px;
            }
          }

          .col2, .col3 {
            gap: 5px;

            img.img1 {
              width: 70px;
              height: 70px;
            }

            img.img2 {
              width: 70px;
              height: 70px;
            }
          }

          .col3 {
            img.img1 {
              width: 65px;
              height: 65px;
            }
          }
        }
      }
    }
  }

  .products {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: 50px;
    background: linear-gradient(91.69deg, #2E3554 23.05%, #37426E 75.09%);
    
    .rows {
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      padding: 50px 20px;
      margin: 0 auto;
      max-width: 1200px;
    
      .text {
        h2 {
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          color: $white;
        }
    
        p {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0;
          color: $white-600;
        }
      }
    
      .images {
        display: flex;
        gap: 10px;
    
        img {
          object-fit: cover;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
          transition: all 0.20s ease-in-out;
        }
    
        img:hover {
          transform: scale(1.02);
        }
    
        .col1 {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;

          img.img1 {
            width: 150px;
            height: 150px;
          }

          img.img2 {
            width: 110px;
            height: 110px;
          } 
        }
    
        .col2, .col3 {
          display: flex;
          flex-direction: column;
          gap: 10px;
    
          img.img1 {
            width: 110px;
            height: 110px;
          }
    
          img.img2 {
            width: 110px;
            height: 110px;
          }
        }

        .col3 {
          img.img1 {
            width: 95px;
            height: 95px;
          }

          img.img2 {
            width: 95px;
            height: 95px;
          }
        }
      }
    }

    @media (min-width: $breakpoint-md) {
      .show-md {
        display: none;
      }
    }

    @media (max-width: $breakpoint-md) {
      .hidden-md {
        display: none;
      }

      .show-md {
        display: block;
      }

      .rows {
        flex-direction: column;
        gap: 20px;
    
        .text {
          text-align: center;
        }
    
        .images {
          gap: 5px;
    
          .col1 {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 5px;

            img.img1 {
              width: 100px;
              height: 100px;
            }

            img.img2 {
              width: 80px;
              height: 80px;
            } 
          }
    
          .col2, .col3 {
            display: flex;
            flex-direction: column;
            gap: 5px;
    
            img.img1 {
              width: 80px;
              height: 80px;
            }
    
            img.img2 {
              width: 80px;
              height: 80px;
            }
          }

          .col3 {
            img.img1 {
              width: 70px;
              height: 70px;
            }

            img.img2 {
              width: 70px;
              height: 70px;
            }
          }
        }
      }
    }
  }
</style>
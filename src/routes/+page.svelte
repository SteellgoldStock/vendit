<script lang="ts">
  import Button from "$lib/components/elements/button/button.svelte";
  import { SearchBar } from "$lib/components/elements/search-bar";
  import { Separator } from "$lib/components/elements/separator";
  import { getLang, params } from "$lib/utils/lang/lang";
</script>

<svelte:head>
  <title>Vendit ・ Homepage</title>
</svelte:head>

<div class="header">
  <div class="title">
    <h1 class="title">{ getLang().homepage.header_title }</h1>
  </div>
  <div class="subject">
    { getLang().homepage.header_subtitle }
  </div>

  <br>
  
  <SearchBar placeholder={getLang().homepage.header_searchbar_placeholder } />
</div>

<Separator />

<div class="sellers">
  <div class="rows">
    <div class="text">
      <h2>{ getLang().homepage.sellers_title }</h2>
      <p>{ getLang().homepage.sellers_subtitle }</p>
      
      <div class="button">
        <Button buttonInfo={{
          type: "link",
          text: getLang().homepage.sellers_button,
          icon: "fa-solid fa-plus",
          color: "primary",
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
        <img class="img1" src="https://cdn.discordapp.com/avatars/504392983244832780/9ff08250c46bfd775c5b30a73e1a48a8.webp?size=256" height="90px" alt="Gaëtan">
        <img class="img2" src="https://cdn.discordapp.com/avatars/162633729703936001/c68325b9d4509bcd7e4a56a32dd6ff30.png?size=256" height="100px" alt="King">
      </div>
    </div>
  </div>
</div>

<Separator />

<div class="products">
  <div class="rows">
    <div class="show-md text">
      <h2>{ getLang().homepage.plugins_title }</h2>
      <p>{ @html getLang().homepage.plugins_subtitle }</p>
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
      <h2>{ getLang().homepage.plugins_title }</h2>
      <p>{ @html getLang().homepage.plugins_subtitle }</p>
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
    padding: $px30;
    background: $primary;
    color: $white;

    @media (max-width: $breakpoint-md) {
      padding: $px10 $px30;
      text-align: center;
    }

    .title {
      h1 {
        font-size: 3rem;
        font-weight: $font-weight-7;
        margin: 0;
      }

      display: flex;
      align-items: center;
      gap: $px20;
    }
  }

  .sellers {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: $px50;
    background: linear-gradient(253.27deg, #2B324E 16.67%, rgba(58, 70, 118, 0.9) 47.32%);

    .rows {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: $px50 $px20;
      margin: 0 auto;
      max-width: 1200px;

      .text {
        h2 {
          font-size: $font-size-11;
          font-weight: $font-weight-7;
          margin: 0;
          color: $white;
        }

        p {
          font-size: 1.4rem;
          font-weight: $font-weight-3;
          margin: 0;
          color: $white-600;
        }

        .button {
          margin-top: $px30;
        }
      }

      .images {
        display: flex;
        gap: $gap-10;

        img {
          border-radius: ($image-radius + 5);
          object-fit: cover;
          box-shadow: $shadow;
          transition: all 0.20s ease-in-out;
        }

        img:hover {
          transform: scale(1.02);
        }

        .col1 {
          img {
            width: ($px100 + 90);
            height: ($px100 + 90);
          }
        }

        .col2, .col3 {
          display: flex;
          flex-direction: column;
          gap: $gap-10;

          img.img1 {
            width: ($px100 + 50);
            height: ($px100 + 50);
          }

          img.img2 {
            width: 150px;
            height: ($px100 + 50);
          }
        }

        .col3 {
          img.img1 {
            width: ($px100 + 20);
            height: ($px100 + 20);
          }
        }
      }
    }

    @media (max-width: $breakpoint-md) {
      .rows {
        flex-direction: column;
        gap: $gap-20;

        .text {
          text-align: center;
        }

        .images {
          gap: $gap-5;

          img {
            border-radius: $image-radius;
          }

          .col1 {
            img {
              width: ($px100 + 30);
              height: ($px100 + 30);
            }
          }

          .col2, .col3 {
            gap: $gap-5;

            img.img1 {
              width: $px70;
              height: $px70;
            }

            img.img2 {
              width: $px70;
              height: $px70;
            }
          }

          .col3 {
            img.img1 {
              width: ($px60 + 5);
              height: ($px60 + 5);
            }
          }
        }
      }
    }
  }

  .products {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: $px50;
    background: linear-gradient(91.69deg, #2E3554 23.05%, #37426E 75.09%);
    
    .rows {
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      padding: $px50 $px20;
      margin: 0 auto;
      max-width: 1200px;
    
      .text {
        h2 {
          font-size: $font-size-11;
          font-weight: 900;
          margin: 0;
          color: $white;
        }
    
        p {
          font-size: $font-size-3;
          font-weight: $font-weight-3;
          margin: 0;
          color: $white-600;
        }
      }
    
      .images {
        display: flex;
        gap: 10px;
    
        img {
          object-fit: cover;
          box-shadow: $shadow;
          transition: all 0.20s ease-in-out;
        }
    
        img:hover {
          transform: scale(1.02);
        }
    
        .col1 {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: $gap-10;

          img.img1 {
            width: ($px100 + 50);
            height: ($px100 + 50);
          }

          img.img2 {
            width: ($px100 + 10);
            height: ($px100 + 10);
          } 
        }
    
        .col2, .col3 {
          display: flex;
          flex-direction: column;
          gap: $gap-10;
    
          img.img1 {
            width: ($px100 + 10);
            height: ($px100 + 10);
          }
    
          img.img2 {
            width: ($px100 + 10);
            height: ($px100 + 10);
          }
        }

        .col3 {
          img.img1 {
            width: ($px100 - 5);
            height: ($px100 - 5);
          }

          img.img2 {
            width: ($px100 - 5);
            height: ($px100 - 5);
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
        gap: $gap-20;
    
        .text {
          text-align: center;
        }
    
        .images {
          gap: $gap-5;
    
          .col1 {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: $gap-5;

            img.img1 {
              width: $px100;
              height: $px100;
            }

            img.img2 {
              width: $px80;
              height: $px80;
            } 
          }
    
          .col2, .col3 {
            display: flex;
            flex-direction: column;
            gap: $gap-5;
    
            img.img1 {
              width: $px80;
              height: $px80;
            }
    
            img.img2 {
              width: $px80;
              height: $px80;
            }
          }

          .col3 {
            img.img1 {
              width: $px70;
              height: $px70;
            }

            img.img2 {
              width: $px70;
              height: $px70;
            }
          }
        }
      }
    }
  }
</style>
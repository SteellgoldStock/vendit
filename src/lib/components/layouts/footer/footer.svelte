<footer> 
  <div class="text">
    <p>Vendit, a plugin selling service for PocketMine-MP software, buy or come and use plugins or share a creation.</p>
  </div>
  
  <div class="social">
    <div class="logo">
      <img src="/assets/logos/NavbarIcon.png" alt="NavbarIcon">
    </div>
  
    <div class="icons">
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-discord"></i>
    </div>
  </div>
</footer>

<style lang="scss">
    @import "../../../scss/colors.scss";
    @import "../../../scss/variables.scss";

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2D3555;
      color: #fff;
      height: $height-footer;

      .text {
        width: 80%;
        
        p {
          width: 70%;
        }
        margin-bottom: 1rem;
      }

      .social {
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;

          img {
            width: 50px;
          }
        }

        .icons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 200px;
          gap: 10px;
          padding: 20px 0;

          i {
            font-size: 1.5rem;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      footer {
        flex-direction: column;
        padding: 1rem 0;
        height: $height-footer-mb;

        .text {
          width: 100%;

          p {
            width: 90%;
            margin-left: 15px;
            text-align: center;
          }
        }

        .social {
          .logo {
            img {
              width: 40px;
            }
          }

          .icons {
            i {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
</style>
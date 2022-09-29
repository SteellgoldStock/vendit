<script lang="ts">
  let active = false;
</script>

<div class="nav">
  <div class="logo">
    <img src="/assets/logos/NavbarIcon.png" alt="Logo">
  </div>

  <div class="links" class:active={!active}>
    <a href="/">Discorver</a>
    <a href="/">Contact</a>
    <a href="/" class="button">Dashboard</a>
  </div>

  <i class="fa-solid " class:fa-x={active} class:fa-bars={!active} on:click={() => active = !active}></i>
</div>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $background;

    height: 70px;
    padding: 0px 30px;

    i {
      display: none;
    }

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      background: none;
      height: fit-content;
      padding: 0 0;
      position: relative;

      i {
        position: absolute;
        display: block;
        font-size: 30px;

        top: 55px;
        right: 35px;
        z-index: 20;
      }

      .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        background: $background;
        z-index: 10;
      }
    }

    .logo {
      img {
        height: 50px;

        @media (max-width: $breakpoint-md) {
          padding: 40px 0;
          height: 70px;
          border-radius: 40%;
        }
      }
    }

    .links {
      display: flex;
      align-items: center;

      a {
        color: $white;
        text-decoration: none;
        margin: 0 10px;
        font-weight: 500;
        font-size: 15px;

        transition: all 0.1s ease-in-out;
      }

      a.button {
        background: $button;
        padding: 10px 20px;
        border-radius: $button-radius;
        color: $white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      a.button:hover {
        background: $button-hover;
        color: $white;
      }

      a:hover {
        color: $white-500;
      }

      @media (max-width: $breakpoint-md) {
        position: absolute;
        top: 100%;

        flex-direction: column;
        transition-duration: 0.50s;

        background: #333D61;
        width: 100%;

        padding-top: 10px;
        padding: 10px 0;
        gap: 15px;
        height: fit-content;

        &.active {
          top: 0;
        }

        a {
          font-size: 20px;
        }
      }
    }

    i {
      color: $white;
    }
  }
</style>
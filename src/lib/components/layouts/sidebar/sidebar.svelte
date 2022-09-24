<div class="navbar">
  <div class="icon">
    <img src="/assets/logos/NavbarIcon.png" width="40px" height="40px" alt="logo" />
  </div>
</div>

<div class="sidebar">
  <div class="section">
    <a href="/" class="active"><i class="fa-solid fa-user"></i>Account</a>
    <a href="/"><i class="fa-solid fa-wallet"></i>Billing</a>
    <a href="/"><i class="fa-solid fa-gear"></i>Settings</a>
  </div>

  <hr class="hr-text" data-content="STORE">

  <div class="section">
    <a href="/"><i class="fa-solid fa-shop"></i>General</a>
    <a href="/"><i class="fa-solid fa-tags"></i>Items</a>
    <a href="/"><i class="fa-solid fa-chart-simple"></i>Statistics</a>
    <a href="/"><i class="fa-solid fa-bullhorn"></i>Alert</a>
  </div>

  <!-- <div class="bottom">
    <a href="/"><i class="fa-solid fa-sign-out"></i>Logout</a>
  </div> -->
</div>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .hr-text {
    // from https://gist.github.com/scottzirkel/25dd7073cdf976864ad4
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
  &:before {
    content: '';
    background: $white;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: $white;
    padding: 0 .5em;
    line-height: 1.5em;
    color: $white;
    background-color: $primary;
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background: $background;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .sidebar {
    height: 100%;
    width: 15%;
    position: fixed;
    padding: 20px;
    background-color: $primary;

    i {
      margin-right: 5px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .section {
      display: flex;
      flex-direction: column;

      gap: 10px;

      a {
        text-decoration: none;
        color: $white;
        font-size: 15px;

        font-weight: 200;

        padding: 10px;
        border-radius: 10px;
      }
      
      a.active {
        background-color: $util1;
      }

      a:hover {
        background-color: #3E4869;
      }
    }

    // .bottom {
    //   // bottom of sidebar
    //   bottom: 0;
    //   width: 100%;
    //   display: flex;
    //   flex-direction: column;
    //   gap: 10px;      

    //   a {
    //     color: white;
    //     text-decoration: none;
    //     font-size: 15px;
    //     background-color: #3b4467;
    //     padding: 10px;
    //     border-radius: 10px;
    //   }
    // }
  }
</style>
<script>
  import { Navbar } from "../navbar";
</script>

<div class="sidebar">
  <div class="user">
    <a href="/" class="active">
      <i class="fa-solid fa-user"></i>
      Account
    </a>
    <a href="/">
      <i class="fa-solid fa-wallet"></i>
      Billing
    </a>
    <a href="/">
      <i class="fa-solid fa-gear"></i>
      Settings
    </a>
  </div>
</div>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .sidebar {
    display: flex;
    height: 100%;
    position: fixed;
    padding: 20px;
    background-color: $primary;

    .user {
      display: flex;
      flex-direction: column;

      gap: 10px;

      a {
        text-decoration: none;
        color: $white;
        font-size: 1.2rem;

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
  }
</style>
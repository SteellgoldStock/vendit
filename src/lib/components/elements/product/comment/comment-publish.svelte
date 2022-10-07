<script lang="ts">
  import { Button } from '../../button';
  import { getLang, params } from "$lib/utils/lang/lang";

  interface User {
    id: number;
    name: string;
    avatarURL: string;
  }

  export let user: User;

  let rating = 0;
</script>

<div class="comment">
  <div class="infos">
    <div class="header">
      <img src={user.avatarURL} alt="{user.name} Picture">
      <div class="user">
        <h1 class="title">{user.name}</h1>
      </div>
    </div>
    <textarea name="text" cols=40 rows=11></textarea>
    <div class="slider">
      <input type="range" min=0 max=5 step=0.5 bind:value={rating}>
    </div>
  </div>

  <div class="footer">
    <div class="infos">
      <p class="note">
        Your rating: {rating}/5
      </p>
      <p class="text">
        <!-- TODO: Change with DayJS -->
        Today is {new Date().toLocaleDateString()}
      </p>
    </div>
    <div class="actions">
      <Button buttonInfo={{
        text: "Post",
        type: 'button',
        color: 'primary',
        icon: 'fa-solid fa-paper-plane'
      }} />
    </div>
  </div>
</div>

<style lang="scss">
  @import '../../../../scss/colors.scss';
  @import '../../../../scss/variables.scss';

  .comment {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: $tertiary;
    color: $white;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

    .infos {
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
        }

        .user {
          display: flex;
          flex-direction: column;
          margin-left: 1rem;

          .title {
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
      }

      textarea {
        width: 100%;
        border: none;
        background-color: $secondary;
        color: $white;
        resize: none;
        &:focus {
          outline: none;
        }
      }

      .slider {
        width: 100%;

        input[type=range] {
          -webkit-appearance: none;
          width: 100%;
          height: 0.5rem;
          border-radius: 0.5rem;
          background: $secondary;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;

          // edit the slider's thumb appearance to star
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: white;
            cursor: pointer;
          }
        }
      }
    }

    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;

      .infos {
        display: flex;
        flex-direction: column;

        .note {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .text {
          font-size: 0.8rem;
          font-weight: 400;
          margin-top: -10px;
        }
      }

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
      }
    }
  }
</style>
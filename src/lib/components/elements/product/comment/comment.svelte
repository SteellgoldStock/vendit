<script lang="ts">
  import { Button } from '../../button';

  interface Comment {
    name: string;
    text: string;
    rating: number;
    avatarURL: string;
    date: string;
  }

  export let comment: Comment;
</script>

<div class="comment">
  <div class="infos">
    <div class="header">
      <img src={comment.avatarURL} alt="{comment.name} Avatar">
      <div class="user">
        <h1 class="title">{comment.name}</h1>
      </div>
    </div>
    <p class="description">{comment.text}</p>
  </div>

  <div class="footer">
    <div class="infos">
      <p class="note">Note de l'acheteur: <strong>{comment.rating}/5</strong></p>
      <p class="text">Le {comment.date}</p>
    </div>
    <div class="actions">
      <Button buttonInfo={{
        text: 'Signaler',
        type: 'button',
        color: 'red',
        icon: 'fa-solid fa-exclamation-circle'
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
      margin-left: 1rem;

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
    }
  }
</style>
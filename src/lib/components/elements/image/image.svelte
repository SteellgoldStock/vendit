<script lang="ts">
  export let alt: string = "Image";
  export let src: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/404_File_not_found.png/220px-404_File_not_found.png";
</script>

<div class="image">
  <img src={src} alt={alt} />
</div>

<style lang="scss">
  @import "../../../../lib/scss/colors.scss";
  @import "../../../../lib/scss/variables.scss";

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $white;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
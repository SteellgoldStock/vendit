<script lang="ts">
  import { Stars } from "$lib/components/elements/stars";
  import Tag from "$lib/components/elements/tag/tag.svelte";
  import Title from "$lib/components/layouts/typography/title/title.svelte";
</script>

<div class="title">
  <Title weight={900}>VENDIT</Title>
  <Tag text="DARK" type="dark" />
</div>

<Stars note={2.78} showNote={true} />
<br>
<Stars note={5} />

<div class="tags">
  <Tag text="SPECIAL" type="special" />
  <Tag text="LIGHT" type="light" />
  <Tag text="DANGER" type="danger" />
  <Tag text="SUCCESS" type="success" />
  <Tag text="WARNING" type="warning" />
  <Tag text="INFO" type="info" />
</div>

<Title>
  Hey les zamisss (1xl)
</Title>

<Title size="2">
  Hey les zamisss (2xl)
</Title>

<Title size="3">
  Hey les zamisss (3xl)
</Title>

<Title size="4">
  Hey les zamisss (4xl)
</Title>

<Title size="5">
  Hey les zamisss (5xl)
</Title>

<Title size="6">
  Hey les zamisss (6xl)
</Title>

<hr>

<Title subtitle="Sous-titre">
  Hey les zamisss (1xl)
</Title>

<Title subtitle="Sous-titre" size="2">
  Hey les zamisss (2xl)
</Title>

<Title subtitle="Sous-titre" size="3">
  Hey les zamisss (3xl)
</Title>

<Title subtitle="Sous-titre" size="4">
  Hey les zamisss (4xl)
</Title>

<Title subtitle="Sous-titre" size="5">
  Hey les zamisss (5xl)
</Title>

<Title subtitle="Sous-titre" size="6">
  Hey les zamisss (6xl)
</Title>

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  .title {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-weight: 900;
    }
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
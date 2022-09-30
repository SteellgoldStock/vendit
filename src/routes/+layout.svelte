<ProgressBar />

<script lang="ts">
  import { Navbar } from "$lib/components/layouts/navbar";
  import { ProgressBar } from "$lib/components/elements/progress-bar";
  import { Footer } from "$lib/components/layouts/footer";
</script>

<Navbar />

<slot></slot>

<Footer />
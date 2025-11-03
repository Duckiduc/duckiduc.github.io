<script lang="ts">
  import Header from "../components/Header.svelte";
  import Menu from "../components/Menu.svelte";
  import RoundButton from "../components/buyMeACoffee/RoundButton.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
</svelte:head>

<div>
  <div class="container-fluid">
    <Header />
    <Menu />
  </div>

  {@render children?.()}

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Nguyen Duc-Thomas {new Date().getFullYear()}</p>
      Images freely provided by <a href="https://unsplash.com">Unsplash</a>. The logos used are the
      property of their respective owners.
    </div>
  </footer>
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up"></i></a>

  <RoundButton />
</div>

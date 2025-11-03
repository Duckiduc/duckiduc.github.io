<script lang="ts">
  import Menu from "../components/Menu.svelte";
  import RoundButton from "../components/buyMeACoffee/RoundButton.svelte";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

  let menuOpen = $state(false);
  let headerClass = $derived(menuOpen ? "menu-is-open" : "");
  let menuIconClass = $derived(menuOpen ? "is-clicked" : "");

  function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  function closeMenu() {
    menuOpen = false;
    document.body.classList.remove("overflow-hidden");
  }
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
  <link href="/styles/menu.css" rel="stylesheet" />
</svelte:head>

<div>
  <div class="container-fluid">
    <div class="box-header {headerClass}">
      <div class="box-logo">
        <a href="/"><img src="/img/logo.png" width="70" alt="Logo" /></a>
      </div>
      <a
        class="box-primary-nav-trigger"
        href="#0"
        onclick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <span class="box-menu-text">Menu</span><span class="box-menu-icon {menuIconClass}"></span>
      </a>
    </div>
    <Menu bind:isOpen={menuOpen} onClose={closeMenu} />
  </div>

  {@render children?.()}

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Nguyen Duc-Thomas {new Date().getFullYear()}</p>
      Images freely provided by<a href="https://unsplash.com">Unsplash</a>. The logos used are the
      property of their respective owners.
    </div>
  </footer>
  <a href="#0" class="cd-top" aria-label="Back to top"><i class="ion-android-arrow-up"></i></a>

  <RoundButton />
</div>

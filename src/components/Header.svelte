<script>
  import logo from "../assets/img/logo.png";
</script>

<svelte:head>
  <script src="/scripts/menu.js"></script>
  <link href="/styles/menu.css" rel="stylesheet" />
</svelte:head>

<header class="box-header">
  <div class="box-logo">
    <a href="index.html"><img src={logo} width="100" alt="Logo" /></a>
  </div>
  <a class="box-primary-nav-trigger" href="#0">
    <span class="box-menu-text">Menu</span><span class="box-menu-icon" />
  </a>
</header>

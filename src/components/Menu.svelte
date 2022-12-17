<script>
  import RectangleButton from "./buyMeACoffee/RectangleButton.svelte";
  import SponsorButton from "./github/SponsorButton.svelte";
</script>

<svelte:head>
  <script src="/scripts/menu.js"></script>
  <link href="/styles/menu.css" rel="stylesheet" />
</svelte:head>

<nav>
  <ul class="box-primary-nav">
    <li class="box-label">What - When - Where - Who</li>
    <li class="nav-trigger">
      <a href="/">Home</a>
    </li>
    <li class="nav-trigger"><a data-sveltekit-reload href="projects">Portfolio</a></li>
    <li class="nav-trigger"><a href="about">About me</a></li>
    <li class="nav-trigger"><a href="contact">Contact me</a></li>
    <li class="nav-trigger"><a href="tools">Tools / Gear / Softwares I use</a></li>
    <li>My services are currently unavailable.</li>
    <li class="box-label">Keep up with my work</li>
    <li class="box-social">
      <a href="https://github.com/Duckiduc"><i class="ion-social-github" /></a>
    </li>
    <li class="box-social">
      <a href="https://linkedin.com/in/duc-thomas-nguyen"><i class="ion-social-linkedin" /></a>
    </li>
    <RectangleButton />
    <SponsorButton />
  </ul>
</nav>

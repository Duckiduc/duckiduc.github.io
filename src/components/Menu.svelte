<script>
  import RectangleButton from "./buyMeACoffee/RectangleButton.svelte";
</script>

<svelte:head>
  <script src="/scripts/menu.js"></script>
  <link href="/styles/menu.css" rel="stylesheet" />
</svelte:head>

<nav>
  <ul class="box-primary-nav">
    <li class="box-label">What - When - Where - Who</li>
    <li>
      <a href="index.html">Home</a><i class="ion-ios-circle-filled color" />
    </li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="about.html">About me</a></li>
    <li><a href="contact.html">Contact me</a></li>
    <li><a href="tools.html">Tools / Gear / Softwares I use</a></li>
    <li>My services are currently unavailable.</li>
    <li class="box-label">Keep up with my work</li>
    <li class="box-social">
      <a href="https://github.com/Duckiduc"><i class="ion-social-github" /></a>
    </li>
    <li class="box-social">
      <a href="https://linkedin.com/in/duc-thomas-nguyen"
        ><i class="ion-social-linkedin" /></a
      >
    </li>
    <RectangleButton />
  </ul>
</nav>

<script lang="ts">
  import RectangleButton from "./buyMeACoffee/RectangleButton.svelte";
  import SponsorButton from "./github/SponsorButton.svelte";

  interface Props {
    isOpen?: boolean;
    onClose?: () => void;
  }

  let { isOpen = $bindable(false), onClose }: Props = $props();

  function handleNavItemClick() {
    onClose?.();
  }
</script>

<nav class="box-primary-nav {isOpen ? 'is-visible' : ''}">
  <ul>
    <li class="box-label">What - When - Where - Who</li>
    <li class="nav-trigger">
      <a href="/" onclick={handleNavItemClick}>Home</a>
    </li>
    <li class="nav-trigger">
      <a data-sveltekit-reload href="projects" onclick={handleNavItemClick}>Portfolio</a>
    </li>
    <li class="nav-trigger"><a href="/about" onclick={handleNavItemClick}>About me</a></li>
    <li class="nav-trigger"><a href="/contact" onclick={handleNavItemClick}>Contact me</a></li>
    <li class="nav-trigger">
      <a href="/tools" onclick={handleNavItemClick}>Tools / Gear / Softwares I use</a>
    </li>
    <li>My services are currently unavailable.</li>
    <li class="box-label">Keep up with my work</li>
    <li class="box-social">
      <a href="https://github.com/Duckiduc" aria-label="GitHub"><i class="ion-social-github"></i></a
      >
    </li>
    <li class="box-social">
      <a href="https://linkedin.com/in/duc-thomas-nguyen" aria-label="LinkedIn"
        ><i class="ion-social-linkedin"></i></a
      >
    </li>
    <RectangleButton />
    <SponsorButton />
  </ul>
</nav>

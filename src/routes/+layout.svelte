<script>
  import Headline from "../components/HeadlineText.svelte";
  import Loader from "../components/Loader.svelte";
  import Header from "../components/Header.svelte";
  import Menu from "../components/Menu.svelte";
  import Mouse from "../components/Mouse.svelte";
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
  <script src="/scripts/custom.js"></script>
</svelte:head>


<div>
  <div class="container-fluid">
    <Header />
    <Menu />
  </div>
  
  <slot></slot>

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Nguyen Duc-Thomas {new Date().getFullYear()}</p>
      Images freely provided by <a href="https://unsplash.com">Unsplash</a>. The
      logos used are the property of their respective owners.
    </div>
  </footer>
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up" /></a>

  <script
    data-name="BMC-Widget"
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    data-id="ducki"
    data-description="Support me on Buy me a coffee!"
    data-message="Thanks for passing by! You can support me with a coffee ☕"
    data-color="#FF813F"
    data-position="left"
    data-x_margin="18"
    data-y_margin="18"></script>
</div>

<!-- <script>
  import projects from "../assets/data/projects.json"
  import Headline from "../components/HeadlineText.svelte";
  import Loader from "../components/Loader.svelte";
  import Header from "../components/Header.svelte";
  import Menu from "../components/Menu.svelte";
  import Mouse from "../components/Mouse.svelte";
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
</svelte:head>


<div>
  <Loader />
  <div class="container-fluid">
    <Header />
    <Menu />
    <section class="box-intro">
      <div class="table-cell">
        <Headline />
        <h5>ladies & gentlemen, welcome to my portfolio.</h5>
      </div>
      <Mouse />
    </section>
  </div>
  
  <slot></slot>

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Nguyen Duc-Thomas {new Date().getFullYear()}</p>
      Images freely provided by <a href="https://unsplash.com">Unsplash</a>. The
      logos used are the property of their respective owners.
    </div>
  </footer>
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up" /></a>

  <script
    data-name="BMC-Widget"
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    data-id="ducki"
    data-description="Support me on Buy me a coffee!"
    data-message="Thanks for passing by! You can support me with a coffee ☕"
    data-color="#FF813F"
    data-position="left"
    data-x_margin="18"
    data-y_margin="18"></script>
</div> -->
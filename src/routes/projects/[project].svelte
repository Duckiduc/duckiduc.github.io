<script>
  import { page } from '$app/stores'
  import { each } from 'svelte/internal';
  import projects from "../../assets/data/projects.json"
  const project = projects.filter((p) => p.route === $page.params.project)[0];
</script>

  <!-- <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ducki's Portfolio - Mackee Trading App</title>
    <link rel="icon" href="../img/fav.jpg" type="image/x-icon" />
    <link href="../css/bootstrap.min.css" rel="stylesheet" />
    <link href="../ionicons/css/ionicons.min.css" rel="stylesheet" />
    <link href="../css/style.css" rel="stylesheet" />
    <script src="../js/modernizr.js"></script>
  </head> -->

  <body>
    <div class="top-bar">
      <h1>{project.title}</h1>
      <p>
        <a href="/">Home</a> /
        <a href="projects">Portfolio</a> / {project.title}
      </p>
    </div>
    <div class="container main-container">
      <div class="col-md-12">
        <img
          src={project.image}
          alt=""
          class="img-responsive"
        />
        <div class="h-30" />
      </div>
      <div class="col-md-12">
        <h3 class="text-uppercase">{project.title}</h3>
        <h5>{project.phrase}</h5>
        <div class="h-30" />
      </div>
      <div class="col-md-9">
        <p>{project.description}</p>
      </div>
      <div class="col-md-3">
        <ul class="cat-ul">
          {#each project.tags as tag}
            <li><i class="ion-ios-circle-filled" />{tag.name}</li>
          {/each}
        </ul>
        <div class="h-10" />
        <!-- TODO COMPONENT -->
        <h4>Share</h4>
        <ul class="social-ul">
          <li class="box-social">
            <a href="#0"><i class="ion-social-facebook" /></a>
          </li>
          <li class="box-social">
            <a href="#0"><i class="ion-social-instagram-outline" /></a>
          </li>
          <li class="box-social">
            <a href="#0"><i class="ion-social-twitter" /></a>
          </li>
          <li class="box-social">
            <a href="#0"><i class="ion-social-dribbble" /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container secondary-container clearfix no-padding portfolio_container">
      {#each project.gallery as image}
        <div class={`col-md-${image.size}`}>
          <img src={image.url} class="img-responsive" alt="" />
        </div>  
      {/each}
    </div>
    <a href="#0" class="cd-top"><i class="ion-android-arrow-up" /></a>
    <!-- <script src="../js/jquery-2.1.1.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/menu.js"></script>
    <script src="../js/animated-headline.js"></script>
    <script src="../js/isotope.pkgd.min.js"></script>
    <script src="../js/custom.js"></script> -->
  </body>


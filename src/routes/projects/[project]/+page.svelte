<script lang="ts">
  import { page } from "$app/stores";
  import { getProjects } from "../../../types/projectType";

  const projects = getProjects();
  const project = projects.find(p => p.route === $page.params.project)!;
</script>

<div>
  <div class="top-bar">
    <h1>{project.title}</h1>
    <p>
      <a href="/">Home</a> /
      <a href="/projects">Portfolio</a> / {project.title}
    </p>
  </div>
  <div class="container main-container">
    <div class="col-md-12">
      <img src={project.image} alt="" class="img-responsive" />
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
      <ul class="cat-ul">
        {#if project.links}
          {#each project.links as link}
            <li>• <a href={link.link} target="_blank" rel="noreferrer">{link.name}</a></li>
          {/each}
        {/if}
      </ul>
      <div class="h-10" />
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
    {#if project.gallery}
      {#each project.gallery as image}
        <div class={`col-md-${image.size} gallery-img-container`}>
          <img src={image.url} class="img-responsive gallery-img" alt="" />
        </div>
      {/each}
    {/if}
  </div>
  <div class="secondary-container articles-container">
    {#if project.articles}
      <p class="articles-container-title">QUOTES</p>
    {/if}
    {#if project.articles}
      {#each project.articles as article}
        <div class="article">
          <p class="article-quote">“{article.quote}„</p>
          <p class="article-author">{article.author}</p>
          <a href={article.link} target="_blank" rel="noreferrer">Source: {article.title}</a>
        </div>
        <hr />
      {/each}
    {/if}
  </div>
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up" /></a>
</div>

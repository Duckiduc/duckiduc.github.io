<svelte:head>
  <script src="/scripts/custom.js"></script>
</svelte:head>

<script lang="ts">
  // @ts-nocheck
  import projects from "/src/data/projects.json";

  const getFilters = (project: {
    title?: string;
    phrase?: string;
    thumbnail?: string;
    image?: string;
    gallery?: { url: string }[];
    description?: string;
    tags: any;
  }) => {
    let filters: string[] = [];
    project.tags.forEach((tag: { name: string }) => {
      filters.push(tag.name);
    });
    return filters.join(" ");
  };
</script>

<div>
  <div class="top-bar">
    <h1>Portfolio</h1>
    <p><a href="/">Home</a> / Portfolio</p>
  </div>
  <div class="main-container portfolio-inner clearfix">
    <div class="portfolio-div">
      <div class="portfolio">
        <div class="categories-grid wow fadeInLeft">
          <nav class="categories text-center">
            <ul class="portfolio_filter">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" class="active" data-filter="*"
                >All</a
                >
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Code">Code</a>
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Webdesign"
                >Webdesign</a
                >
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Mobile-app"
                >Mobile App</a
                >
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Website">Website</a>
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Design">Design</a>
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li>
                <a href="javascript:void(0);" data-filter=".Music">Music</a>
              </li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <li><a href="javascript:void(0);" data-filter=".Ads">Ads</a></li>
            </ul>
          </nav>
        </div>
        <div class="no-padding portfolio_container clearfix">
          {#each projects as project}
          <div class={`col-md-4 col-sm-6 ${getFilters(project)}`}>
            <a href={`projects/${project.route}`} class="portfolio_item">
              <img
              loading="lazy"
              src={project.thumbnail}
              alt=""
              class="img-responsive"
              />
              <div class="portfolio_item_hover">
                <div class="portfolio-border clearfix">
                  <div class="item_info">
                    <span>{project.title}</span>
                    <em>
                      {#each project.tags as tag}
                      {`${tag.name} `}
                      {/each}
                    </em>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

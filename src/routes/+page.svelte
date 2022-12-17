<script>
// @ts-nocheck
  import projects from "/src/data/projects.json"
  import Headline from "../components/HeadlineText.svelte";
  import Mouse from "../components/Mouse.svelte";
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
</svelte:head>

<div>
  <section class="box-intro">
    <div class="table-cell">
      <Headline />
      <h5>ladies & gentlemen, welcome to my portfolio.</h5>
    </div>
    <Mouse />
  </section>
  <div class="portfolio-div">
    <div class="portfolio">
      <div class="no-padding portfolio_container">
        {#each projects as project}
          <div class="col-md-3 col-sm-6">
            <a href={`projects/${project.route}`} class="portfolio_item">
              <img loading="lazy" src={project.thumbnail} alt="" class="img-responsive" />
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

<style>
  .box-intro {
    text-align: center;
    display: table;
    height: 100vh;
    width: 100%;
  }
  .box-intro .table-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .box-intro h5 {
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #999;
    line-height: 1.7;
  }
  .portfolio-div {
    width: 100vw;
  }
  .portfolio_container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
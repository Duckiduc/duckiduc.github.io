<script>
  import MediaQuery from "../lib/MediaQuery.svelte";
</script>

<div class="container">
  <MediaQuery query="(max-width: 420px)" let:matches>
    {#if matches}
      <div class="message smallFontSize">
        <p>code<span class="point">.</span></p>
        <p>webdesign<span class="point">.</span></p>
        <p>3D<span class="point">.</span></p>
      </div>
    {/if}
  </MediaQuery>

  <MediaQuery query="(min-width: 421px) and (max-width: 520px)" let:matches>
    {#if matches}
      <div class="message mediumFontSize">
        <p>code<span class="point">.</span></p>
        <p>webdesign<span class="point">.</span></p>
        <p>3D<span class="point">.</span></p>
      </div>
    {/if}
  </MediaQuery>

  <MediaQuery query="(min-width:521px) and (max-width: 670px)" let:matches>
    {#if matches}
      <div class="message largeFontSize">
        <p>code<span class="point">.</span></p>
        <p>webdesign<span class="point">.</span></p>
        <p>3D<span class="point">.</span></p>
      </div>
    {/if}
  </MediaQuery>

  <MediaQuery query="(min-width: 671px)" let:matches>
    {#if matches}
      <div class="message default">
        <p>code<span class="point">.</span></p>
        <p>webdesign<span class="point">.</span></p>
        <p>3D<span class="point">.</span></p>
      </div>
    {/if}
  </MediaQuery>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .point {
    color: #ff813f;
  }

  .smallFontSize {
    font-size: 50px;
  }

  .mediumFontSize {
    font-size: 80px;
  }

  .largeFontSize {
    font-size: 100px;
  }

  .default {
    font-size: 130px;
  }

  .container {
    color: #333;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 130px;
  }

  .message {
    color: #333;
    display: block;
    font-weight: 900;
    overflow: hidden;
    position: absolute;
    animation: openclose 12s ease-in-out infinite;
    width: 100%;
  }

  @keyframes openclose {
    0% {
      top: -50px;
      width: 0;
    }
    5% {
      width: 0;
    }
    15% {
      width: 70%;
    }
    30% {
      top: -50px;
      width: 70%;
    }
    33% {
      top: -50px;
      width: 0;
    }
    35% {
      top: -50px;
      width: 0;
    }
    38% {
      top: -285px;
      width: 0;
    }
    48% {
      top: -285px;
      width: 70%;
    }
    62% {
      top: -285px;
      width: 70%;
    }
    66% {
      top: -285px;
      width: 0;
    }
    71% {
      top: -520px;
      width: 0;
    }
    86% {
      top: -520px;
      width: 70%;
    }
    95% {
      top: -520px;
      width: 70%;
    }
    98% {
      top: -520px;
      width: 0;
    }
    100% {
      top: 0;
      width: 0;
    }
  }
</style>

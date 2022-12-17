<svelte:head>
  <script src="/scripts/custom.js"></script>
</svelte:head>

<div id="preloader">
  <div class="pre-container">
    <div class="spinner">
      <div class="double-bounce1" />
      <div class="double-bounce2" />
    </div>
  </div>
</div>

<style>
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    z-index: 1000;
  }

  .pre-container {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }

  .spinner {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 100px auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ff813f;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: bounce 2s infinite ease-in-out;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
</style>

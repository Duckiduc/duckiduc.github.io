<div class="mouse">
  <div class="scroll" />
</div>

<style>
  .mouse {
    position: absolute;
    width: 22px;
    height: 42px;
    bottom: 40px;
    left: 50%;
    margin-left: -12px;
    border-radius: 15px;
    border: 2px solid #888;
    -webkit-animation: intro 1s;
    animation: intro 1s;
  }

  .scroll {
    display: block;
    width: 3px;
    height: 3px;
    margin: 6px auto;
    border-radius: 4px;
    background: #888;
    -webkit-animation: finger 2s infinite;
    animation: finger 2s infinite;
  }

  @-webkit-keyframes intro {
    0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes intro {
    0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes finger {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @keyframes finger {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
</style>

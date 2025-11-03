<script lang="ts">
  import { run } from 'svelte/legacy';

  /* eslint-disable @typescript-eslint/no-explicit-any */
  import { onMount } from "svelte";

  interface Props {
    query: any;
    children?: import('svelte').Snippet<[any]>;
  }

  let { query, children }: Props = $props();

  let mql: any;
  let mqlListener: any;
  let wasMounted = $state(false);
  let matches = $state(false);

  onMount(() => {
    wasMounted = true;
    return () => {
      removeActiveListener();
    };
  });


  function addNewListener(query: any) {
    mql = window.matchMedia(query);
    mqlListener = (v: { matches: boolean }) => (matches = v.matches);
    mql.addListener(mqlListener);
    matches = mql.matches;
  }

  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener);
    }
  }
  run(() => {
    if (wasMounted) {
      removeActiveListener();
      addNewListener(query);
    }
  });
</script>

{@render children?.({ matches, })}

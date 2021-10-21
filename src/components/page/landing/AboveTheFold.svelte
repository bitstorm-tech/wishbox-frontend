<script lang="ts">
  import Button from '../../ui/Button.svelte';
  import LandingPageContainer from './LandingPageContainer.svelte';
  export let position: number;
</script>

<LandingPageContainer {position}>
  <div class="flex">
    <div class="flex flex-col">
      <h1 class="p-10 text-center text-accent">
        <b>Get the gifts you <i>really</i> want</b>
      </h1>
      <h2 class="p-10 text-center text-accent">
        Share and organize all your wishes and gift ideas with your family, friends or community in one central place.
      </h2>
      <Button>Create your first Wishbox - it is 100% free</Button>
    </div>
  </div>
</LandingPageContainer>

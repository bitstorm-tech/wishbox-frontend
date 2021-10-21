<script lang="ts">
  import FeatureItem from './FeatureItem.svelte';
  import LandingPageContainer from './LandingPageContainer.svelte';
  export let position: number;
</script>

<LandingPageContainer {position}>
  <div class="flex flex-col md:flex-row items-center">
    <FeatureItem text="Feature 1" />
    <FeatureItem text="Feature 2" />
    <FeatureItem text="Feature 3" />
  </div>
</LandingPageContainer>

<script lang="ts">
  import Button from '../ui/Button.svelte';
  export let signedIn = false;
</script>

{#if signedIn}
  <div class="mx-2">
    <Button href="/">Sign out</Button>
  </div>
{:else}
  <div class="mx-2">
    <Button href="/auth/signin">Sign in / Sing up</Button>
  </div>
{/if}

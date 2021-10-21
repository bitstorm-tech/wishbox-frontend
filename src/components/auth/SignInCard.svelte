<script lang="ts">
  import Card from '../ui/Card.svelte';
  import Button from '../ui/Button.svelte';
  import SignInForm from './SignInForm.svelte';
  import SignUpForm from './SignUpForm.svelte';

  let signIn = true;
  $: switchText = signIn ? 'Switch to sign up' : 'Switch to sign in';
  $: header = signIn ? 'Sign in' : 'Sign up';
</script>

<Card {header}>
  {#if signIn}
    <SignInForm />
  {:else}
    <SignUpForm />
  {/if}
  <div slot="buttons-left">
    <Button border={false} on:click={() => (signIn = !signIn)}>{switchText}</Button>
  </div>
  <div slot="buttons-right">
    <Button>{header}</Button>
  </div>
</Card>

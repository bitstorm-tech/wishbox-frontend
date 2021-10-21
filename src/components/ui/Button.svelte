<script lang="ts">
  export let disabled = false;
  export let border = true;
  export let href = null;

  const borderClasses = border ? 'border-primary border hover:text-accent' : 'hover:text-accent';
</script>

<a {href}>
  <button
    on:click
    {disabled}
    class={`rounded-2xl bg-primary text-white w-max p-3 bg-opacity-100 focus:outline-none hover-transition ${borderClasses}`}
    class:cursor-default={disabled}
    class:cursor-pointer={!disabled}
  >
    <slot />
  </button>
</a>

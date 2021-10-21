<script lang="ts">
  export let position: number;
  const background = position % 2 !== 0 ? 'bg-white' : 'bg-gray-100';
</script>

<div class={`px-32 my-10 py-10 ${background}`}>
  <slot />
</div>

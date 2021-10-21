<script lang="ts">
  export let header = null;
</script>

<div class="shadow-xl bg-darker">
  {#if header}
    <div class="bg-darkest p-3">
      <p class="text-xl font-semibold text-accent">{header}</p>
    </div>
  {/if}
  <div class="p-3"><slot /></div>
  <!-- <div class="pt-4 w-full flex flex-row-reverse">
    <slot name="buttons" />
  </div> -->
  <div class="flex flex-row justify-between items-center p-3 bg-darkest">
    <div class="space-x-2"><slot name="buttons-left" /></div>
    <div class="space-x-2"><slot name="buttons-mid" /></div>
    <div class="space-x-2"><slot name="buttons-right" /></div>
  </div>
</div>

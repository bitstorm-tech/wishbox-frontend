<script lang="ts">
  import Input from '../ui/Input.svelte';
  import Checkbox from '../ui/Checkbox.svelte';
</script>

<div class="flex space-x-4">
  <Input id="firstname" label="First Name" />
  <Input id="lastname" label="Last Name" />
</div>
<Input id="email" label="E-Mail" />
<Input id="password" label="Password" type="password" />
<Checkbox id="coach" label="Sign up as coach" />

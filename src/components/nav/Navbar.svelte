<script lang="ts">
  import type NavbarItemType from './NavbarItem.type';
  import CloseCross from '../ui/CloseCross.svelte';
  import HamburgerSymbol from '../ui/HamburgerSymbol.svelte';
  import DesktopMenu from './DesktopMenu.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import NavbarLogo from './NavbarLogo.svelte';

  export let navbarItems: NavbarItemType[] = [];
  let isMobileMenuVisible = false;
  let signedIn = false;

  function toggleMobileMenu() {
    isMobileMenuVisible = !isMobileMenuVisible;
  }

  function closeMobileMenu() {
    isMobileMenuVisible = false;
  }
</script>

<nav class="flex flex-col sm:flex-row bg-darkest justify-between sm:h-14 p-2 top-0 mx-32">
  <div class="flex flex-row justify-between items-center">
    <NavbarLogo on:click={closeMobileMenu} />
    <div class="sm:hidden" on:click={toggleMobileMenu}>
      {#if isMobileMenuVisible}
        <CloseCross />
      {:else}
        <HamburgerSymbol />
      {/if}
    </div>
  </div>
  <DesktopMenu {signedIn} {navbarItems} />
  {#if isMobileMenuVisible}
    <MobileMenu {signedIn} {navbarItems} on:click={closeMobileMenu} />
  {/if}
</nav>

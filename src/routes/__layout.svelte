<script lang="ts">
  import '../tailwind.css';
  import Navbar from '../components/nav/Navbar.svelte';
  import Footer from '../components/nav/Footer.svelte';
  import type NavbarItemType from '../components/nav/NavbarItem.type';

  const navbarItems: NavbarItemType[] = [];
</script>

<Navbar {navbarItems} />
<hr />
<slot />
<Footer />

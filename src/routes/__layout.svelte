<script>
    import "../app.css";
    import NavBar from '../lib/components/nav.svelte';
    import Footer from '../lib/components/footer.svelte';
</script>

<main class="flex flex-col">
    <NavBar></NavBar>
    <slot></slot>
    <Footer></Footer>
</main>
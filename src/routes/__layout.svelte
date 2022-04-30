<script lang="ts">
    import "../app.css";
    import 'agnostic-svelte/css/common.min.css';

    import NavBar from '../lib/components/nav.svelte';
    import Footer from '../lib/components/footer.svelte';
</script>

<NavBar></NavBar>
<main class="flex flex-col w-max max-w-screen-md mx-auto m-0">
    <slot></slot>
</main>
<Footer></Footer>
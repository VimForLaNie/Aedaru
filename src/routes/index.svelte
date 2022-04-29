<script>
    import { ls_amount } from '../stores/localStorage'
    let add = 0;

    const Add = () => {
        $ls_amount = `${parseInt($ls_amount) + add}`;
        add = 0;
    }
</script>

<h1>{$ls_amount}</h1>

<input type="number" placeholder="add" bind:value={add} class="w-64 mx-auto bg-slate-300 p-2 rounded-lg m-2">
<button on:click={Add} class=" bg-blue-400 w-32 p-2 mx-auto m-2 rounded transition-all hover:bg-blue-200 active:bg-white">Add</button>

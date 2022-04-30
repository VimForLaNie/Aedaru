<script lang="ts">
	import type { transaction, user, wallet } from '../data';
	import moment from 'moment-timezone';

	import { ls } from '../stores/localStorage';

	let user: user = JSON.parse($ls);
	let currIndex = 0;
	let add = 0;
	let newName = '';

	const Add = () => {
		let transaction: transaction = {
			src: 'thin air',
			amount: add,
			time: moment().unix()
		};

		user.wallets.total += add;
		user.wallets.list[currIndex].amount += add;
		user.wallets.list[currIndex].transactions = [
			...user.wallets.list[currIndex].transactions,
			transaction
		];
		$ls = JSON.stringify(user);
		add = 0;
	};

	const newWallet = () => {
		let wallet: wallet = {
			id: Math.random().toString(36).slice(2, 9),
			displayName: newName,
			transactions: [],
			amount: 0
		};
		user.wallets.list = [...user.wallets.list, wallet];
		$ls = JSON.stringify(user);
		newName = '';
	};
</script>

<h1 data-testid="displayAmount">{user.wallets.total}</h1>
<h1 data-testid="displayAmount">{user.wallets.list[currIndex].amount}</h1>

<select bind:value={currIndex}>
	{#each user.wallets.list as wallet, i}
		<option value={i}>{wallet.displayName}</option>
	{/each}
</select>

<input
	id="addAmount"
	type="number"
	placeholder="add"
	bind:value={add}
	class="w-64 mx-auto bg-slate-300 p-2 rounded-lg m-2"
/>
<button
	id="addButton"
	on:click={Add}
	class=" bg-blue-400 w-32 p-2 mx-auto m-2 rounded transition-all hover:bg-blue-200 active:bg-white"
	>Add</button
>

<input
	id="newWalletName"
	type="text"
	placeholder="wallet name"
	bind:value={newName}
	class="w-64 mx-auto bg-slate-300 p-2 rounded-lg m-2"
/>
<button
	id="newWalletButton"
	on:click={newWallet}
	class=" bg-blue-400 w-32 p-2 mx-auto m-2 rounded transition-all hover:bg-blue-200 active:bg-white"
	>Add</button
>

<!-- <p>{JSON.stringify(user.wallets.list[currIndex].transactions[0])}</p> -->

{#each user.wallets.list[currIndex].transactions as e, i}
	<div class=" w-64 bg-blue-400 hover:bg-blue-200 transition-all p-2 m-2 rounded mx-auto">
		<p>{e.amount}</p>
		<p>{moment.unix(e.time).tz(`${Intl.DateTimeFormat().resolvedOptions().timeZone}`).format()}</p>
		<p>{e.src || e.dest}</p>
	</div>
{/each}

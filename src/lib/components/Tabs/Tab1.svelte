<script lang="ts">
	import moment from 'moment-timezone';
	import { ls } from '../../../stores/localStorage';
	import { currIndex } from '../../../stores/app';
	import type { transaction, user, wallet } from '../../../data';
	import { Button } from 'agnostic-svelte';

	export let tabindex = 0;
	let add = 0;
	let user: user = JSON.parse($ls);
	let index = $currIndex;

	currIndex.subscribe((x) => (index = x));

	const Add = () => {
		console.log(index);
		let transaction: transaction = {
			src: 'thin air',
			amount: add,
			time: moment().unix()
		};

		user.wallets.total += add;
		user.wallets.list[index].amount += add;
		user.wallets.list[index].transactions = [...user.wallets.list[index].transactions, transaction];
		ls.update((x) => JSON.stringify(user));
		add = 0;
	};
</script>

<div id="panel-1" class="tab-panel" role="tabpanel" {tabindex}>
	<input
		id="addAmount"
		type="number"
		placeholder="add"
		bind:value={add}
		class="w-64 mx-auto bg-slate-300 p-2 rounded-lg m-2"
	/>
	<Button on:click={Add} mode="primary" isRounded>
		<span class="material-icons text-black text-4xl"> add </span>
	</Button>
</div>

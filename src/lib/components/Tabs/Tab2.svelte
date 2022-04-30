<script lang="ts">
	import { ls } from '../../../stores/localStorage';
	import type { transaction, user, wallet } from '../../../data';

	export let tabindex = 0;

	let newName = "";
	let user: user = JSON.parse($ls);

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

<div id="panel-2" class="tab-panel" role="tabpanel" {tabindex}>
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
</div>

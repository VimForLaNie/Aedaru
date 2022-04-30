<script lang="ts">
	import { Button, Dialog, Select, Tabs } from 'agnostic-svelte';
	import moment from 'moment-timezone';
	import type { transaction, user, wallet } from '../data';
	import { ls } from '../stores/localStorage';
	import { currIndex } from '../stores/app';
	import Tab1 from '../lib/components/Tabs/Tab1.svelte';
	import Tab2 from '../lib/components/Tabs/Tab2.svelte'
	import Tab3 from '../lib/components/Tabs/Tab3.svelte'

	let user:user = JSON.parse($ls);
	ls.subscribe(x => user = JSON.parse(x))

	let index = $currIndex;
	currIndex.subscribe(x => index = x);

	let dialogInstance:any;
	const assignDialogInstance = (ev:any) => {
		dialogInstance = ev.detail.instance;
	};

	const openDialog = () => {
		if (dialogInstance) {
			dialogInstance.show();
		}
	};
</script>

<h1 data-testid="displayAmount">{user.wallets.total}</h1>
<h1 data-testid="displayAmount">{user.wallets.list[index].amount}</h1>

<Select bind:selected={$currIndex} labelCopy="Select the best tennis player of all time" 
	options={
		user.wallets.list.map((e,i) => { return { value : i, label : e.displayName} })
	} 
/>

<div class="fixed bottom-8 right-8">
	<Dialog
		title=""
		id="a11y-dialog"
		dialogRoot="#dialog-root"
		closeButtonLabel="My close button label"
		closeButtonPosition="last"
		titleId="uniqueTitleId"
		role="dialog"
		classNames={{ title: 'h4 mbe18 flex justify-center' }}
		isAnimationFadeIn
		isAnimationSlideUp
		on:instance={assignDialogInstance}
	>
		<Tabs
			size="large"
			tabs={[
				{ title: 'Add Transaction', ariaControls: 'panel-1', tabPanelComponent: Tab1 },
				{ title: 'Add Wallet', ariaControls: 'panel-2', tabPanelComponent: Tab2 },
				{ title: 'Tab 3', ariaControls: 'panel-3', tabPanelComponent: Tab3 }
			]}
		/>
	</Dialog>
	<Button id="addButton" on:click={openDialog} mode="primary" css="w-16 rounded-full h-16">
		<span class="material-icons text-black text-4xl"> add </span>
	</Button>
</div>
<!-- <p>{JSON.stringify(user.wallets.list[currIndex].transactions[0])}</p> -->

{#each user.wallets.list[index].transactions.reverse() as e, i}
	<div class=" w-64 bg-blue-400 hover:bg-blue-200 transition-all p-2 m-2 rounded mx-auto">
		<p>{e.amount}</p>
		<p>{moment.unix(e.time).tz(`${Intl.DateTimeFormat().resolvedOptions().timeZone}`).format()}</p>
		<p>{e.src || e.dest}</p>
	</div>
{/each}

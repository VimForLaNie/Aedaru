import { writable, type Writable } from 'svelte/store';
import { browser } from "$app/env";
import type { user, wallet } from 'src/data'

// Get the value out of storage on load.
const temp_wallets:wallet[] = [{
    id : Math.random().toString(36).slice(2, 9),
    displayName : "Cash",
    transactions : [],
    amount : 0,
}]

const temp_user:user = {
    id : `1`,
    displayName : `temp`,
    wallets : {total : 0, list : temp_wallets}
}

const user = (browser && localStorage.user) ? localStorage.user : JSON.stringify(temp_user);

// Set the stored value or a sane default.
export const ls:Writable<string> = writable(user);

// Anytime the store changes, update the local storage value.
if (browser) {
    ls.subscribe((value) => localStorage.user = value);
}

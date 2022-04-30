import { writable, type Writable } from 'svelte/store';

// Set the stored value or a sane default.
export const currIndex:Writable<number> = writable(0);


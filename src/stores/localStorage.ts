// src/stores/content.js
import { writable } from 'svelte/store';

// Get the value out of storage on load.
const amount = localStorage.amount;
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const ls_amount = writable(amount || `0`);

// Anytime the store changes, update the local storage value.
ls_amount.subscribe((value) => localStorage.amount = value)
// or localStorage.setItem('content', value)

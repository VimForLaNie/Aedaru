interface baseTransaction {
	time : number,
	amount : number,
	description? : string,
}

interface toTransaction extends baseTransaction{
	dest : string,
	src? : never
}

interface fromTransaction extends baseTransaction{
	dest? : never,
	src : string
}

export type transaction = toTransaction | fromTransaction;

export interface wallet {
	id : string,
	displayName : string,
	transactions : transaction[] | [],
	amount : number,
}
export interface user{
	id : string,
	displayName : string,
	wallets : { total : number, list : wallet[] | []},
}
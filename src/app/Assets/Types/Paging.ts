export type Paging =
	| { first: number, after?: string }
	| { last: number, before?: string };

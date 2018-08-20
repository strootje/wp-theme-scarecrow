import MenuItem from 'Models/MenuItem';

export default class {
	private readonly name: string;
	private readonly items: MenuItem[];

	constructor( name: string, items: MenuItem[] ) {
		this.name = name;
		this.items = items;
	}

	get Name(): string {
		return this.name;
	}

	get Items(): MenuItem[] {
		return this.items;
	}
}

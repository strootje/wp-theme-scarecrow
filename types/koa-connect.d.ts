declare module 'koa-connect' {
	const convert: ( middleware: any ) => any;
	export = convert;
}

export const OrderById = ( nodes, id ) => {
	return nodes.reduce(( cur, next ) => ({ ...cur, [id(next)]: next }), {});
};

export const RenderContent = ( content ) => {
	const index = content.indexOf('<!--more-->');
	return (index > 0) ? content.substring(0, index) : content;
};

export const IsMobile = () => {
	return window.matchMedia("only screen and (max-width: 760px)").matches;
}

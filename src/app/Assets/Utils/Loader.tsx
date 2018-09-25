import SingleLoader from 'Controls/SingleLoader';
import * as React from 'react';

export default function <ItemType>(item: (ItemType | undefined), getter: (item: ItemType) => any) {
	if (item != null) { return getter(item); }
	return (<SingleLoader />);
}

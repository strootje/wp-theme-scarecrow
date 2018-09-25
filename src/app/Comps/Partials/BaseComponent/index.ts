import * as React from 'react';

export default abstract class BaseComponent<OwnProps, Props = OwnProps, OwnState = {}> extends React.Component<OwnProps & Props, OwnState> {
	private _props: OwnProps & Props;

	constructor(props: OwnProps & Props) {
		super(props);
		this._props = props;
	}

	get props(): OwnProps & Props {
		return this._props as OwnProps & Props;
	}

	set props(value: OwnProps & Props) {
		this._props = value;
	}
}

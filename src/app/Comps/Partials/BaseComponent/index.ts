import * as React from 'react';

export default abstract class BaseComponent<OwnProps, Props extends OwnProps = OwnProps, OwnState = {}> extends React.Component<OwnProps, OwnState> {
	private _props: Props;

	constructor(props: Props) {
		super(props);
		this._props = props;
	}

	get props(): Props {
		return this._props as Props;
	}

	set props(value: Props) {
		this._props = value;
	}
}

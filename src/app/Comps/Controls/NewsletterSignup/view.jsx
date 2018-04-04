import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';
import { NEWSLETTER_SUBSCRIBE_SUCCESS } from 'Assets/Actions/Newsletter';

export default class extends Component {
	static propTypes = {
	}

	state = {
		status: null,
		missing: {
			email: false,
			name: false
		}
	}

	handleOnChange = ( evt ) => {
		this.setState(state => ({
			[evt.target.name]: evt.target.value,
			missing: {
				...state.missing,
				[evt.target.name]: false
			}
		}));
	}

	handleSubmit = ( evt ) => {
		evt.preventDefault();
		const { signup } = this.props;
		const { email, name } = this.state;

		if (!email) {
			this.setState(state => ({ missing: { ...state.missing, email: true } }));
		}

		if (!name) {
			this.setState(state => ({ missing: { ...state.missing, name: true } }));
		}

		const { missing } = this.state;
		if (!missing.email && !missing.name) {
			signup(email, { name: name }).then(
				action => {
					const status = action.type == NEWSLETTER_SUBSCRIBE_SUCCESS ? 'ok' : 'nok';
					this.setState({ status: status });

					if (status == 'nok') {
						setTimeout(() => this.setState({ status: null }), 3500);
					}
				}
			);
		}
	}

	render({ styles }, { status, missing }) {
		if (status == 'ok') {
			return (<div>thanks! ;)</div>);
		} else if (status == 'nok') {
			return (<div>on no :(</div>);
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='name' class={names('u-full-width', (missing.name && styles.error))} placeholder='name...' onChange={this.handleOnChange} />
					<input type='email' name='email' class={names('u-full-width', (missing.email && styles.error))} placeholder='email...' onChange={this.handleOnChange} />
					<input type='submit' class='u-full-width' value='testing' />
				</form>
			);
		}
	}
}

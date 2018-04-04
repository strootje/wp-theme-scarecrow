import { h, Component } from 'preact';
import names from 'classnames';

import Ribbon from 'Comps/Controls/Logo/Ribbon';

export default class extends Component {
	render({ styles, info }) {
		return (<div class={styles.logo}>
			{info.logo ? (
				<img src={info.logo.url} title={`${info.title} - ${info.tagline}`} />
			) : (
				<Ribbon title={info.title} tagline={info.tagline} />
			)}
		</div>);
	}
}

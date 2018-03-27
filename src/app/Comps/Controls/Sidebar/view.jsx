import { h, Component } from 'preact';
import types from 'prop-types';

import List from 'Comps/Controls/List';
import NewsletterSignup from 'Comps/Controls/NewsletterSignup';

class SidebarView extends Component {
	static propTypes = {
		menu: types.object.isRequired
	}

	render({ styles, locale, menu, support: { newsletter = { enabled: true, configured: true } } }) {
		return (
			<ul class={styles.sidebar}>
				{(newsletter.enabled && newsletter.configured) && (
					<li>{locale.newsletter.header}<NewsletterSignup /></li>
				)}

				{(menu.items.length > 0) && (
					<li>
						{menu.name}
						<List source={menu} filter={p => p.items} render={({ renderItems }) => (
							<div>{renderItems(({ item }) => (<pre>{item.title}</pre>))}</div>
						)} />
					</li>
				)}
			</ul>
		);
	}
}

export default SidebarView;

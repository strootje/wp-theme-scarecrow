import { h, Component } from 'preact';
import types from 'prop-types';

import List from 'Comps/Controls/List';
import NewsletterSignup from 'Comps/Controls/NewsletterSignup';

class SidebarView extends Component {
	static propTypes = {
		menu: types.object.isRequired
	}

	render({ styles, menu, support: { newsletter } }) {
		return (
			<ul class={styles.sidebar}>
				{(newsletter.enabled && newsletter.configured) && (
					<li>__Newsletter__<NewsletterSignup /></li>
				)}

				{(menu.items.length > 0) && (
					<li>
						__{menu.name}__
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

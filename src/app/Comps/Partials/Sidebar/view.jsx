import { Component, h } from 'preact';

import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import NewsletterSignup from 'Comps/Controls/NewsletterSignup';

export default class extends Component {
	render({ styles, locale, support, menu }) {
		return (
			<div>
				{support.newsletter.enabled && support.newsletter.configured && (<div>
					<h5>{locale.newsletter.header}</h5>
					<NewsletterSignup />
				</div>)}

				<div>
					<h5>{menu.name}</h5>
					<List source={menu} filter={p => p.items} render={({ renderItems }) => (
						<ul>{renderItems(({ item }) => (
							<li><Link to={item.url} target={item.target}>
								{item.title}
							</Link></li>
						))}</ul>
					)} />
				</div>
			</div>
		);
	}
}

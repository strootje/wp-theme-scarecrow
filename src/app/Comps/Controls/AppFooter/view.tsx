import * as React from 'react';
const style = require('./style');

import { FormattedMessage } from 'react-intl';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		const tags = [
			{ name: 'git' },
			{ name: 'test' }
		]

		const socialMenu = [
			{ name: 'test1' },
			{ name: 'test2' }
		];

		return (
			<footer className={style.FooterMain}>
				<div className={style.FooterRow}>
					<div className={style.FooterTags}>
						<h5><FormattedMessage id='footer.tags.title' /></h5>
						<ul>{tags.map(tag => (
							<li>{tag.name}</li>
						))}</ul>
					</div>

					<div className={style.FooterSocial}>
						<h5>===Social Menu===</h5>
						<ul>{socialMenu.map(item => (
							<li>{item.name}</li>
						))}</ul>
					</div>
				</div>

				<div className={style.FooterRow}>
					<div className={style.FooterLegal}>
						Bas Stroosnijder &copy; 2018 -
						Powered by <a href='https://wordpress.org/' target='blank'>Wordpress</a> &amp; <a href='https://github.com/strootje/wp-theme-scarecrow/' target='blank'>Scarecrow</a>
					</div>
				</div>
			</footer>
		);
	}
}

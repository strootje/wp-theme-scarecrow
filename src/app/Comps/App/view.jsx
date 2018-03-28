import { h, Component } from 'preact';
import Router from 'preact-router';

import Header from 'Comps/Partials/Header';
import Footer from 'Comps/Partials/Footer';
import PageHome from 'Comps/Pages/Home';
import PagePosts from 'Comps/Pages/Posts';
import PageError404 from 'Comps/Pages/Error404';
import Page from 'Comps/Partials/Page';

class AppView extends Component {
	render({ styles }) {
		return (
			<div class={styles.layout}>
				<div class={styles.wrapper}>
					<Header />

					<Router>
						<PageHome path='/' />
						<PagePosts path='/posts' />
						<div path='/projects/:projectId?'>projects</div>
						<Page path='/:pageSlug' />
						<PageError404 default />
					</Router>
				</div>
				<div class={styles.footer}>
					<Footer />
				</div>
			</div>
		);
	}
}

export default AppView;

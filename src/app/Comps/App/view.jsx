import { Component, h } from 'preact';
import { Router } from 'preact-router';

import PageArchivePost from 'Comps/Pages/ArchivePost';
import PageArchiveProject from 'Comps/Pages/ArchiveProject';
import PageHome from 'Comps/Pages/Home';
import PageNotFound from 'Comps/Pages/NotFound';
import PagePosts from 'Comps/Pages/Posts';
import PageProjects from 'Comps/Pages/Projects';
import PageSearch from 'Comps/Pages/Search';
import Footer from 'Comps/Partials/Footer';
import Header from 'Comps/Partials/Header';
import Page from 'Comps/Partials/Page';

export default class extends Component {
	render({ styles }) {
		return (
			<div class={styles.layout}>
				<div class={styles.wrapper}>
					<Header />

					<Router>
						<PageSearch path='/search/:query?' />
						<PagePosts path='/posts' />
						<PageProjects path='/projects' />
						<PageArchivePost path='/posts/:postId' />
						<PageArchiveProject path='/projects/:projectId' />
						<Page path='/:pageId' />
						<PageHome path='/' static={false} />{/* TODO: static / dynamic homepage switching */}
						<PageNotFound default />
					</Router>
				</div>

				<div class={styles.footer}>
					<Footer />
				</div>
			</div>
		);
	}
}

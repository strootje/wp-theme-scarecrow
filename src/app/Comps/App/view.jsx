import { Component, h } from 'preact';
import { Router } from 'preact-router';

import PageArchiveCategory from 'Comps/Pages/ArchiveCategory';
import PageArchivePost from 'Comps/Pages/ArchivePost';
import PageCategories from 'Comps/Pages/Categories';
import PageHome from 'Comps/Pages/Home';
import PageNotFound from 'Comps/Pages/NotFound';
import PagePosts from 'Comps/Pages/Posts';
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
						<PageCategories path='/categories/cases' />
						<PageArchivePost path='/posts/:postId' />
						<PageArchiveCategory path='/categories/cases/:categoryId' />
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

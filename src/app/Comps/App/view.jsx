import { h, Component } from 'preact';
import Router from 'preact-router';

import Header from 'Comps/App/Header';
import Footer from 'Comps/App/Footer';
import PageHome from 'Comps/Pages/Home';
// import PagePostDetails from 'Comps/Pages/PostDetails';
import PagePosts from 'Comps/Pages/Posts';
// import PageSearch from 'Comps/Pages/Search';

class AppView extends Component {
	render({ styles }) {
		return (
			<div class={styles.layout}>
				<div class={styles.wrapper}>
					<Header />

					<Router>
						<PageHome path='/' />
						{/* <PageSearch path='/search/:query?' /> */}
						{/* <PagePostDetails path='/posts/:postId' /> */}
						<PagePosts path='/posts' />
						<div path='/projects/:projectId?'>projects</div>
						<div default>default 404?</div>
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

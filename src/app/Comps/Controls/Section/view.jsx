import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

class SectionView extends Component {
	static propTypes = {
		wide: types.bool,
		hero: types.bool,
		children: types.element.isRequired
	}

	static defaultProps = {
		wide: false,
		hero: false
	}

	render({ styles, classname, wide, hero, children, ...props }) {
		return (
			<section class={names(styles.sectionWrapper, (hero && styles.hero), (!wide && !hero && 'container'))} {...props}>
				<div class={names(styles.inside, (!wide && hero && 'container'))}>{children}</div>
			</section>
		);
	}
}

export default SectionView;

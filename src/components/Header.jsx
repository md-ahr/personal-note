import ThemeToggle from './ThemeToggle';
import { HeaderSection, H1 } from '../styles/Header';

const Header = () => {
	return (
		<HeaderSection>
			<H1>Notes</H1>
			<ThemeToggle />
		</HeaderSection>
	);
};

export default Header;

import Logo from '../Logo'

const styles = {
  header: {
    minHeight: 80,
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <Logo text="ЛОГО" />
  </header>
);

export default AppBar;
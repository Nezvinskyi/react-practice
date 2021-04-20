import AppBar from '../AppBar'
import Container from '../Container'

const Layout = ({ children }) => (
	<>
		<AppBar />
		<Container>{ children}</Container>
	</>
)
export default Layout
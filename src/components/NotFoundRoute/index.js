import Header from '../Header'
import SideTabBar from '../SideTabBar'
import NotFound from '../NotFound'
import {RowFlex} from './styledComponents'

const NotFoundRoute = () => (
  <>
    <Header />
    <RowFlex>
      <SideTabBar />
      <NotFound />
    </RowFlex>
  </>
)

export default NotFoundRoute

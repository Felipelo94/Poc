import { combineReducers } from 'redux'
import welcome from './welcome/welcome'
import youcantmiss from './You-cant-miss/You-cant-miss'
import internalCategoria from './internal-categoria/internal-categoria'
import home from './home/home'
import menu from './home/menu'
import accesibility from './accessibility/accessibility'
import pageContext from './page-context/page-context'
import tourguide from './home/tour-guide'
import profitability from './profitability/profitability'

const index = combineReducers({
  welcome,
  youcantmiss,
  internalCategoria,
  home,
  menu,
  pageContext,
  tourguide,
  accesibility,
  profitability
})

export default index

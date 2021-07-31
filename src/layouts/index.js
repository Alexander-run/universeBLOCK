import SimpleLayout from './simpleLayout/index'
import NormalLayout from './normalLayout/index'

function BasicLayout(props) {
  if(props.location.pathname === '/login'){
    return <div><SimpleLayout />{props.children}</div>
  }

  return <div><NormalLayout>{props.children}</NormalLayout></div>
}

export default BasicLayout;

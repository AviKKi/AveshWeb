import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TopLoader from '../Common/TopLoader'
import Snackbar from '@material-ui/core/Snackbar'
import ClassNames from 'classnames'
import { connect } from 'react-redux'
import {
    HIDE_SNACKBAR
} from '../../actions/actionTypes'
import { withStyles } from '@material-ui/core/styles'
import CustomSnackbar from './CustomSnackbar'

const styles = theme => {
    return {
    root: {
        backgroundColor: "#1e88e5",
    }
}}

// const CustomSnackbar = withStyles(styles)(
//     (props)=>{
//         return <Snackbar {...props} className={ClassNames(props.classes.root)} />
//     }
// )
//autoHideDuration={5000}
const  Layout = props => {
  const { snackbar, snackbarMessage, dispatch } =  props
  return (
  <>
    <div style={{position:"absolute"}}>
    {/*<CustomSnackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        onClose = {()=>dispatch({type:HIDE_SNACKBAR})}
        open={snackbar}
        variant="info"
        message={snackbarMessage} />
        */}
    <Snackbar
        autoHideDuration={2500}
        onClose = {()=>dispatch({type:HIDE_SNACKBAR})}
        open={ snackbar }
        variant="info"
        message={ snackbarMessage }
    />
    </div>
    <TopLoader />
    <Navbar />
      { props.children }
    <Footer st="static"/>
  </>
)}

export const withLayout = Component => props => (
  <Layout >
    { Component }
  </Layout>
)

const mapStateToProps = state => {
    return {
        snackbar: state.common.snackbar,
        snackbarMessage: state.common.snackbarMessage
    }
}


export default connect(mapStateToProps)(Layout)

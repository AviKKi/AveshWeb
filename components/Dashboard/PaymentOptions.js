import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import {connect} from 'react-redux'
import Router from 'next/router'
import {
    SHOW_TOPLOADER,
    HIDE_TOPLOADER,
    POP_SNACKBAR
} from '../../actions/actionTypes'

const ROOT_URL = "https://api.aveshgecr.in"

const styles={
    card:{
        height: "100%",
    }
}

const Option = withStyles(styles)((props)=>{
    const {title, desciption, classes, clickCallback} = props
    return (
        <Card  className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography secondary component="p">
                    {desciption}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={clickCallback} color="secondary" variant="outlined">
                    Pay
                </Button>
            </CardActions>
        </Card>
    )
})

const CodeEntryCard = withStyles(styles)((props)=>{
    const {couponCode, changeHandler, classes, couponClick} = props
    return (
        <Card  className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Enter squadpass code:
                </Typography>
                <input type="text" value={couponCode} onChange={changeHandler} />
            </CardContent>
            <CardActions>

                <Button onClick={couponClick} color="secondary" align="right" variant="outlined">
                    Redeem
                </Button>

                <Tooltip title="Buy a pass of Rs. 350/- and you'll get coupons to share with your friend" style={{width:100,height:100}} aria-label="Add">
                    <Typography variant="button" component="h6" align="right" style={{color:"#C0C0C0",justify:"right"}}>
                      <Button style={{borderRadius:"50%"}}> ? </Button>
                    </Typography> 
                </Tooltip>

            </CardActions>
        </Card>
    )
})


const makePayment = async(operation, token, dispatch)=>{

    const requestParams = {
        headers: {
            'Authorization': `Token ${token}`
        }
    }
    const res = await axios.post('/paytm/payment', {operation}, requestParams)
    if(res.data.success!==undefined)
        {
            dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:res.data.reason}})
            return
        }
    let paramList = []
    for(let[key, value] of Object.entries(res.data)){
        paramList.push( {name:key, value:value} )
    }
    console.log(paramList)
    Router.push({pathname: '/PaytmProcess', query: { "params":JSON.stringify(paramList) }})
}

function PassesDetail(props){
    const {passflag, accomodationflag, squadpass} = props
    return (
        <>
            {passflag===true?"Payment for your pass has been recieved": undefined}<br/>
            {squadpass!==""?`Share your squad code ${squadpass} with 3 of your friends`:undefined}<br />
            {accomodationflag===true?"Payment for your accomodation has been recieved": undefined}
        </>
    )
}

class PaymentOptions extends React.Component  {
    state={
        spinner:true,
        passflag:false,
        accomodationflag:false,
        squadpass:"",
        couponCode: ""
    }
    changeHandler = (e)=>{
        console.log(e)
        this.setState({couponCode:e.target.value})
    }
    couponClick = async()=>{
        const { dispatch, token } = this.props
        dispatch({type:SHOW_TOPLOADER})
        try{
            const reqHeaders = {
                headers:{
                    "Authorization": `Token ${token}`
                }
            }
            const res = await axios.post('https://api.aveshgecr.in/users/usecoupon', {code:this.state.couponCode}, reqHeaders)
            console.log(res.data)
            console.log(res.data.success)
            if(res.data.success)
                this.setState({passflag:true})
            else {
                dispatch({type:POP_SNACKBAR, payload:{snackbarMessage:res.data.reason}})
            }
        }catch(err){console.log(err)}
        finally{
            dispatch({type:HIDE_TOPLOADER})
        }
    }
    componentDidMount = async()=>{
        const { token } = this.props
        const reqHeaders = {
            headers:{
                "Authorization": `Token ${token}`
            }
        }
        let passflag = false
        let accomodationflag = false
        let squadpass = ""
        try{const res = await axios.get('https://api.aveshgecr.in/users/passes', reqHeaders)
        for(let i in res.data){
            console.log( Object.entries(res.data[i]) )
            for(let j in Object.entries( res.data[i] )){
                let d = Object.entries(res.data[i])
                if(d[j][1]==="pass" || d[j][1]==="squadpass") passflag=true
                else if(d[j][1]==="accomm" || d[j][1]==="accomf") accomodationflag=true
                if(d[j][1]==="squadpass") squadpass=res.data[i].squadcode
            }
        }}catch(e){}
        finally{
        this.setState({spinner:false})
        this.setState({passflag, accomodationflag, squadpass})
    }}
    render(){
    const {profile, token, dispatch} = this.props
    const {passflag, accomodationflag, squadpass, spinner} = this.state

    return (
        <div style={{overflow:"hidden"}}>
            {spinner?<>Loading...</>:undefined}
            <PassesDetail passflag={passflag} accomodationflag={accomodationflag} squadpass={squadpass}/>
            {(spinner || passflag===true)?<></>:(<Grid justify="center" container spacing={8}>
                <Grid item xs={8} lg={4}>
                    <CodeEntryCard
                        couponClick={this.couponClick}
                        couponCode={this.couponCode}
                        changeHandler={this.changeHandler}
                     />
                </Grid>
                <Grid item xs={8} lg={4} >
                    <Option
                        clickCallback={async()=>await makePayment("pass", token, dispatch)}
                        title="Solo:All Event Pass"
                        desciption="Participate in all the events at just Rs.100." />
                </Grid>
                <Grid xs={8} lg={4} item>
                    <Option
                    clickCallback={async()=>await makePayment("squadpass", token, dispatch)}
                    title="Squad:All Event Pass" desciption="Get 4 all event passes at just Rs. 350" />
                </Grid>
            </Grid >)}

            
        </div>
    )
}}

const mapStateToProps = state=>{
    token: state.auth.token
}

export default connect(mapStateToProps)(PaymentOptions)



// todo: Code simplification
const options = [
    {
    title: "Solo:All Event Pass",
    desciption: "Participate in all the events at just Rs.100.",
    operation: "pass",
},{
    title: "Squad:All Event Pass",
    desciption: "Get 4 all event passes at just Rs. 350",
    operation: "squadpass",
},{
    title: "Accomodation for Girls(+Free T-shirt)",
    desciption: "Get accomodation at just Rs. 270(+150 Caution Money) with a free T-shirt.",
    operation: "Accomodationf",
},{
    title: "Accomodation for Boys(+Free T-shirt)",
    desciption: "Get accomodation at just Rs. 270(+150 Caution Money) with a free T-shirt.",
    operation: "Accomodationm",
},
]

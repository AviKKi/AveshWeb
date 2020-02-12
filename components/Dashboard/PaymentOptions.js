import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { connect } from 'react-redux'
import Router from 'next/router'
import {
    SHOW_TOPLOADER,
    HIDE_TOPLOADER,
    POP_SNACKBAR
} from '../../actions/actionTypes'

const ROOT_URL = "https://api.aveshgecr.in"

const styles = {
    card: {
        height: "100%",
    }
}

const Option = withStyles(styles)((props) => {
    const { title, desciption, classes, clickCallback } = props
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography secondary component="p">
                    {/* {desciption} */}
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
const InstructionCard = withStyles(styles)(props => {
    const { classes } = props
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Instructions For Payment
                    </Typography>
                <p>
                    There are 3 type of passes for the event-
                        <ol>
                        <li>All Event Pass</li>
                        <li>All Event + Gaming Pass (excluding pubg)</li>
                        <li>Only Gaming Pass (excluding pubg)</li>
                    </ol>
                </p>
                <p>
                    Steps to buy passes for the event -
                    <ol>
                        <li>From below section, select number of passes of each kind you want and click pay</li>
                        <li>You'll be redirected to payment gateway, make your payment there</li>
                        <li>You'll now be given codes for the passes, apply it to get a pass</li>
                        <li>If you paid for multiple passes, ask your friends to register and then use these codes to get passes.</li>
                    </ol>
                </p>
                <p>
                </p>
            </CardContent>
        </Card>
    )
})


const PassStatusCard = withStyles(styles)(props => {
    const { pass, coupons, classes } = props
    return (
        <Card className={classes.card}>
            <CardContent>
                <Tooltip title="Buy a passes and apply it's code" >
                    <Typography gutterBottom variant="h5" component="h2">
                        Your Pass
                    </Typography>
                </Tooltip>
                <p>{pass ? pass : "You don't have a pass yet"}</p><br />
                {
                    coupons.map(
                        el => <p>{el}</p>
                    )
                }
            </CardContent>
        </Card>
    )
})

const CodeEntryCard = withStyles(styles)((props) => {
    const { couponCode, changeHandler, classes, couponClick } = props
    return (
        <Card className={classes.card}>
            <CardContent>
                <Tooltip title="When you buy multiple passes you'll get pass code, share it with your friends" >
                    <Typography gutterBottom variant="h5" component="h2">
                        Enter pass code
                </Typography>
                </Tooltip>

                <input type="text" value={couponCode} onChange={changeHandler} />
            </CardContent>
            <CardActions>

                <Button onClick={couponClick} color="secondary" align="right" variant="outlined">
                    Redeem
                </Button>

            </CardActions>
        </Card>
    )
})

const Counter = props => {
    const { value, onInc, onDec, title } = props
    return (
        <div style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography secondary component="p">
                {title}
            </Typography>
            <div>
                <Button onClick={onDec}>-</Button>{value}<Button onClick={onInc}>+</Button>
            </div>
        </div>
    )
}

const PassesBuyCard = withStyles(styles)(props => {
    const { classes, onPay } = props

    const [allEventPass, _setAllEventPass] = useState(0)
    const setAllEventPass = x => _setAllEventPass(x < 0 ? 0 : x)

    const [allPlusGaming, _setAllPlusGaming] = useState(0)
    const setAllPlusGaming = x => _setAllPlusGaming(x < 0 ? 0 : x)

    const [onlyGaming, _setOnlyGaming] = useState(0)
    const setOnlyGaming = x => _setOnlyGaming(x < 0 ? 0 : x)
    const discount_percentage = allEventPass + allPlusGaming > 4 ? 0.15 : 0
    const amount = (allEventPass * 120 + allPlusGaming * 150 + onlyGaming * 50)
    const discount_amount = Math.floor(amount * discount_percentage)
    const total_amount = amount - discount_amount

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Buy Passes
                </Typography>
                <Typography gutterBottom variant="colorTextSecondary" component="p">
                    Buy 4+ all event passes and get a discount of 15%
                </Typography>

                <Counter
                    title="All Event Pass Rs 120/-"
                    value={allEventPass}
                    onInc={() => setAllEventPass(allEventPass + 1)}
                    onDec={() => setAllEventPass(allEventPass - 1)}
                />
                <Counter
                    title="All Event + Gaming Pass Rs 150/-"
                    value={allPlusGaming}
                    onInc={() => setAllPlusGaming(allPlusGaming + 1)}
                    onDec={() => setAllPlusGaming(allPlusGaming - 1)}
                />

                <Counter
                    title="Only Gaming Pass Rs 50/-"
                    value={onlyGaming}
                    onInc={() => setOnlyGaming(onlyGaming + 1)}
                    onDec={() => setOnlyGaming(onlyGaming - 1)}
                />
                <p style={{ textAlign: 'center' }}>
                    Price:{amount}<br />
                    Discount:{discount_amount}<br />
                    Total:{total_amount}<br />
                </p>
            </CardContent>
            <CardActions>
                <Button onClick={onPay({ "all": allEventPass, "all+": allPlusGaming, "gaming": onlyGaming })} color="secondary" variant="outlined">
                    Pay
                </Button>
            </CardActions>
        </Card>
    )
})


const makePayment = async (payload, token, dispatch) => {

    const requestParams = {
        headers: {
            'Authorization': `Token ${token}`
        }
    }
    const res = await axios.post('/paytm/payment', { payload }, requestParams)
    if (res.data.success !== undefined) {
        dispatch({ type: POP_SNACKBAR, payload: { snackbarMessage: res.data.reason } })
        return
    }
    let paramList = []
    console.log(res.data)
    for (let [key, value] of Object.entries(res.data)) {
        paramList.push({ name: key, value: value })
    }
    console.log(paramList)
    Router.push({ pathname: '/PaytmProcess', query: { "params": JSON.stringify(paramList) } })
}

function PassesDetail(props) {
    const { passflag, accomodationflag, squadpass } = props
    return (
        <>
            {passflag === true ? "Payment for your pass has been recieved" : undefined}<br />
            {squadpass !== "" ? `Share your squad code ${squadpass} with 3 of your friends` : undefined}<br />
            {accomodationflag === true ? "Payment for your accomodation has been recieved" : undefined}
        </>
    )
}

class PaymentOptions extends React.Component {
    state = {
        spinner: true,
        passflag: false,
        accomodationflag: false,
        pass: false,
        coupons: [],
        squadpass: "",
        couponCode: ""
    }
    changeHandler = (e) => {
        console.log(e)
        this.setState({ couponCode: e.target.value })
    }
    couponClick = async () => {
        const { dispatch, token } = this.props
        dispatch({ type: SHOW_TOPLOADER })
        try {
            const reqHeaders = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
            const res = await axios.post('https://api.aveshgecr.in/users/usecoupon', { code: this.state.couponCode }, reqHeaders)
            console.log(res.data)
            console.log(res.data.success)
            if (res.data.success)
                // this.setState({ passflag: true })
                // Router.push('/UserDashboard')
                window.location.reload()
            else {
                dispatch({ type: POP_SNACKBAR, payload: { snackbarMessage: res.data.reason } })
            }
        } catch (err) { console.log(err) }
        finally {
            dispatch({ type: HIDE_TOPLOADER })
        }
    }
    componentDidMount = async () => {
        const { token } = this.props
        const reqHeaders = {
            headers: {
                "Authorization": `Token ${token}`
            }
        }
        let passflag = false
        let accomodationflag = false
        let squadpass = ""
        try {
            const res = await axios.get('https://api.aveshgecr.in/users/passes', reqHeaders)
            const passNameMapping = { "all": "All Event", "all+": "All Event + Gaming", "gaming": "Only Gaming" }

            for (let i in res.data) {
                i = res.data[i]
                if (i.applied_coupon !== undefined) {
                    if (i.applied_coupon === false) {
                        this.setState({ pass: false })
                    }
                    else {
                        // TOdo
                        this.setState({ pass: `You have a ${passNameMapping[i.coupon_type]} Pass` })
                    }
                }
                else {
                    const coupons = this.state.coupons
                    for (let [name, v] of Object.entries(i)) {
                        if (name === "all" || name === "all+" || name === "gaming")
                            coupons.push(`Code for ${v.amount} ${passNameMapping[name]} pass is ${v.code}`)
                    }
                    this.setState({ coupons })
                    console.log(i)
                    console.log(coupons)
                }
            }
        } catch (e) { }
        finally {
            this.setState({ spinner: false })
            this.setState({ passflag, accomodationflag, squadpass })
        }
    }
    // => async ()
    _onPay = (token, dispatch) => payload => async () => {
        console.log(payload, token, dispatch)
        await makePayment(payload, token, dispatch)
    }

    render() {
        const { profile, token, dispatch } = this.props
        const { passflag, accomodationflag, squadpass, spinner, pass, coupons } = this.state
        const onPay = this._onPay(token, dispatch)
        return (
            <div style={{ overflow: "hidden" }}>
                {spinner ? <>Loading...</> : undefined}
                <PassesDetail passflag={passflag} accomodationflag={accomodationflag} squadpass={squadpass} />
                {(spinner || passflag === true) ? <></> : (<Grid justify="center" container spacing={8}>
                    <Grid item xs={12} lg={10}>
                        <InstructionCard pass={pass} coupons={coupons} />
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <PassStatusCard pass={pass} coupons={coupons} />
                    </Grid>
                    <Grid item xs={12} lg={5} >
                        <PassesBuyCard onPay={onPay} />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <CodeEntryCard
                            couponClick={this.couponClick}
                            couponCode={this.couponCode}
                            changeHandler={this.changeHandler}
                        />
                    </Grid>
                </Grid >)}


            </div>
        )
    }
}

const mapStateToProps = state => {
    token: state.auth.token
}

export default connect(mapStateToProps)(PaymentOptions)



// todo: Code simplification
const options = [
    {
        title: "Solo:All Event Pass",
        desciption: "Participate in all the events at just Rs.100.",
        operation: "pass",
    }, {
        title: "Squad:All Event Pass",
        desciption: "Get 4 all event passes at just Rs. 350",
        operation: "squadpass",
    }, {
        title: "Accomodation for Girls(+Free T-shirt)",
        desciption: "Get accomodation at just Rs. 270(+150 Caution Money) with a free T-shirt.",
        operation: "Accomodationf",
    }, {
        title: "Accomodation for Boys(+Free T-shirt)",
        desciption: "Get accomodation at just Rs. 270(+150 Caution Money) with a free T-shirt.",
        operation: "Accomodationm",
    },
]

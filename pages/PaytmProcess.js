import Router from 'next/router'
import React from 'react'
import {withRouter} from 'next/router'

class Paytm extends React.Component {
    componentDidMount = ()=>{
        this.refs.paymentForm.submit()
    }
    render(){
        const { query } = this.props.router
        let params = JSON.parse(query.params)
        console.log(params)
        return (<>
            <h1>Redirecting to payment gateway, do not refresh or press back</h1>
            <form ref="paymentForm" action="https://securegw.paytm.in/theia/processTransaction" name="f1" method="POST">
                {params.map(p=>(
                    <input type="hidden" name={p.name} value={p.value} />
                ))}
            </form>
            </>)
    }
}
export default withRouter(Paytm)

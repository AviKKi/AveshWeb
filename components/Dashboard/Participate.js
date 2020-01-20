import React from 'react'
import EventCard from './EventCard'
import { connect } from 'react-redux'
import axios from 'axios'

import {
    SHOW_TOPLOADER,
    HIDE_TOPLOADER
} from '../../actions/actionTypes'

const DOMAIN = 'https://api.aveshgecr.in'
// const DOMAIN = 'http://localhost:8080'

class Participate extends React.Component{
    state = {
        events: [],
    }
    participateHandler = async(eventid)=>{
        const { dispatch, token } = this.props
        const { events}= this.state
        dispatch({type:SHOW_TOPLOADER})
        try {
            const res = await axios.post(
                DOMAIN+'/users/enroll',
                {eventid},
                {headers:{
                    'Authorization': `Token ${token}`
                }}
            )
            if(res.data.success){
                this.setState(prevState => ({
                    events: prevState.events.map(
                        obj => (obj.id === eventid ? Object.assign(obj, { participating: true }) : obj)
                    )
                }));

            }
            else{

            }
        } catch (e) {

        } finally {
            dispatch({type:HIDE_TOPLOADER})
        }
    }

    componentDidMount = async()=>{
        const { dispatch, token } = this.props
        dispatch({type:SHOW_TOPLOADER})
        try {
            const res = await axios.get(DOMAIN+'/avesh/events',
                {
                    headers:{
                        'Authorization': `Token ${token}`
                    }
                })
            console.log(res.data)
            this.setState({events:res.data})
        } catch (e) {
            console.log(e)
        } finally {
            dispatch({type:HIDE_TOPLOADER})
        }
    }
    render(){
        const { events } = this.state
        return (
            <>
            {
                events.map(e=><EventCard
                    key={e.id}
                    participateHandler={this.participateHandler.bind(this, e.id)}
                    {...e} />)
            }
            </>
    )}
}

export default connect()(Participate)

import React from 'react'
import EventCard from './EventCard'
import { connect } from 'react-redux'
import axios from 'axios'
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {
    SHOW_TOPLOADER,
    HIDE_TOPLOADER
} from '../../actions/actionTypes'

const DOMAIN = 'https://api.aveshgecr.in'

class Participate extends React.Component {
    state = {
        events: [],
    }
    participateHandler = async (eventid) => {
        const { dispatch, token } = this.props
        const { events } = this.state
        dispatch({ type: SHOW_TOPLOADER })
        try {
            const res = await axios.post(
                DOMAIN + '/users/enroll',
                { eventid },
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            )
            if (res.data.success) {
                this.setState(prevState => ({
                    events: prevState.events.map(
                        obj => (obj.id === eventid ? Object.assign(obj, { participating: true }) : obj)
                    )
                }));
            }
            else {
            }
        } catch (e) {

        } finally {
            dispatch({ type: HIDE_TOPLOADER })
        }
    }

    componentDidMount = async () => {
        const { dispatch, token } = this.props
        dispatch({ type: SHOW_TOPLOADER })
        try {
            const res = await axios.get(DOMAIN + '/avesh/events',
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })
            this.setState({ events: res.data })
        } catch (e) {
        } finally {
            dispatch({ type: HIDE_TOPLOADER })
        }
    }
    render() {
        const { events } = this.state
        return (
            <>
                <h3 style={{ color: "white" }}>
                    Let us know what events are you participating in.
                </h3>

                <GridContainer  justify="center" style={{ overflow: 'hidden' }}>
                    {
                        events.map(e =>
                            <GridItem xs={10} sm={4}><EventCard
                                key={e.id}
                                participateHandler={this.participateHandler.bind(this, e.id)}
                                {...e} />
                            </GridItem>
                        )
                    }
                </GridContainer>
            </>
        )
    }
}

export default connect()(Participate)

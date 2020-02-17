import React from 'react';
import UpdateBox from '../components/UpdateBox/UpdateBox';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class EventUpdates extends React.Component{
    state={
        isFetching: false,
        update: []
    }
    fetchData = ()=>{
        fetch('https://api.aveshgecr.in/avesh/eventupdate')
        .then((response)=>{
            return response.json();
        })
        .then((r)=>{
            if(!this.isCancelled){
                const results = r;
                this.setState({update:results,isFetching:false})
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
    componentDidMount() {
        this.fetchData();
    }
    render(){
        return (
            <>
            <Navbar st='static' />
                <div style={{color:"#FFF",}}>
                    <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
                    <h1 style={{textAlign:'center'}}>Avesh Updates</h1>
                    <div>
                        {
                          this.state.update.map(
                              x => <UpdateBox {...x} />
                            )
                        }
                    </div>
                </div>
            <Footer st='static'/>
            </>
        );
    }
}

export default EventUpdates;
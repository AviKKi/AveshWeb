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
        fetch('http://www.mocky.io/v2/5e4adeb62f000022b997d5c4')
        .then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((r)=>{
        console.log(r);
            if(!this.isCancelled){
            const results = r.articles.map(row=>({
                title: row.title,
                msg: row.msg,
                time: row.time
            }))
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
                        {this.state.update.map(x => (<UpdateBox title={x.title} msg={x.msg} time={x.time} />))}
                    </div>
                </div>
            <Footer st='static'/>
            </>
        );
    }
}

export default EventUpdates;
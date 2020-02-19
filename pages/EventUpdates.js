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
        this.setState({isFetching: true})
        fetch('https://api.aveshgecr.in/avesh/eventupdate')
        .then((response)=>{
            return response.json();
        })
        .then((r)=>{
            if(!this.isCancelled){
                r.reverse();
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
        if(this.state.isFetching){
            return (
              <div>
                <div className="loader"></div>
              </div>
            )
          }
        return (
            <>
            <Navbar st='static' />
                <div style={{color:"#FFF",}}>
                    <h2 style={{textAlign:'center', fontFamily: 'Harry', letterSpacing: '0.1em'}}>Avesh Updates</h2>
                    <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
                    <div>
                        {
                          this.state.update.map(
                              x => <UpdateBox {...x} key={x.id}/>
                            )
                        }
                    </div>
                </div>
            <Footer st='static'/>
            <style>{`
                .loader:empty {
                    position: absolute;
                    top: calc(50% - 4em);
                    left: calc(50% - 4em);
                    width: 6em;
                    height: 6em;
                    border: 1.1em solid rgba(70, 106, 116, 0.2);
                    border-left: 1.1em solid #7ecbee;
                    border-radius: 50%;
                    animation: load8 1.1s infinite linear;
                  }
                  
                  @keyframes load8 {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                  
                @font-face{
                    font-family: Harry;
                    src: url(../../static/font/HARRYP__.TTF);
                }
            `}</style>
            </>
        );
    }
}

export default EventUpdates;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonBase from '@material-ui/core/ButtonBase';

class Landing extends React.Component{
    render(){
        return(
            <ButtonBase maxWidth="md">
                <div>Satyam</div>
             </ButtonBase>
        )
    }
}

export default Landing;
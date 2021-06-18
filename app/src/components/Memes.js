import React from 'react';
import { connect } from 'react-redux';

import { getMemes } from '../actions'

class Memes extends React.Component {
    clickHandler = () => {
        this.props.getMemes()
    }

    render() {
        return (
            <>
                {/* <h3>We have an error: {this.props.error}</h3> */}
                <div className="memes-list">
                    {
                        this.props.memes.length === 0 ? 
                        <button onClick={this.clickHandler}>Get Memes</button> : 
                        (
                            <h2>Welcome to the world of memes!</h2>,
                            this.props.memes.map( meme => (
                            <>
                                <h4>{meme.name}</h4>
                                <img 
                                    src={meme.url} 
                                    alt="meme goes here"
                                    width='300px'
                                />
                            </>
                            ))
                        )
                    }
                </div>
                
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        memes: state.memes,
        error: state.error,
    }
}

export default connect(mapStateToProps, { getMemes } )(Memes);
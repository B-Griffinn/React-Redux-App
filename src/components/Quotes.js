import React, { useEffect } from 'react';

// Connecter fn
import { connect } from 'react-redux';

// Actions function
import { getQuote } from '../actions';

const Quotes = ({ getQuote, quote, isFetching, err }) => {

    useEffect(() => {
        getQuote();

    }, [getQuote]);

    if(isFetching) {
        return <h3>One moment while I get that quote for you.</h3>
    }

    return (
        <div className="quote-card">
            <h1>kanye says: {quote}</h1>
            <button
                onClick={getQuote}
            >
                Get a new quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       quote: state.quote,
       isFetching: state.isFetching,
       error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getQuote }
)(Quotes);
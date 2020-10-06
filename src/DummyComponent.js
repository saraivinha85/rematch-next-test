import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const DummyComponent = (props) => {

    const { first, second } = props

    useEffect(() => {
        first(['Hello']).then(() => {
            second(['world'])
        })
    }, [first, second])

    return (<div>Hello world</div>)
}

const mapDispatch = (dispatch) => {
    return {
        first: (value) => dispatch.dummy.first(value),
        second: (value) => dispatch.dummy.second(value)
    }
}

export default connect(null, mapDispatch)(DummyComponent)

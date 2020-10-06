import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const DummyComponent = (props) => {
    const { first, second, value } = props

    useEffect(() => {
        first(['Hello']).then(() => {
            second(['world'])
        })
        // you don't need to listen changes on first or second, cuz they're pure functions
        // you can perfectly ignore this recomendation
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {JSON.stringify(value)}
        </div>
    )
}

const mapDispatch = (dispatch) => ({
    first: (value) => dispatch.dummy.firstPromise(value),
    second: (value) => dispatch.dummy.secondPromise(value)
})

const mapStateToProps = (state) => ({
    value: state.dummy.value
})

export default connect(mapStateToProps, mapDispatch)(DummyComponent)

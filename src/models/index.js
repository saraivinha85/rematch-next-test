export const dummy = {
    state: {
        value: []
    },

    reducers: {
        first(state, payload) {
            return {
                ...state,
                value: [...state.value, ...payload]
            }
        },

        second(state, payload) {
            return {
                ...state,
                value: [...state.value, ...payload]
            }
        }
    },
    effects: (dispatch) => ({
        async firstPromise(payload) {
            dispatch.dummy.first(payload)
        },
        async secondPromise(payload) {
            dispatch.dummy.second(payload)
        }
    })
}


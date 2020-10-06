export const dummy = {
    state: {
        value: []
    },

    reducers: {
        first(state, payload) {
            return {
                ...state,
                value: [...payload]
            }
        },

        second(state, payload) {
            return {
                ...state,
                value: [...payload]
            }
        }
    }
}


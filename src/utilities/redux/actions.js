export const addValue = value => ({
    type: 'ADD_VALUE',
    value
})

export const calculateOperant = operator => ({
    type: 'OPERATE',
    operator
})

export const clear = () => ({
    type: 'CLEAR_ALL',
})
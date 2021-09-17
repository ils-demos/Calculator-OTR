const memory = {
    display: "0",
    operator: "",
    stack: "",
    last: ""
}

const calculate = {
    'X': (x, y) => { return x * y },
    '/': (x, y) => { return x / y },
    '+': (x, y) => { return x + y },
    '-': (x, y) => { return x - y }
}

const num = /^\d+$/

const operand = (state = memory, action) => {
    const empty = state.display === "0"
    const equals = action.operator === "="
    const loadedOperator = state.operator !== ""
    const full = loadedOperator && state.stack !== ""
    switch(action.type) {
        case 'ADD_VALUE':
            return {
                display: empty
                    ? action.value
                    : !num.test(state.last)
                        ? action.value
                        : state.display + action.value,
                operator: loadedOperator ? state.operator : "",
                stack: state.last === "="
                    ? state.stack
                    : state.display,
                last: action.value
            }
        case 'OPERATE':
            return {
                display:  equals
                    ? loadedOperator
                        ? calculate[state.operator](parseInt(state.stack), parseInt(state.display))
                        : state.display
                    : full
                        ? calculate[state.operator](parseInt(state.stack), parseInt(state.display))
                        : state.display,
                operator: equals ? state.operator : action.operator,
                stack: state.last === "=" 
                    ? state.stack
                    : full
                        ? calculate[state.operator](parseInt(state.stack), parseInt(state.display))
                        : state.display,
                last: action.operator
            }
        case 'CLEAR_ALL':
            return memory
        default:
            return state
    }
}

export default operand
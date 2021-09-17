const memory = {
    display: "0",
    operator: "",
    stack: "",
    last: ""
}

const calculate = {
    'X': (x, y) => { return (x * y).toString().substring(0,9) },
    '/': (x, y) => { return (x / y).toString().substring(0,9) },
    '+': (x, y) => { return (x + y).toString().substring(0,9) },
    '-': (x, y) => { return (x - y).toString().substring(0,9) }
}

const num = /^\d+$/

const operand = (state = memory, action) => {
    const empty = state.display === "0"
    const equals = action.operator === "="
    const loadedOperator = state.operator !== ""
    const full = loadedOperator && state.stack !== ""
    // console.log("-------------------------")
    // console.log(JSON.stringify(state))
    // console.log("value " + action?.value)
    // console.log("includes . : " + state?.display?.includes("."))
    // console.log("num.test(state.last) || action.value === : " + (num.test(state.last) || action.value === "."))
    // console.log("num.test(action.value) || action.value === : " + (num.test(action.value) || action.value === "."))
    switch(action.type) {
        case 'ADD_VALUE':
            return {
                display: empty
                    ? action.value
                    : (num.test(state.last) || state.last === ".")
                        ? (num.test(action.value) || action.value === ".")
                            ? state.display + action.value
                            : state.display
                        : action.value,
                operator: loadedOperator ? state.operator : "",
                stack: state.last === "=" || state.last === "."
                    ? state.stack
                    : state.display,
                last: action.value
            }
        case 'OPERATE':
            return {
                display:  equals
                    ? loadedOperator
                        ? calculate[state.operator](parseFloat(state.stack), parseFloat(state.display))
                        : state.display
                    : full
                        ? calculate[state.operator](parseFloat(state.stack), parseFloat(state.display))
                        : state.display,
                operator: equals ? state.operator : action.operator,
                stack: state.last === "=" 
                    ? state.stack
                    : full
                        ? calculate[state.operator](parseFloat(state.stack), parseFloat(state.display))
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
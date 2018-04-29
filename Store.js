import { React } from 'react';
import { ReactDOM } from 'react-dom';

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }
    const subscribe = (listener) => {
        listeners.push(listener);
        return ()=> {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({});

    return {getState, dispatch, subscribe};
}

const store = createStore(counter);

console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

const Counter = ({value}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
                 onIncrement={() =>
                    store.dispatch({
                        type: 'INCREMENT'
                    })
                 }
                 onDecrement={()=>
                    store.dispatch({
                        type: 'DECREMENT'
                    })
                 }
        />,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();

document.addEventListener('click' , ()=> {
    store.dispatch({type: 'INCREMENT'})
});
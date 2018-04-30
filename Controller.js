import  expect  from 'expect';
import  deepFreeze  from 'deep-freeze';

const createCounter = (list) => {
    return [...list, 0];
}

const testCreateCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        createCounter(listBefore)
    ).toEqual(listAfter);
};

const removeCounter = (list, index) => {
    return [...list.slice(0,index),
        ...list.slice(index+1)
    ]
}

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [10, 20];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 0)
    ).toEqual(listAfter);
}

const incrementCounter = (list, index)=> {
    return [
        ...list.slice(0,index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
}

const testIncrementCounter = () => {
    const listBefore = [0,10,20];
    const listAfter = [0,11,20];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter)
}

const decrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] - 1,
        ...list.slice(index + 1)
    ]
};

const testDecrementCounter = () => {
    const listBefore= [0,10,20];
    const listAfter = [0, 9, 20];

    deepFreeze(listBefore);

    expect(
        decrementCounter(listBefore, 1)
    ).toEqual(listAfter)
};

testDecrementCounter();
testIncrementCounter();
testCreateCounter();
testRemoveCounter();
console.log('Testing for once! :D');


const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Bank', () => {
        const user = 'Bank';
        expect(user).toBe('Bank');
    });

    test('User is Mick', () => {
        const user = 'Mick';
        expect(user).toBe('Mick');
    })
});

// toBe
test('Adds 2 + 3 to equal 5', () => {
    expect(functions.add(2, 3)).toBe(5);
})

// not
test('Adds 2 + 3 to NOT equal 4', () => {
    expect(functions.add(2, 3)).not.toBe(4);
})

/*
 CHECK FOR TRUTHY & FALSY VALUES
 toBeNull matches only null
 toBeUndefined matches only undefined
 toBeDefine is the opposite of toBeUndefined
 toBeTruthy matches anything that an if statement treats as true
 toBeFalsy matches anything that an if statement treats as false
*/

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be false', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

// toEqual
test('User should be Bank Pomelo object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Bank',
        lastName: 'Pomelo'
    })
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 8000;
    const load2 = 7000;
    expect(load1 + load2).toBeLessThanOrEqual(15000);
});

// Regex
test('There is no T in team', () => {
    // expect(`Lorem Team`).not.toMatch(/T/i);
    expect(`Lorem Team`).toMatch(/T/i);
})

// Arrays
test('Bank should be in usernames', () => {
    usernames = ['bank', 'mick', 'daniel'];
    expect(usernames).toContain('bank');
})

// Working with async data **

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

})


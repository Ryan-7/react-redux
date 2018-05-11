import * as firebase from 'firebase'; // takes all the named exports from firebase module and dumps them onto a new object called firebase
// if firebase had a default export it would look like we're used to: import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDOwG3NiqRGZJgIwcHp3xr8SXT9Oxaf6WI",
    authDomain: "expensify-2018.firebaseapp.com",
    databaseURL: "https://expensify-2018.firebaseio.com",
    projectId: "expensify-2018",
    storageBucket: "expensify-2018.appspot.com",
    messagingSenderId: "223986641024"
  };
  
  
firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((expense) => {
//         expenses.push({
//             id: expense.key, // key created by firebase
//             ...expense.val() // spread out the other properties on the object
//         });
//     })
//     console.log(expenses);
//   })
//   .catch((e) => {
//       console.log(e);
//   });


// child_removed - fires whenever something is removed, and gives us info on that removed item

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_changed - fires when a child is changed 

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// child_added - fires when a child is added, also fires once for each item that is already stored and re-runs for new expenses

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})


  database.ref('expenses')
    .on('value', (snapshot) => {
        console.log(snapshot)
        const expenses = [];

        snapshot.forEach((expense) => {
            expenses.push({
                id: expense.key, // key created by firebase
                ...expense.val() // spread out the other properties on the object
            });
          
        })
        console.log(expenses);
       
    }, (err) => {
        console.log(err);
    })


// const expenses = [{
//     title: 'Rent',
//     amount: '700'
// }, {
//     title: 'Car',
//     amount: '169'
// }, {
//     title: 'Utils',
//     amount: '100'
// }];


// expenses.forEach((expense) => {
//     database.ref('expenses').push(expense);
// })

// database.ref('notes').push({
//     title: "todo",
//     body: 'go for a run'
// })





// Whenever data changes, with on, the server will notify us of changes, we're 'subscribed' 
// Can also call 'off' to unsubscribe from changes from the server
// Don't want to use promises since they can only be resolved / rejected once. 
// So we use the callback pattern instead with the snapshot and the error handler 

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });


// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 2000)

// setTimeout(() => {
//     database.ref().update({
//         race: 'Alien'
//     })
// }, 10000)


// Only get the data once, not subscribed, use a promise

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: "Ryan",
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     single: false,
//     location: {
//         street: '141 N Franklin',
//         city: "Madison!"
//     }
// }).then(() => {
//     console.log('data saved')
// }).catch((e) => {
//     console.log('This failed', e)
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',  // weird syntax but needed for firebase to update city within the location object.
//     'location/city': 'Seattle'
// })



// to remove: 
// database.ref('single').remove();

// go two levels deep:
// database.ref('location/city').set("Madtown");

// add new property
// database.ref('attributes').set({
//     height: 68,
//     weight: 140
// });

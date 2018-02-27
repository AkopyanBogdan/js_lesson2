//switch
// const age = Number(prompt('Your age:'));

// switch (age) {
//     case 1:
//         alert('to young');
//         break;
//     case 35:
//         alert('Just right');
//         break;
//         case 100:
//             alert('To old');
//             break;
//     default:
//         alert('unknown');
// }
//////////////////////////////////////////////////////
//ternar operator
// const age = Number(prompt('Your age:'));

// const message = age >=18?'Adult human':'Child';

// let message;
// if(age>=18)
// {
//     message='Adult';
// }
// else
// {
//     message='Child';
// }
// alert(message);
//////////////////////////////////////////////////////
//loops
// for (let i = 0; i < 100; i++) 
// {
//     document.write(i + '<br>');
// }

//array
let cars = [];
let cars2 = [
        'Toyota Camry', 
        'Ford Mustang', 
        'Daewoo Lanos'
    ];
    
function prn(val)
{
    document.write(val + '<br>');
}

// cars.push('Toyota Camry');
// cars.push('Ford Mustang');
// cars.push('Daewoo Lanos');
cars[0] = 'Toyota Camry';
cars[1] = 'Ford Mustang';
cars[2] = 'Daewoo Lanos';
cars[10] = 'Ferrari LaFerrari';
// for (let i = 0; i < cars.length; i++) {
//     //if(cars[i] !== undefined)
//         prn(cars[i]);
// }
// cars.forEach(prn);
//anonimus function
cars.forEach(function(el) {
        document.write(el + '<br>');
});

let cb = function(el) {
        document.write(el + '<br>');
}

cars.forEach(cb);






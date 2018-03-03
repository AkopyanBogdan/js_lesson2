(function()
{
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
        // let cars = [];
        // let cars2 = [
        //         'Toyota Camry', 
        //         'Ford Mustang', 
        //         'Daewoo Lanos',
        //         'Ferrari LaFerrari'
        //     ];
            
        // let price = [
        //         30000,
        //         35000,
        //         100000,
        //         350000
        //         ];
         function prn(val)
         {
             document.write(val + '<br>');
         }
        
        // cars.push('Toyota Camry');
        // cars.push('Ford Mustang');
        // cars.push('Daewoo Lanos');
        // cars[0] = 'Toyota Camry';
        // cars[1] = 'Ford Mustang';
        // cars[2] = 'Daewoo Lanos';
        // cars[10] = 'Ferrari LaFerrari';
        // for (let i = 0; i < cars.length; i++) {
        //     //if(cars[i] !== undefined)
        //         prn(cars[i]);
        // }
        // cars.forEach(prn);
        //anonimus function
        // cars.forEach(function(el) {
        //         document.write(el + '<br>');
        // });
        
        // let cb = function(el) {
        //         document.write(el + '<br>');
        // }
        
        // cars.forEach(cb);
        
        // cars.forEach((el, i) => document.write(el + ' ' + i + '<br>'));
        
        //  cars2.forEach(function(el, i) {
        //          document.write(el + ':' + price[i] + '<br>');
        //  });
         /////////////////////////////////////////////
         //struct
         // let toyota = {};
         // toyota.name = 'Toyota Camry';
         // toyota.price = 10000;
         // toyota.drive = function() {
         //         prn(this.name + ' is running');
         // }
         
         // toyota.drive();
         
         // let ford = {
         //         name: 'Ford Mustang',
         //         price: 20000,
         //         drive: function() {
         //                prn(this.name + ' is running');
         //         }
         // }
         // ford.drive();
         
         ////////////////////////////////////////////////
         //Dictionary
        //  let weekCars = {};
        //  weekCars['Monday'] = 'Mercedes GLK';
        //  weekCars['Tuesday'] = 'Honda Pilot';
        //  weekCars['Wednesday'] = 'Ford Edge';
        //  weekCars['Thursday'] = 'Jeep Cherokee';
        //  weekCars['Friday'] = 'Volkswagen Tiguar';
         
        // // prn(weekCars['Tuesday']);
        
        // // for(let key in weekCars)
        // // {
        // //  prn(weekCars[key]);
        // // }
        
        // let cars = [
        //  {name: 'Toyota', price: 30000},
        //  {name: 'Ford', price: 20000},
        //  {name: 'Jeep', price: 10000},
        //  {name: 'ZAZ', price: 5000}
        //  ]
        //  cars.forEach((el, i) => prn(i + 1 + ') ' + el.name + ' price: ' + el.price + '<br>'));
         
         //////////////////////////////////////////////////
         //functions constructors
         function Car(name, price)
         {
            this.name = name;
            this.price = price;
            this.drive = function(){
             prn(this.name + ' is running!');
            }
            //return this; // not important. You can write: return this;
         }
         
         let toyota = new Car('Toyota', 20000);
         let ford = new Car('Ford', 25000);
         ford.drive();
         
         ///////in new js you can use keyword CLASS
         
        class SuperCar 
        {
         constructor(name, price)
          {
             this.name = name;
             this.price = price;
             this.drive = function()
              {
               prn(this.name + ' is running!');
              }
          }
        }
        
        let ferrari = new SuperCar('Ferrari', 40000);
        ferrari.drive();
})();






















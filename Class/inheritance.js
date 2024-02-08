// Inheritance in Class

class AbsMobile{

    constructor() {
        console.log('super constructor');
    }

    call(){
        console.log('Calling...');
    }

    sms(){
        console.log('sms...');
    }
}

class Mobile extends AbsMobile{

    constructor(width,height,color) {
        super(); /* The super() call is necessary because it ensures that the parent
        class's constructor is executed before the subclass's constructor */ 

        /* ensuring that the subclass inherits all necessary properties and behavior
        from its parent. This is crucial for maintaining the inheritance hierarchy
        and ensuring that the subclass functions correctly. */
        
        this.width = width;
        this.height = height;
        this.color = color;

    }

    switchOn(){
        console.log('Switching on..');
    }

    display() {
        console.log('width:',this.width,'height:',this.height,'color:',this.color);
    }
}

var mob1 = new Mobile(10,22,'Light blue');

// mob1.sms();
// mob1.switchOn();

mob1.display();
import { faker } from '@faker-js/faker';

faker.seed(100);


const contacts = [];

class Person {
	constructor() {
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.phoneNumber = faker.phone.phoneNumber('+91 ########');
		this.email = faker.internet.email();
	}
}
    if(!contacts.length){
        for(let i=0;i<50;i++){
            let person = new Person();
            contacts.unshift(person);
      }
    }
export default contacts;
import faker from 'faker';

export class Company {
    companyName: string; 
    catchPrhase: string; 
    location: {
        lat: number;
        lon: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPrhase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
        <div> 
        <h2>Company Name: ${this.companyName}</h2>
        <h3>Catchphrase: ${this.catchPrhase}</h3>
        </div>
        `
    }
}
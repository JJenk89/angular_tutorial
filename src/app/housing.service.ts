import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

@Injectable({
  providedIn: 'root',
})

export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]>
  {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const locationsJson = await data.json() ?? undefined;
    return locationsJson ?? [];
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted: First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);
  }
}
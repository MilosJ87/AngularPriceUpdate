import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ZlatneKovanice {
  id: string;
  Weight: number;
  Name: string;
  CountryOfOrigin: string;
  Manufactuer: string;
  Price: string;
}
export interface ZlatnePoluge{
  id: string;
  Weight: number;
  Name: string;
  CountryOfOrigin: string;
  Manufactuer: string;
  Price: string;
}
export interface KursnaLista{
  Apoen: string;
  Kupovni: string;
  Srednji: string;
  Prodajni: string;
  Naziv: string;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private apiUrl = 'https://priceupdaterwebapi.azurewebsites.net/api/Kovanice/GetKovanice';

  constructor(private http: HttpClient) {}

  getKovanice(): Observable<ZlatneKovanice[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<ZlatneKovanice[]>(this.apiUrl, { headers }).pipe(
      map((response: any[]) => response.map(item => this.mapToZlatneKovanice(item)))
    );
  }

  private mapToZlatneKovanice(item: any): ZlatneKovanice {
    return {
      id: item.id,
      Weight: item.weight,
      Name: item.name,
      CountryOfOrigin: item.countryOfOrigin,
      Manufactuer: item.manufactuer,
      Price: item.price
      };
     }

     private polugeUrl = 'https://priceupdaterwebapi.azurewebsites.net/api/Poluge/GetPoluge'

     getPoluge(): Observable<ZlatnePoluge[]>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.get<ZlatnePoluge[]>(this.polugeUrl, { headers }).pipe(
        map((response: any[]) => response.map(item => this.mapToZlatnePoluge(item)))
      );
      }
      private mapToZlatnePoluge(item: any): ZlatnePoluge {
        return {
          id: item.id,
          Weight: item.weight,
          Name: item.name,
          CountryOfOrigin: item.countryOfOrigin,
          Manufactuer: item.manufactuer,
          Price: item.price
          };
        }

      
      }

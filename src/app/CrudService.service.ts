import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



export class CrudService<T> {
    constructor(private http: HttpClient) {}
  
    get(endpoint: string): Observable<T[]> {
      return this.http.get<T[]>(endpoint);
    }
  
    create(endpoint: string, data: T): Observable<T> {
      return this.http.post<T>(endpoint, data);
    }
  
    update(endpoint: string, id: number, data: T): Observable<T> {
      return this.http.put<T>(`${endpoint}/${id}`, data);
    }
  
    delete(endpoint: string, id: number): Observable<void> {
      return this.http.delete<void>(`${endpoint}/${id}`);
    }
  }
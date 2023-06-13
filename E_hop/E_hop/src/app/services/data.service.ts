import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3000";

    constructor(private http: HttpClient) {
}

getAll() {
  return this.http.get(this.url + '/api/product');
}
  getById(id: string) {
    return this.http.get(this.url + '/api/product/' + id);
  }
  Delete(id: string) {
    return this.http.delete(this.url + '/api/product/' + id);
  }
  Update(id: string,credentials: any){
    return this.http.put(this.url + '/api/product/'+ id , credentials);
  }
  createProduct(credentials: any) {
    console.log(credentials)
    return this.http.post(this.url + '/api/product', credentials);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  obterUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/v1/users`);
  }
}
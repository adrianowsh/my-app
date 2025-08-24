import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable } from "rxjs";


@Injectable()
export class UserService {

  protected UrlUserService: string = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  obterUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.UrlUserService}/v1/users`);
  }
}
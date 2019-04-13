import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../model/Usuario";
import { HttpParams, HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public login(usr: Usuario): Observable<Usuario> {
    const body = new HttpParams()
      .set("usr", usr.nombreUsuario + "")
      .set("pass", usr.claveUsuario);
    return this.http.get<Usuario>(environment.login, { params: body });
  }

  public async autenticar(username: string, password: string) {
    let user: Usuario = new Usuario();
    user.nombreUsuario = username;
    user.claveUsuario = password;
    console.log(user);
    let resp:any = await this.login(user).toPromise();
    console.log(resp);
    if (resp) {
      return {
        message: "Autenticacion correcta",
        user: {
          username: resp.nombreUsuario,
          hobbie: ":)"
        }
      };
    } else {
      return {
        message: "Autenticacion fallida",
        user: {
          username: "",
          hobbie: ""
        }
      };
    }
  }
}

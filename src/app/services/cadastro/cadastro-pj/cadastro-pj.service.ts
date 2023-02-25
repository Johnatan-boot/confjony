import { CadastroPj } from './../../../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';


@Injectable()
export class CadastroPjService {

  private readonly PATH: string = 'cadastro-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
  	  return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }

}

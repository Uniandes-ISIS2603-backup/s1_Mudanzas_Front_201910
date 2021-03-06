import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Conductor } from './conductor';
import { ConductorDetail } from './conductor-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';
const conductores = '/conductores';

/**
* The service provider for everything related to conductores
*/
@Injectable()
export class ConductorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of conductores retrieved from the API
    * @returns The list of conductores in real time
    */
    getConductores(login: string): Observable<Conductor[]> {
        return this.http.get<Conductor[]>(API_URL + proveedores + '/' + login + conductores);
    }


    /**
    * Updates an conductor
    * @param conductor The conductor's information updated
    * @returns The confirmation that the conductor was updated
    */
    updateConductor(conductor: Conductor, login: string): Observable<Conductor> {
        return this.http.put<Conductor>(API_URL + proveedores + '/' + login + conductores, conductor);
    }

    createConductor(conductor: Conductor, login: string): Observable<Conductor> {
        return this.http.post<Conductor>(API_URL + proveedores + '/' + login + conductores, conductor);
    }

    getConductorDetail(login: string, idConductor: number): Observable<ConductorDetail> {
        return this.http.get<ConductorDetail>(API_URL + proveedores + '/' + login + conductores + '/' + idConductor);

    }

    deleteConductor(login: string, idConductor:number ):Observable<void>{
        return this.http.delete<void>(API_URL + proveedores + '/' + login + conductores + '/'+ idConductor )
    }
}
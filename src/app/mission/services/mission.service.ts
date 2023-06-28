import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MissionDto} from "../models/mission.model";
import {Observable} from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private httpClient: HttpClient) { }

  postMissionDto(mission: MissionDto): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/mission/`,
      mission
    )
  }
}

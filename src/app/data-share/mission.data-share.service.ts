import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {StateVector} from "../mission/models/mission.model";

@Injectable({
  providedIn: 'root'
})
export class MissionDataShareService {

  missionSubject = new ReplaySubject<StateVector[]>();
  $mission = this.missionSubject.asObservable();
  constructor() { }

  update_mission(state_vectors: StateVector[]): void {
    this.missionSubject.next(state_vectors)
  }
}

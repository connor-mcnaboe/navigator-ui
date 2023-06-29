import {Component, OnInit} from '@angular/core';
import {MissionDataShareService} from "../../../data-share/mission.data-share.service";
import {StateVector} from "../../models/mission.model";

@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.scss']
})
export class WorldViewComponent implements OnInit{
  state_data: StateVector[];

  constructor(private missionDataShare: MissionDataShareService) {
  }

  ngOnInit(): void {
    this.missionDataShare.$mission.subscribe((state: StateVector[]) => {
      console.log(state)
      this.state_data = state
      }
    )
  }
}

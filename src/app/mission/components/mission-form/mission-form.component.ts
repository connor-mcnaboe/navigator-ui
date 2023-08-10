import {Component, OnInit} from '@angular/core';
import {MissionService} from "../../services/mission.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CentralBody, CoordinateSystem, OdeSolver} from "../../enums/mission.enum";
import {StateVector} from "../../models/mission.model";
import {MissionDataShareService} from "../../../data-share/mission.data-share.service";

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrls: ['./mission-form.component.scss']
})
export class MissionFormComponent implements OnInit {
  missionForm: FormGroup;
  centralBodies: string[] = Object.values(CentralBody);
  coordinateSystems: string[] = Object.values(CoordinateSystem);
  odeSolvers: string[] = Object.values(OdeSolver);

  constructor(private missionService: MissionService,
              private formBuilder: FormBuilder,
              private missionDataShare: MissionDataShareService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.missionForm = this.formBuilder.group({
      epoch: 0,
      duration: 0,
      orbit: this.formBuilder.group({
        kepler_elements: this.formBuilder.group({
          semi_major_axis: 0,
          eccentricity: 0,
          inclination: 0,
          longitude_of_ascending_node: 0,
          argument_of_periapsis: 0,
          true_anomaly: 0
        }),
        central_body: CentralBody.EARTH,
        coordinate_system: CoordinateSystem.EarthCenteredInertial,
        ode_solver: OdeSolver.RungeKutta4
      })
    });
  }

  submitMission(): void {
    this.missionService.postMissionDto(this.missionForm.value)
      .subscribe((state_vectors: StateVector[])=> {
        this.missionDataShare.update_mission(state_vectors)
      })
  }
}

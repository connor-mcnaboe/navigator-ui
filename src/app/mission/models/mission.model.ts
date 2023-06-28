import {CentralBody, CoordinateSystem, OdeSolver} from "../enums/mission.enum";

export interface MissionDto {
  orbit: OrbitDto
  epoch: number
  duration: number
}

export interface OrbitDto {
  kepler_elements: KeplerElementsDto,
  central_body: CentralBody,
  coordinate_system: CoordinateSystem,
  ode_solver: OdeSolver
}

export interface KeplerElementsDto {
   semi_major_axis: number,
   eccentricity: number,
   inclination: number,
   longitude_of_ascending_node: number,
   argument_of_periapsis: number,
   true_anomaly: number,
}

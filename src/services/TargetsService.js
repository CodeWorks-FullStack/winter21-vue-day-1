import { AppState } from "../AppState"

class TargetsService {
  addTarget(target) {
    AppState.targets.push(target)
  }
}

export const targetsService = new TargetsService()
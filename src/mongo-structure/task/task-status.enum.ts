export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const allowedTaskStatusList = [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

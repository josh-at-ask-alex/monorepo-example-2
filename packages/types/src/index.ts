export type Workspace = {
  name: string
  version: string
  type: WorkspaceType
}

export enum WorkspaceType {
  Hot,
  Cold,
}

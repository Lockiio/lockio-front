export interface Lockio {
  id: number;
  blockId: number;
  localId: number;
  size: "SMALL" | "MEDIUM" | "LARGE";
  status: "AVAILABLE" | "OCCUPIED" | "DISABLED" | "PRERESERVED";
}

export interface Block {
  id: number;
  name: string;
  coordinate: string;
  status: "AVAILABLE" | "DISABLED";
  privacy: "PUBLIC" | "PRIVATE" | "MIXED";
  lockios: Lockio[];
  url: string;
}

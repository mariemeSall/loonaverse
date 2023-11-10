export interface StreamState {
  playing: boolean;
  duration: number | undefined;
  currentTime: number | undefined;
  canplay: boolean;
  error: boolean;
  ended: boolean;
}

export enum AppState {
  COVER = 'COVER',
  LOADING = 'LOADING',
  INVITATION = 'INVITATION',
  PRANK = 'PRANK'
}

export interface AudioControlProps {
  isPlaying: boolean;
  type: 'classic' | 'alarm';
}
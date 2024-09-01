export type ColorType = "red" | "aqua" | "lavender";
export type SessionType = "pomodoro" | "shortBreak" | "longBreak";
export type FontType = "ks" | "rs" | "sm";
export interface SettingsType {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

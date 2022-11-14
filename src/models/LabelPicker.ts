export interface LaborPicker {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

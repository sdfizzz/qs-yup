export type BaseControlProps<TValue = unknown> = {
  value?: TValue;
  onChange: (value?: TValue) => void;
};

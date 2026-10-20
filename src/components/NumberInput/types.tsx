export interface NumberInputProps extends React.HTMLAttributes<HTMLInputElement> {
    min: number,
    max: number,
    step: number,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    children: React.ReactNode
}
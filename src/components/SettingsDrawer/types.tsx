export interface SettingsDrawerProps {
    settingsFor: string,

    gridScaleValue: number,
    gridScaleSetValue: React.Dispatch<React.SetStateAction<number>>,

    petalOrderValue: number,
    petalOrderSetValue: React.Dispatch<React.SetStateAction<number>>,

    layerOrderValue: number,
    layerOrderSetValue: React.Dispatch<React.SetStateAction<number>>,
}
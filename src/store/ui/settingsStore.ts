import { create } from 'zustand';

interface SettingsUiState {
    isFormDirty: boolean;
    setFormDirty: (isDirty: boolean) => void;
    returnUrl: string;
    setReturnUrl: (url: string) => void;
}

export const useSettingsUiStore = create<SettingsUiState>((set) => ({
    isFormDirty: false,
    setFormDirty: (isDirty) => set({ isFormDirty: isDirty }),
    returnUrl: '/dashboard',
    setReturnUrl: (url) => set({ returnUrl: url }),
}));

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { onboardingSteps } from '@/config/onboarding';

interface OnboardingState {
    // State
    currentMilestone: number;
    isOpen: boolean;
    isCompleted: boolean;
    showWelcome: boolean;
    hasSeenOnboardingAt: number | null; // Timestamp

    // Actions
    open: () => void;
    close: () => void;
    nextStep: () => void;
    complete: () => void;
    reset: () => void;
    dismissWelcome: () => void;

    // Helpers
    getStepNumber: () => number;
    syncProgress: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
    persist(
        (set, get) => ({
            currentMilestone: 1,
            isOpen: false,
            isCompleted: false,
            showWelcome: false,
            hasSeenOnboardingAt: null,

            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),

            nextStep: () => {
                const current = get().currentMilestone;
                if (current < onboardingSteps.length) {
                    set({ currentMilestone: current + 1 });
                } else {
                    get().complete();
                }
            },

            complete: () => {
                set({
                    isCompleted: true,
                    isOpen: false,
                    showWelcome: true,
                    hasSeenOnboardingAt: Date.now()
                });
            },

            reset: () => set({
                currentMilestone: 1,
                isCompleted: false,
                hasSeenOnboardingAt: null
            }),

            dismissWelcome: () => set({ showWelcome: false }),

            getStepNumber: () => get().currentMilestone,

            syncProgress: () => {
                // In a real app, you might sync with backend here
                // For now, local state is truth
            }
        }),
        {
            name: 'elysian-onboarding-storage',
            partialize: (state) => ({
                currentMilestone: state.currentMilestone,
                isCompleted: state.isCompleted,
                hasSeenOnboardingAt: state.hasSeenOnboardingAt
                // We don't persist open state or welcome animation
            }),
        }
    )
);

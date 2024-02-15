import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeStoreProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeStoreProps>()(
    persist(
        (set) => ({
            theme: 'light',
            setTheme: (theme: 'light' | 'dark') => set({ theme }),
            toggleTheme: () => set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

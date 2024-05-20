"use client";
import { create } from "zustand";

type Language = "EN" | "ES";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "EN",
  setLanguage: (language: Language) => set({ language }),
}));

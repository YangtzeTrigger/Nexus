import { create } from 'zustand'

export const useConfigStore = create((set, get) => ({
  // ── Provider config ─────────────────────────────────────────────────────
  primary_provider: 'anthropic',
  primary_model:    'claude-sonnet-4-20250514',
  secondary_provider: 'openai',
  secondary_model:    'gpt-4o',

  // ── System identity ─────────────────────────────────────────────────────
  phase:       'Phase 1',
  system_name: 'Nexus',

  // ── Key accessors (reads from Vite env — never stored in state) ──────────
  // Keys are sourced from .env (VITE_ANTHROPIC_API_KEY, VITE_OPENAI_API_KEY)
  // and are never written into the Zustand store.
  getAnthropicKey() {
    return import.meta.env.VITE_ANTHROPIC_API_KEY ?? ''
  },

  getOpenAIKey() {
    return import.meta.env.VITE_OPENAI_API_KEY ?? ''
  },

  // ── Mutators ─────────────────────────────────────────────────────────────
  setPrimaryModel(model) {
    set({ primary_model: model })
  },

  setSecondaryModel(model) {
    set({ secondary_model: model })
  },
}))

import AppShell from './components/AppShell'

/**
 * App — root component.
 *
 * Thin wrapper around AppShell. Zustand stores are module-scoped
 * and require no React context provider.
 */
export default function App() {
  return <AppShell />
}

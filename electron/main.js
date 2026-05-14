require('dotenv').config()
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// ── Window ──────────────────────────────────────────────────────────────────

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#0d0d1a',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  // app.isPackaged is false when running via `electron .` or `npm run dev`.
  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools({ mode: 'detach' })
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

// ── App lifecycle ────────────────────────────────────────────────────────────

app.whenReady().then(() => {
  registerIpcHandlers()
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// ── IPC handlers ─────────────────────────────────────────────────────────────
//
// All calls from the renderer go through window.nexus.invoke(channel, payload).
// Main process handles them here, makes any Node-side calls (file system,
// external HTTPS, etc.) and returns the result.

function registerIpcHandlers() {

  // ── Elysium runtime handoff ──────────────────────────────────────────────
  //
  // Sends a bounded task phase to the Elysium runtime at aegisnet.org.uk.
  // Routed through the main process to avoid CORS and keep auth headers
  // out of the renderer.
  //
  // TODO: confirm with Jason:
  //   1. What is the endpoint path? e.g. POST /handoff or POST /api/run
  //   2. What auth does it expect? Bearer token? API key header? Basic auth?
  //   3. Does it use the exact payload shape from the OpenClaw spec, or different?
  //   4. What does the response object look like?
  ipcMain.handle('elysium:handoff', async (_event, payload) => {
    const baseUrl = process.env.ELYSIUM_URL || 'https://elysium.aegisnet.org.uk'
    const apiKey  = process.env.ELYSIUM_API_KEY || ''

    // PLACEHOLDER — replace endpoint path and auth header once confirmed
    const response = await fetch(`${baseUrl}/handoff`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && { 'Authorization': `Bearer ${apiKey}` }),
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => response.statusText)
      throw new Error(`Elysium ${response.status}: ${text}`)
    }

    return response.json()
  })

}

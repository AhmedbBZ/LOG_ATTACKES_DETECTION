import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let pythonProcess;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL("http://localhost:5000"); // Load Flask server

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function startPythonServer() {
    const pythonScriptPath = path.join(__dirname, 'application.py');
    pythonProcess = spawn('python', ['-u', pythonScriptPath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python Server Output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Server Error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python Server exited with code ${code}`);
    });
}

app.on('ready', () => {
    createWindow();
    startPythonServer();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('will-quit', () => {
    if (pythonProcess) {
        pythonProcess.kill();
    }
});

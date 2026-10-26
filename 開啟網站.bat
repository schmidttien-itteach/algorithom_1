@echo off
setlocal
cd /d "%~dp0"
where npm >nul 2>nul
if %errorlevel%==0 goto use_npm
set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" goto missing_node
if not exist "node_modules\vite\bin\vite.js" goto missing_deps
"%NODE_EXE%" "%~dp0node_modules\vite\bin\vite.js" --host 127.0.0.1 --open
pause
exit /b
:use_npm
if not exist "node_modules\vite\bin\vite.js" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 goto failed
)
call npm run start -- --host 127.0.0.1 --open
pause
exit /b
:missing_node
echo Node.js was not found. Install Node.js 20.19 or later, then run this file again.
pause
exit /b 1
:missing_deps
echo Project dependencies are missing. Open a terminal in this folder and run: npm install
pause
exit /b 1
:failed
echo Dependency installation failed.
pause
exit /b 1

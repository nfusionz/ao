'use strict';
const settings = require('electron-settings');
const {touchFileSync} = require('./util');

touchFileSync(settings.file());

settings.setAll({
  alwaysOnTop: settings.get('alwaysOnTop', false),
  autoLaunch: settings.get('autoLaunch', false),
  autoNightMode: settings.get('autoNightMode', false),
  hideTray: settings.get('hideTray', false),
  lastWindowState: {
    x: settings.get('lastWindowState.x'),
    y: settings.get('lastWindowState.y'),
    width: settings.get('lastWindowState.width'),
    height: settings.get('lastWindowState.height')
  },
  launchMinimized: settings.get('launchMinimized', false),
  menuBarVisible: settings.get('menuBarVisible', true),
  mode: {
    black: settings.get('mode.black', false),
    dark: settings.get('mode.dark', false),
    sepia: settings.get('mode.sepia', false)
  },
  sideBarHidden: settings.get('sideBarHidden', false),
  updateCheckPeriod: settings.get('updateCheckPeriod', '4'),
  useGlobalShortcuts: settings.get('useGlobalShortcuts', false),
  zoomFactor: settings.get('zoomFactor', 1)
});

module.exports = settings;

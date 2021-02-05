import * as vscode from 'vscode'

export function activate(_context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("kb-only start...");
}

export function deactivate() { }
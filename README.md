# VS-Code-PSoC-Tools
Better integration of VS Code extensions for use with PSoC / Onethinx module

<img src="../main/assets/otxVScodeAdd.png?raw=true" width="295px">

This guide will help you adding better integration of the VS Code extensions on top of the Onethinx VS Code Pack.

- ## Prerequisites:
  - VS Code
  - The Onethinx VS Code Pack <br>
    https://github.com/onethinx/VSCode_OnethinxPack_Linux
    https://github.com/onethinx/VSCode_OnethinxPack_Windows
    https://github.com/onethinx/VSCode_OnethinxPack_macOS
  
- ## Installation:
  1. Add the [Powertools extension](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools) to VS Code
  2. Copy the [otxCommand.js file](https://raw.githubusercontent.com/onethinx/VS-Code-PSoC-Tools/main/otxCommands.js?token=AKTYWDTBJYQSPMP4KPLDFO27WT7JU) to the VS Code Pack script folder <br> (usually [volume]/VSCode_OnethinxPack_macOS/config/scripts)
  3. Add the following configuration to the settings.json file:
      - globally: View >> Command Pallete >> type 'settings' >> Open Settings (JSON)
      - or per project: project folder >> .vscode folder >> edit (or add) settings.json
    <br>

    ```
    {
      << other settings >>
      "cmake.statusbar.advanced": {
        "buildTarget": { "visibility": "hidden" },
        "build": { "visibility": "hidden" },
        "debug": { "visibility": "hidden" },
        "launch": { "visibility": "hidden" }
      },
      "ego.power-tools": {
        "commands": {
          "otx.preLaunch": {
            "script": "${ONETHINX_PACK_LOC}/config/scripts/otxCommands.js",
          },
          "otx.clean": {
            "script": "${ONETHINX_PACK_LOC}/config/scripts/otxCommands.js",
            "button": { "text": "$(references) Clean-Reconfigure" },
          },
          "otx.build": {
            "script": "${ONETHINX_PACK_LOC}/config/scripts/otxCommands.js",
            "button": { "text": "$(file-binary) Build" },
          },
          "otx.run": {
            "script": "${ONETHINX_PACK_LOC}/config/scripts/otxCommands.js",
            "button": { "text": "$(debug-start) Build-and-Launch" },
          }
        }
      }
    }
    ```
  4. Save the settings.
  5. Edit launch.json ( project folder >> .vscode folder >> launch.json) and update (or add) the preLaunchTask to the configuration(s):
  <br>`"preLaunchTask": "${command:otx.preLaunch}"`

exports.execute = async (args) => {
    var ret = null;
    const vscode = args.require('vscode');
    switch (args.command)
    {
        case 'otx.preLaunch':
            ret = await otxPreLaunch(vscode); 
            break;
        case 'otx.clean':
            ret = await otxClean(vscode);
            break;
        case 'otx.build':
                ret = await otxBuild(vscode);
                break;
        case 'otx.run':
            ret = await otxRun(vscode);
            break;
    }
    return ret;
};

otxPreLaunch = async (vscode) => {
    var ret = await vscode.commands.executeCommand('cmake.build');
    if (ret == 0) return '';
    vscode.commands.executeCommand('workbench.action.problems.focus', 'CMake/Build');
    vscode.window.showErrorMessage("Your Onethinx code didn't built well...\n\nTry some more :-)", { modal: true });
    return null;
};

otxClean = async (vscode) => {
    var ret = await vscode.commands.executeCommand('cmake.cleanConfigure');
    return ret;
};

otxBuild = async (vscode) => {
    var ret = await vscode.commands.executeCommand('cmake.build');
    if (ret == 0) return '';
    vscode.commands.executeCommand('workbench.action.problems.focus', 'CMake/Build');
    vscode.window.showErrorMessage("Your Onethinx code didn't built well...\n\nTry some more :-)");
    return null;
};

otxRun = async (vscode) => {
    var ret = await vscode.commands.executeCommand('workbench.action.debug.run');
    return ret;
};

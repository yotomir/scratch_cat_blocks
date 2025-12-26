(function() {
    const checkBlockly = setInterval(() => {
        if (window.Blockly && window.Blockly.setCatMode) {
            window.Blockly.setCatMode(true);
            // Опресняваме работната площ, за да се появят ушите веднага
            const workspace = window.Blockly.getMainWorkspace();
            if (workspace) workspace.refreshRedraw();
            
            clearInterval(checkBlockly);
            console.log("Cat Mode Activated!");
        }
    }, 500);
})();

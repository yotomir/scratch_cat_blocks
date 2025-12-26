(function() {
    const checkBlockly = setInterval(() => {
        // Проверяваме дали Scratch е заредил Blockly графичната среда
        if (window.Blockly && window.Blockly.setCatMode) {
            window.Blockly.setCatMode(true);
            
            // Форсираме прерисуване, за да се появят ушите веднага
            const workspace = window.Blockly.getMainWorkspace();
            if (workspace) {
                workspace.refreshRedraw();
            }
            
            clearInterval(checkBlockly);
            console.log("Cat Mode Activated!");
        }
    }, 500);
})();

function onOpen(e) {
    addMenu();
}

//Populate Main Menu

function addMenu() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Main Menu')
        .addSubMenu(ui.createMenu('Add New Section')
            .addSubMenu(ui.createMenu('Tables')
                .addItem('Raw Data Tables', 'menuRawDataTables')
                .addItem('Calculation Tables', 'menuCalculationTables')
                .addItem('Chart Tables', 'menuChartTables')
                .addItem('Result Tables', 'menuResultTables') )
            .addSubMenu(ui.createMenu('Chats")
                .addItem('Line Graph', 'menuLineGraph')
                .addItem('Scatter Plot', 'menuScatterPlot') )
            .addSeparator() )
        .addToUi();
}

function menuRawDataTables() {
    var formRawDataTables = HtmlService.createHtmlOutputFromFile('formRawDataTables').setTitle('formRawDataTables');
    SpreadsheetApp.getUi()
        .showModalDialog(formRawDataTables, "Add Raw Data Table Section");
}

function menuCalculationTables() {
    var formCalculationTables = HtmlService.createHtmlOutputFromFile('formCalculationTables').setTitle('formCalculationTables');
    SpreadsheetApp.getUi()
        .showModalDialog(formCalculationTables, "Add Calculation Table Section");
}

function menuChartTables() {
    var formChartTables = HtmlService.createHtmlOutputFromFile('formChartTables').setTitle('formChartTables');
    SpreadsheetApp.getUi()
        .showModalDialog(formChartTables, "Add Chart Table Section");
}

function menuResultTables() {
    var formResultTables = HtmlService.createHtmlOutputFromFile('formResultTables').setTitle('formResultTables');
    SpreadsheetApp.getUi()
        .showModalDialog(formResultTables, "Add Result Table Section");
}

function menuLineGraph() {
    var formLineGraph = HtmlService.createHtmlOutputFromFile('formLineGraph').setTitle('formLineGraph');
    SpreadsheetApp.getUi()
        .showModalDialog(formLineGraph, "Add Line Graph Section");
}

function menuScatterPlot() {
    var formScatterPlot = HtmlService.createHtmlOutputFromFile('formScatterPlot').setTitle('formScatterPlot');
    SpreadsheetApp.getUi()
        .showModalDialog(formScatterPlot, "Add Scatter Plot Section");
}
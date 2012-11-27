// namespace the HadoopJS application
(function () {
    "use strict";
    window.HadoopJS = window.HadoopJS || {};

    // initialise the application
    window.HadoopJS = {
        // initialise everything here
        initialise : function(options) {
            // init here
            console.log('Started');

            // create our analytic library object and its corresponding view
            this.analyticLibrary = new AnalyticLibrary();        
            this.analyticLibraryView = new AnalyticLibraryTable({collection : this.analyticLibrary});
            
            // our libraries of data sets
            this.datasetLibrary = new DatasetLibrary();

        },
        
        // render all our models to their views
        renderAll : function() {
            this.analyticLibraryView.render();
        },
    };

}());

// static startup methods
HadoopJS.initialise();


// Model for the modules is:
//
// HadoopJS
// --> Analytics
// --> Datasets
// --> ...
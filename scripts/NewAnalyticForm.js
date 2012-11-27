
// DatasetSelectionView - a simple view for dataset selection in a form
var NewAnalyticFormView = Backbone.View.extend({    
    // initialise and bind the model change events
    initialize: function(){
        this.model.bind('change', this.render, this);        
    },
    
    // the render method for the table
    render : function() {
        var model=this.model;

        // fill in the fields where available
        $("#modal-new_analytic_name").val(model.get("name"));
        $("#modal-new_analytic_description").val(model.get("description"));
        $("#modal-new_analytic_classification").val(model.get("classification"));

        // create the multiple options element
        d3.select("#modal-new_analytic-dataset_selection")
            // construct a row for every model in the collections
            .selectAll("option")
            .data(HadoopJS.datasetLibrary.models)
            .enter()
                .append("option")
                // set the id for each row to point to the model
                .attr("id", function(dataset, i) {
                    return dataset.get("_id");
                })
                .text(function(dataset, i) {
                   return dataset.get("name"); 
                });
                    
        // supports chaining
        return this;
    },

    // setup the event handling for selection in this view
    events: {
//        "click #analytics-new_analytic":  "newAnalytic",        // .....
    }
});


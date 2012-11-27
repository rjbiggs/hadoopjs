
// Dataset Object
var Dataset = Backbone.Model.extend({
    "idAttribute" : "_id",

    "defaults" : {
//        selected : undefined, // default is not selected
    }
});


// DatasetLibrary -  a collection of Dataset objects
var DatasetLibrary = Backbone.Collection.extend({
  model: Dataset
});



// DatasetSelectionView - a simple view for dataset selection in a form
var DatasetSelectionView = Backbone.View.extend({    
    // initialise and bind the model change events
    initialize: function(){
        this.collection.bind('change', this.render, this);        
    },
    
    // the render method for the table
    render : function() {
        var collection=this.collection;
        
        // select the table element
        d3.selectAll(this.$el)
            // construct a row for every model in the collections
            .selectAll("option")
            .data(model.models)
            .enter()
                .append("option")
                // set the id for each row to point to the model
                .attr("id", function(model, i) {
                    return model.get("_id");
                })
                .text(function(model, i) {
                   return model.get("name"); 
                });
                    
        // supports chaining
        return this;
    },

    // setup the event handling for selection in this view
    events: {
//        "click #analytics-new_analytic":  "newAnalytic",        // .....
    }
});


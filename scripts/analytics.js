

// Analytic Object
var Analytic = Backbone.Model.extend({
    "idAttribute" : "_id",

    "defaults" : {
        selected : undefined,     // default is not selected
        datasets : [],            // empty datasets by default
    }
});


// AnalyticLibrary -  a collection of Analytic objects
var AnalyticLibrary = Backbone.Collection.extend({
  model: Analytic
});

// AnalyticLibraryTable - the main table view for the Analytic Library
var AnalyticLibraryTable = Backbone.View.extend({
    // default single HTML element (the table)
    el : $("#analytics_table"),
    
    // initialise and bind the model change events
    initialize: function(){
        this.collection.bind('change', this.render, this);        
    },
    
    // the render method for the table
    render : function() {
        var collection=this.collection;
        
        // select the table element
        d3.select("#analytics_table_body")
            // construct a row for every model in the collections
            .selectAll("tr")
            .data(collection.models)
            .enter()
                .append("tr")
                // set the id for each row to point to the model
                .attr("id", function(model, i) {
                    return model.attributes._id;
                })                
                // select a cell for every attribute in the model, omitting the _id field
                .selectAll("td")
                .data(function(model, i) {
                    return d3.entries(_.omit(model.attributes, "_id"));
                })
                .enter()
                    .append("td")
                    .each(function(attribute, ii) {                    
    
                        // check box for each analytic
                        if (attribute.key === "selected") {
                            var input=d3.select(this)
                                .append("input")
                                .attr("type", "checkbox")
                                .property("checked", attribute.value)
                                .on("click", function(d, i) {
                                    var id=$(this).parents("tr").attr("id"); // find the TR parent with the id
                                    collection.get(id).set("selected", $(this).attr("checked"), {silent : true}); // now find the model in the collection and 
                                });
                        }
                        // if its a dataset, display the elements individually
                        else if (attribute.key === "datasets") {
                            d3.select(this)
                                .selectAll("p")
                                .data(attribute.value)
                                .enter()
                                    .append("p")
                                    .text(function(ddd, iii) {
                                        return ddd.name;
                                    });
    
                        } else {
                            // otherwise just render the atttribute value
                            d3.select(this)
                                .text(attribute.value);
                        }    
                    });
                    
        // supports chaining
        return this;
    },

    // setup the event handling for the analytic table view    
    events: {
        "click #analytics-new_analytic":  "newAnalytic",        // new analytic button
        "click #analytics-schedule_analytic":  "scheduleAnalytic",        // schedule button
        "click #analytics-edit_analytic":  "editAnalytic",        // edit button
        "click #analytics-view_analytic":  "viewAnalytic",        // view source button
        "click #analytics-trash_analytic":  "trashAnalytic",        // trash button
        "click #analytics-play_analytic":  "playAnalytic",        // play button
    },
    
    // new Analytic button pressed
    newAnalytic : function(e) {
        e.preventDefault();

        // render the modal form
        $('#modal-new_analytic').modal('show');
        
        // ceate a new model for this form
        var newModel = new Analytic({name : "test"});
        
        // create a new view for this model
        var modelNewAnalyticFormView = new NewAnalyticFormView({model : newModel, el : $("#modal-new_analytic")});
        
        // render the form
        modelNewAnalyticFormView.render();
    },
    
    // schedule button pressed
    scheduleAnalytic : function(e) {
    },
    
    // edit analytic
    editAnalytic : function(e) {
    },
    
    // view analytic
    viewAnalytic : function(e) {
    },
    
    // trash
    trashAnalytic : function(e) {
    },
    
    // play
    playAnalytic : function(e) {
    }
});


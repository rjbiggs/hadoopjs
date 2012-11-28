
// <!-- Analytic library test data -->



// model instance
var targetFinder = new Analytic({
    _id : "1",
    name : "Target finder",
    description : "Finds targets within a simple data set",
    owner : "jdbanni",
    datasets : [{
        id : "1",
        name : "DNS data"
    }, {
        id : "2",
        name : "Geo data"
    }],
    classification : "Unclassified"    
});

// model instance
var dnsSummary = new Analytic({
    _id : "2",
    name : "DNS summary by hostname",
    description : "Summarises the amount of DNS records per host name",
    owner : "jdbanni",
    datasets : [{
        id : "1",
        name : "DNS data"
    }],
    classification : "Unclassified"    
});

// model instance
var dnsCount = new Analytic({
    _id : "3",
    name : "DNS request counts by day",
    description : "For each day, summarises the number of DNS requests made",
    owner : "jdbanni",
    datasets : [{
        id : "1",
        name : "DNS data"
    }],
    classification : "Unclassified"    
});

// add the models to the collection
HadoopJS.analyticLibrary.add(targetFinder);
HadoopJS.analyticLibrary.add(dnsSummary);
HadoopJS.analyticLibrary.add(dnsCount);



// <!-- Our Dataset test data -->

var ds1 = new Dataset({
    _id : "1",
    name : "DNS data",
    description : "A whole load of DNS data" 
});
var ds2 = new Dataset({
    _id : "2",
    name : "GEO data",
    description : "A whole load of GEO data" 
});

HadoopJS.datasetLibrary.add(ds1);
HadoopJS.datasetLibrary.add(ds2);




// now render
HadoopJS.renderAll();




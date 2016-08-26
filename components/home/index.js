'use strict';

app.home = kendo.observable({
    isVisible:true,
 
   
    onShow: function() {

       $("#divScheduler").kendoScheduler
({
    date: new Date(),
    startTime: new Date("2013/11/27 07:00 AM"),
    endTime: new Date("2013/11/27 06:00 PM"),
    height: "600",
    selectable: true,
    views: [
        "day",
        { type: "workWeek", selected: true },
        "week",
        "month",
        "agenda"
    ],

    
    resources: [
        {
            field: "CommertialRepresentativeId", // The field of the scheduler event which contains the resource identifier
            title: "Representante Comercial", // The label displayed in the scheduler edit form for this resource
            dataSource: [
                {
                    text: "Representante 1", // Text of the resource instance
                    value: 1, // Identifier of the resource instance, use that value to assign an event to this instance.
                    color: "#ff0000" // Used as the background of events assigned to this resource.
                },
            ],
            multiple: false // Indicate the this is a multiple instance resource
        }
    ]

});

    },
    afterShow: function() {}
});


// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home
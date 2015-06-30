$(function() {


var getColData = {
  "status": ['Open', 'Not started', 'xxx'],
  "type": ['Application', 'Update', 'xxx'],
  "nationality": ['USA', 'JPN', 'AUS', 'CAN', 'xxx']
};

  $.extend($.tablesorter.themes.bootstrap, {
    table      : 'table',
    caption    : 'caption',
    header     : 'bootstrap-header', 
    sortNone   : 'bootstrap-icon-unsorted',
    sortAsc    : 'icon-chevron-up glyphicon glyphicon-chevron-up',   
    sortDesc   : 'icon-chevron-down glyphicon glyphicon-chevron-down'
  });


  $("#dataTable").tablesorter({
    theme : "bootstrap",
    headerTemplate : '{content} {icon}',
    widgets : [ "uitheme", "filter", "zebra" ],
    dateFormat : 'ddmmyyyy',
    widgetOptions : {
      zebra : ["even", "odd"],
      filter_reset : ".reset",
      filter_external : '.search',
      //filter_hideFilters : true,
      filter_saveFilters : true,
      filter_serversideFiltering : false,
      filter_formatter : {

        // Date (two inputs)
        '.col-date' : function($cell, indx){
          return $.tablesorter.filterFormatter.uiDatepicker( $cell, indx, {
            // from : '08/01/2013', // default from date
            // to   : '1/18/2014',  // default to date
            changeMonth : true,
            changeYear : true
          });
        }
      },
      filter_placeholder : {
        from : 'From...',
        to   : 'To...'
      },
     filter_selectSource : {
          '.col-status' : function(table, column) {return getColData.status;},
          '.col-type' : function(table, column) {return getColData.type;},
          '.col-nationality' : function(table, column) {return getColData.nationality;}
      }
 
    }
  
  });
   
});



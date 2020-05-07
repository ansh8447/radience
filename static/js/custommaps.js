$(document).ready(function() {
    "use strict";
  
    $('ul.nav > li').click(function(e) {
      e.preventDefault();
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');
    });
  });

//Connecting to the main database 
function getSystemInfo() {
        $.ajax({
        url: "http://127.0.0.1:5000/systeminfo",     
        type: 'POST',
        success: function(data){
            // var obj= JSON.parse(result);
            // console.log(data.results);
            console.log(data)
            document.getElementById('pmu').innerHTML = data.data[0].key_val;
            document.getElementById('iso').innerHTML = data.data[1].key_val;
            document.getElementById('sub').innerHTML = data.data[2].key_val;
            document.getElementById('smart').innerHTML = data.data[3].key_val;
            document.getElementById('feeder').innerHTML = data.data[4].key_val;
            document.getElementById('oil').innerHTML = data.data[5].key_val;
        }    
    });
}
getSystemInfo()



var cbdetails = $('#cbdetails').DataTable( {
    paging: true,
    "sDom":"tipr",
    // autowidth: true,
    pageLength : 3,
    // order: [[3, 'desc']],
    "ajax": {
        "url": "http://127.0.0.1:5000/cbdetails",
        "type": "GET",
        "datatype": 'json',
        // "data": 'data.data'
    },
    columns: [
        { 'data': 'cb_id' },
        { 'data': 'cb_loc' },
        { 'data': 'cb_status'}
    ], 
} );


var transformerTable = $('#transformerTable').DataTable( {
    paging: true,
    "sDom":"tipr",
    // autowidth: true,
    pageLength : 3,
    // order: [[3, 'desc']],
    "ajax": {
        "url": "http://127.0.0.1:5000/transdetails",
        "type": "GET",
        "datatype": 'json',
        // "data": 'data.data'
    },
    columns: [
        { 'data': 'trans_id' },
        { 'data': 'trans_rating' },
        { 'data': 'trans_loc'},
        { 'data': 'trans_op_condition'}
    ], 
} );



var substationTable = $('#subtable').DataTable( {
    paging: true,
    "sDom":"tipr",
    // autowidth: true,
    pageLength : 3,
    // order: [[3, 'desc']],
    "ajax": {
        "url": "http://127.0.0.1:5000/subdetails",
        "type": "GET",
        "datatype": 'json',
        // "data": 'data.data'
    },
    columns: [
        { 'data': 'sub_id' },
        { 'data': 'sub_loc' },
        { 'data': 'sub_out_feed'},
        { 'data': 'sub_remarks'}
    ], 
} );


var guTable = $('#gutable').DataTable( {
    paging: true,
    "sDom":"tipr",
    // autowidth: true,
    pageLength : 3,
    // order: [[3, 'desc']],
    "ajax": {
        "url": "http://127.0.0.1:5000/gudetails",
        "type": "GET",
        "datatype": 'json',
        // "data": 'data.data'
    },
    columns: [
        { 'data': 'g_id' },
        { 'data': 'g_kv' },
        { 'data': 'g_unit_id'},
        { 'data': 'g_status'},
        { 'data': 'g_ctrl'},
        { 'data': 'g_mw_measured'},
        { 'data': 'g_rating'},
    ], 
} );


var loadTable = $('#loadstable').DataTable( {
    paging: true,
    "sDom":"tipr",
    // autowidth: true,
    pageLength : 3,
    // order: [[3, 'desc']],
    "ajax": {
        "url": "http://127.0.0.1:5000/loaddetails",
        "type": "GET",
        "datatype": 'json',
        // "data": 'data.data'
    },
    columns: [
        { 'data': 'l_id' },
        { 'data': 'l_kv' },
        { 'data': 'l_unit_id'},
        { 'data': 'l_status'},
        { 'data': 'l_type'},
        { 'data': 'l_mw_measured'},
        { 'data': 'l_mvar_measured'},
    ], 
} );



//Maps for real time

var address = [
    [60.631247, -145.589310],
    [60.627037, -145.595146],
    [60.628721, -145.599953],
    [60.623332, -145.605789],
    [60.620300, -145.609222],
    [60.617269, -145.614716],
    [60.613562, -145.621925],
    [60.614739, -145.628432],
    [60.616122, -145.630223],
    [60.616465, -145.629995],
    [60.610081, -145.632727],
    [60.597869, -145.663727]

];


var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
});


var mymap = new L.map('mapid', {
    layers: [baseLayer]
}).setView([60.585037, -145.626264], 11);


//Get all the nodes from AJAX call and set on the map
function getStaticNodes() {
    //Ajax call
        $.ajax({url: "http://127.0.0.1:5000/staticnodes", 
        success: function(data){
            console.log(data);
            for (i=0; i<data.data.length; i++) {
            
            if (data.data[i].node_code === "G"){
                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'orange', 
                    fillColor: 'orange', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(nodes_map).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();    


                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'orange', 
                    fillColor: 'orange', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(mymap).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();    


                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'orange', 
                    fillColor: 'orange', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(generating_units_map).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();
                
                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'orange', 
                    fillColor: 'orange', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(mymap2).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip(); 
                
            }

            if (data.data[i].node_code === "N"){
                // nodes_map
                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'green', 
                    fillColor: 'green', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(nodes_map).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();  
                
                
                // Live Map
                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'green', 
                    fillColor: 'green', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(mymap).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();  

                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'green', 
                    fillColor: 'green', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(mymap2).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();  
            
                
                //loads_map
                circle300 = L.circleMarker(([data.data[i].node_lat, data.data[i].node_long]), 
                { 
                    color: 'green', 
                    fillColor: 'green', 
                    fillOpacity: 0.5, 
                    radius: 5 
                }).addTo(loads_map).bindTooltip(data.data[i].node_desc, { permanent: true }).openTooltip();  
            }

        }
        }    
    });
}

getStaticNodes()



//Polylines for all connections
var polylines = L.polyline([
    [[60.546848, -145.761041], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.540457, -145.741037]],
    [[60.543756, -145.760985], [60.54054, -145.740904]],
    [[60.546626, -145.758652], [60.541412, -145.757476]],
    [[60.541412, -145.757476], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.537332, -145.666187], [60.531245, -145.647593]],
    [[60.531245, -145.647593], [60.527245, -145.627593]],
    [[60.527245, -145.627593], [60.535957, -145.658961]],
    [[60.535957, -145.658961], [60.537257, -145.659961]],
    [[60.537257, -145.659961], [60.538594, -145.706188]],
    [[60.538594, -145.706188], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.539322, -145.753094], [60.535159, -145.773058]],
    [[60.535159, -145.773058], [60.532345, -145.778623]],
    [[60.532345, -145.778623], [60.527345, -145.781623]],
    [[60.527345, -145.781623], [60.524323, -145.784216]],
    [[60.597869, -145.663727], [60.556121, -145.753738]], // 205 - 300
    [[60.556121, -145.753738], [60.54054, -145.740904]], // 300 - 400
    [[60.556121, -145.753738], [60.55604, -145.7538]],
    [[60.55604, -145.7538], [60.54728, -145.763625]], // 507 - 514
    [[60.54875, -145.763994], [60.54728, -145.763625]], // 514-518
    [[60.54875, -145.763994], [60.550438, -145.760331]], // 518-526
    [[60.543419, -145.752657], [60.544636, - 145.757055]], //620-627
    [[60.542419, -145.752657], [60.543419, -145.752657]], //614-620
    [[60.54319, -145.74179], [60.542419, -145.752657]], //612-614
    [[60.54319, -145.74179], [60.54319, -145.74179]], //608-612
    [[60.5405, -145.741037], [60.54319, -145.74179]], //606-608
    [[60.54054, -145.740904], [60.5405, -145.741037]], // 400-606
    [[60.547613, -145.765318], [60.546848, -145.761041]],
    [[60.55604, -145.7538], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.550438, -145.760331]],
    [[60.544636, -145.757055], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.583697, -145.630038], [60.54054, -145.740904]]
], { color: 'black' }).addTo(mymap);

var changing_polyline = L.polyline([
    [[60.614739, -145.628432], [60.616122, -145.630223]],
    [[60.614739, -145.628432], [60.616465, -145.629995]],
    [[60.614739, -145.628432], [60.616483, -145.627432]],
    [[60.614739, -145.628432], [60.610081, -145.632727]],
    [[60.610081, -145.632727], [60.597869, -145.663727]]
], { color: 'black' }).addTo(mymap);

//Map for Threat and Impact
var mymap2 = L.map('mapid2').setView([60.614739, -145.628432], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(mymap2);



var polylines = L.polyline([
    [[60.546848, -145.761041], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.540457, -145.741037]],
    [[60.543756, -145.760985], [60.54054, -145.740904]],
    [[60.546626, -145.758652], [60.541412, -145.757476]],
    [[60.541412, -145.757476], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.537332, -145.666187], [60.531245, -145.647593]],
    [[60.531245, -145.647593], [60.527245, -145.627593]],
    [[60.527245, -145.627593], [60.535957, -145.658961]],
    [[60.535957, -145.658961], [60.537257, -145.659961]],
    [[60.537257, -145.659961], [60.538594, -145.706188]],
    [[60.538594, -145.706188], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    // [[60.538639, -145.752681], [60.54054, -145.740904]],
    [[60.539322, -145.753094], [60.535159, -145.773058]],
    [[60.535159, -145.773058], [60.532345, -145.778623]],
    [[60.532345, -145.778623], [60.527345, -145.781623]],
    [[60.527345, -145.781623], [60.524323, -145.784216]],
    [[60.597869, -145.663727], [60.556121, -145.753738]], // 205 - 300
    [[60.556121, -145.753738], [60.54054, -145.740904]], // 300 - 400
    [[60.556121, -145.753738], [60.55604, -145.7538]],
    [[60.55604, -145.7538], [60.54728, -145.763625]], // 507 - 514
    [[60.54875, -145.763994], [60.54728, -145.763625]], // 514-518
    [[60.54875, -145.763994], [60.550438, -145.760331]], // 518-526
    [[60.543419, -145.752657], [60.544636, - 145.757055]], //620-627
    [[60.542419, -145.752657], [60.543419, -145.752657]], //614-620
    [[60.54319, -145.74179], [60.542419, -145.752657]], //612-614
    [[60.54319, -145.74179], [60.54319, -145.74179]], //608-612
    [[60.5405, -145.741037], [60.54319, -145.74179]], //606-608
    [[60.54054, -145.740904], [60.5405, -145.741037]], // 400-606
    [[60.547613, -145.765318], [60.546848, -145.761041]],
    [[60.614739, -145.628432], [60.616122, -145.630223]],
    [[60.614739, -145.628432], [60.616465, -145.629995]],
    [[60.614739, -145.628432], [60.616483, -145.627432]],
    [[60.614739, -145.628432], [60.610081, -145.632727]],
    [[60.610081, -145.632727], [60.597869, -145.663727]],
    [[60.55604, -145.7538], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.550438, -145.760331]],
    [[60.544636, -145.757055], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.583697, -145.630038], [60.54054, -145.740904]]
], { color: 'black' }).addTo(mymap2);






//**************Decision Pre Maps*****************//
var decision_pre_map = L.map('decision-mapid').setView([60.614739, -145.628432], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(decision_pre_map);


var polylines = L.polyline([
    [[60.546848, -145.761041], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.540457, -145.741037]],
    [[60.543756, -145.760985], [60.54054, -145.740904]],
    [[60.546626, -145.758652], [60.541412, -145.757476]],
    [[60.541412, -145.757476], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.537332, -145.666187], [60.531245, -145.647593]],
    [[60.531245, -145.647593], [60.527245, -145.627593]],
    [[60.527245, -145.627593], [60.535957, -145.658961]],
    [[60.535957, -145.658961], [60.537257, -145.659961]],
    [[60.537257, -145.659961], [60.538594, -145.706188]],
    [[60.538594, -145.706188], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    // [[60.538639, -145.752681], [60.54054, -145.740904]],
    [[60.539322, -145.753094], [60.535159, -145.773058]],
    [[60.535159, -145.773058], [60.532345, -145.778623]],
    [[60.532345, -145.778623], [60.527345, -145.781623]],
    [[60.527345, -145.781623], [60.524323, -145.784216]],
    [[60.597869, -145.663727], [60.556121, -145.753738]], // 205 - 300
    [[60.556121, -145.753738], [60.54054, -145.740904]], // 300 - 400
    [[60.556121, -145.753738], [60.55604, -145.7538]],
    [[60.55604, -145.7538], [60.54728, -145.763625]], // 507 - 514
    [[60.54875, -145.763994], [60.54728, -145.763625]], // 514-518
    [[60.54875, -145.763994], [60.550438, -145.760331]], // 518-526
    [[60.543419, -145.752657], [60.544636, - 145.757055]], //620-627
    [[60.542419, -145.752657], [60.543419, -145.752657]], //614-620
    [[60.54319, -145.74179], [60.542419, -145.752657]], //612-614
    [[60.54319, -145.74179], [60.54319, -145.74179]], //608-612
    [[60.5405, -145.741037], [60.54319, -145.74179]], //606-608
    [[60.54054, -145.740904], [60.5405, -145.741037]], // 400-606
    [[60.547613, -145.765318], [60.546848, -145.761041]],
    [[60.614739, -145.628432], [60.616122, -145.630223]],
    [[60.614739, -145.628432], [60.616465, -145.629995]],
    [[60.614739, -145.628432], [60.616483, -145.627432]],
    [[60.614739, -145.628432], [60.610081, -145.632727]],
    [[60.610081, -145.632727], [60.597869, -145.663727]],
    [[60.55604, -145.7538], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.550438, -145.760331]],
    [[60.544636, -145.757055], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.583697, -145.630038], [60.54054, -145.740904]]
], { color: 'black' }).addTo(decision_pre_map);

// polylines.addTo(decision_pre_map);


//**************Planning Pre Maps*****************//
var planning_pre_map = L.map('planning-pre-map').setView([46.7298, -117.1817], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(planning_pre_map);


//**************Planning During Maps************//
var planning_during_map = L.map('planning-during-mapid').setView([60.542419, -145.752657], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(planning_during_map);


//******************Network Details Map*************************** */
var nodes_map = L.map('nodes_map').setView([60.585037, -145.626264], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(nodes_map);

// circles.addTo(nodes_map);
// circle300 = L.circleMarker(([60.556121, -145.753738]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N300 (Orca Substation)', { permanent: true }).openTooltip(),
//     circle507 = L.circleMarker(([60.55604, -145.7538]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N507', { permanent: true }).openTooltip(),
//     circle514 = L.circleMarker(([60.54728, -145.763625]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N514', { permanent: true }).openTooltip(),
//     circle518 = L.circleMarker(([60.54875, -145.763994]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N518', { permanent: true }).openTooltip(),
//     circle526 = L.circleMarker(([60.550438, -145.760331]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N526', { permanent: true }).openTooltip(),
//     circle606 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N606', { permanent: true }).openTooltip(),
//     circle608 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N608', { permanent: true }).openTooltip(),
//     circle612 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N612', { permanent: true }).openTooltip(),
//     circle614 = L.circleMarker(([60.542419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N614', { permanent: true }).openTooltip(),
//     circle620 = L.circleMarker(([60.543419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N620', { permanent: true }).openTooltip(),
//     circle627 = L.circleMarker(([60.544636, -145.757055]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N627', { permanent: true }).openTooltip(),
//     circle701 = L.circleMarker(([60.540457, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N701', { permanent: true }).openTooltip(),
//     circle707 = L.circleMarker(([60.543756, -145.760985]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N707', { permanent: true }).openTooltip(),
//     circle720 = L.circleMarker(([60.546848, -145.761041]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N720', { permanent: true }).openTooltip(),
//     circle722 = L.circleMarker(([60.546848, -145.761041]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N722', { permanent: true }).openTooltip(),
//     circle731 = L.circleMarker(([60.547613, -145.765318]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N731', { permanent: true }).openTooltip(),
//     circle801 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N801', { permanent: true }).openTooltip(),
//     circle806 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N806', { permanent: true }).openTooltip(),
//     circle808 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N808', { permanent: true }).openTooltip(),
//     circle811 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N811', { permanent: true }).openTooltip(),
//     circle813 = L.circleMarker(([60.535159, -145.773058]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N813', { permanent: true }).openTooltip(),
//     circle822 = L.circleMarker(([60.532345, -145.778623]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N822', { permanent: true }).openTooltip(),
//     circle829 = L.circleMarker(([60.527345, -145.781623]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N829', { permanent: true }).openTooltip(),
//     circle831 = L.circleMarker(([60.524323, -145.784216]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N831', { permanent: true }).openTooltip(),
//     circle838 = L.circleMarker(([60.541412, -145.757476]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N838', { permanent: true }).openTooltip(),
//     circle850 = L.circleMarker(([60.546626, -145.758652]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N850', { permanent: true }).openTooltip(),
//     circle901 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N901', { permanent: true }).openTooltip(),
//     circle910 = L.circleMarker(([60.539483, -145.73447]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N910', { permanent: true }).openTooltip(),
//     circle911 = L.circleMarker(([60.539483, -145.73447]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N911', { permanent: true }).openTooltip(),
//     circle916 = L.circleMarker(([60.538594, -145.706188]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N916', { permanent: true }).openTooltip(),
//     circle920 = L.circleMarker(([60.537257, -145.659961]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N920', { permanent: true }).openTooltip(),
//     circle921 = L.circleMarker(([60.535957, -145.658961]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N921', { permanent: true }).openTooltip(),
//     circle931 = L.circleMarker(([60.527245, -145.627593]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N931', { permanent: true }).openTooltip(),
//     circle937 = L.circleMarker(([60.531245, -145.647593]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N937', { permanent: true }).openTooltip(),
//     circle941 = L.circleMarker(([60.537332, -145.666187]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N941', { permanent: true }).openTooltip(),

//     circle200 = L.circleMarker(([60.614739, -145.628432]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N200', { permanent: true }).openTooltip(),
//     circle201 = L.circleMarker(([60.616122, -145.630223]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N201', { permanent: true }).openTooltip(),
//     circle202 = L.circleMarker(([60.616465, -145.629995]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N202', { permanent: true }).openTooltip(),
//     circle203 = L.circleMarker(([60.616483, -145.627432]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N203', { permanent: true }).openTooltip(),
//     circle204 = L.circleMarker(([60.610081, -145.632727]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N204', { permanent: true }).openTooltip(),
//     circle205 = L.circleMarker(([60.597869, -145.663727]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N205', { permanent: true }).openTooltip(),
//     circle400 = L.circleMarker(([60.54054, -145.740904]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N400', { permanent: true }).openTooltip(),
//     circle507 = L.circleMarker(([60.55604, -145.7538]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N507', { permanent: true }).openTooltip(),
//     circle514 = L.circleMarker(([60.54728, -145.763625]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N514', { permanent: true }).openTooltip(),
//     circle518 = L.circleMarker(([60.54875, -145.763994]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N518', { permanent: true }).openTooltip(),
//     circle526 = L.circleMarker(([60.550438, -145.760331]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N526', { permanent: true }).openTooltip(),
//     circle606 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N606', { permanent: true }).openTooltip(),
//     circle608 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N608', { permanent: true }).openTooltip(),
//     circle612 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N612', { permanent: true }).openTooltip(),
//     circle614 = L.circleMarker(([60.542419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N614', { permanent: true }).openTooltip(),
//     circle620 = L.circleMarker(([60.543419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N620', { permanent: true }).openTooltip(),
//     circle627 = L.circleMarker(([60.544636, -145.757055]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N627', { permanent: true }).openTooltip(),
//     circle103 = L.circleMarker(([60.583697, -145.630038]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N103', { permanent: true }).openTooltip(),
//     circle100 = L.circleMarker(([60.585037, -145.626264]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N100', { permanent: true }).openTooltip(),
//     circle101 = L.circleMarker(([60.586285, -145.623469]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N101', { permanent: true }).openTooltip(),
//     circle102 = L.circleMarker(([60.58628, -145.623362]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(nodes_map).bindTooltip('N102', { permanent: true }).openTooltip();


var polylines = L.polyline([
    [[60.546848, -145.761041], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.546848, -145.761041]],
    [[60.543756, -145.760985], [60.540457, -145.741037]],
    [[60.543756, -145.760985], [60.54054, -145.740904]],
    [[60.546626, -145.758652], [60.541412, -145.757476]],
    [[60.541412, -145.757476], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.539322, -145.753094]],
    [[60.539322, -145.753094], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.537332, -145.666187], [60.531245, -145.647593]],
    [[60.531245, -145.647593], [60.527245, -145.627593]],
    [[60.527245, -145.627593], [60.535957, -145.658961]],
    [[60.535957, -145.658961], [60.537257, -145.659961]],
    [[60.537257, -145.659961], [60.538594, -145.706188]],
    [[60.538594, -145.706188], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.539483, -145.73447]],
    [[60.539483, -145.73447], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    // [[60.538639, -145.752681], [60.54054, -145.740904]],
    [[60.539322, -145.753094], [60.535159, -145.773058]],
    [[60.535159, -145.773058], [60.532345, -145.778623]],
    [[60.532345, -145.778623], [60.527345, -145.781623]],
    [[60.527345, -145.781623], [60.524323, -145.784216]],
    [[60.597869, -145.663727], [60.556121, -145.753738]], // 205 - 300
    [[60.556121, -145.753738], [60.54054, -145.740904]], // 300 - 400
    [[60.556121, -145.753738], [60.55604, -145.7538]],
    [[60.55604, -145.7538], [60.54728, -145.763625]], // 507 - 514
    [[60.54875, -145.763994], [60.54728, -145.763625]], // 514-518
    [[60.54875, -145.763994], [60.550438, -145.760331]], // 518-526
    [[60.543419, -145.752657], [60.544636, - 145.757055]], //620-627
    [[60.542419, -145.752657], [60.543419, -145.752657]], //614-620
    [[60.54319, -145.74179], [60.542419, -145.752657]], //612-614
    [[60.54319, -145.74179], [60.54319, -145.74179]], //608-612
    [[60.5405, -145.741037], [60.54319, -145.74179]], //606-608
    [[60.54054, -145.740904], [60.5405, -145.741037]], // 400-606
    [[60.547613, -145.765318], [60.546848, -145.761041]],
    [[60.614739, -145.628432], [60.616122, -145.630223]],
    [[60.614739, -145.628432], [60.616465, -145.629995]],
    [[60.614739, -145.628432], [60.616483, -145.627432]],
    [[60.614739, -145.628432], [60.610081, -145.632727]],
    [[60.610081, -145.632727], [60.597869, -145.663727]],
    [[60.55604, -145.7538], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.54728, -145.763625]],
    [[60.54875, -145.763994], [60.550438, -145.760331]],
    [[60.544636, -145.757055], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.543419, -145.752657]],
    [[60.542419, -145.752657], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.54319, -145.74179]],
    [[60.54319, -145.74179], [60.5405, -145.741037]],
    [[60.5405, -145.741037], [60.54054, -145.740904]],
    [[60.583697, -145.630038], [60.54054, -145.740904]]
], { color: 'black' }).addTo(nodes_map);

// polylines.addTo(nodes_map);


var greenIcon = L.icon({
    iconUrl: 'static/img/icon.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize: [35, 35], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// *************************Generating Units Map********************************

var generating_units_map = L.map('generating_units_map').setView([60.585037, -145.626264], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(generating_units_map);

// var circle1 = L.circleMarker(([60.556121, -145.753738]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(generating_units_map).bindTooltip('N300 (Orca Substation - G3, G4, G5, G6, G7, G8)', { permanent: true }).openTooltip();
// var circle2 = L.circleMarker(([60.585037, -145.626264]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(generating_units_map).bindTooltip('N100 (Power Creek Substation - H5, H6, H7)', { permanent: true }).openTooltip();
// var circle3 = L.circleMarker(([60.614739, -145.628432]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(generating_units_map).bindTooltip('N200 (Humpback Substation - H1, H2, H3, H4)', { permanent: true }).openTooltip();


// **********************Loads Map***********************************

var loads_map = L.map('loads_map').setView([60.585037, -145.626264], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiYW5zaHVtYW5sbnUiLCJhIjoiY2s1N3ZsOGtwMDN2OTNscG9hc3FjcDU5NCJ9.Q5n-6Z_xsReecwKAW4l0Xg'
}).addTo(loads_map);

// circles.addTo(loads_map);
// circle300 = L.circleMarker(([60.556121, -145.753738]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N300 (Orca Substation)', { permanent: true }).openTooltip(),
//     circle507 = L.circleMarker(([60.55604, -145.7538]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N507', { permanent: true }).openTooltip(),
//     circle514 = L.circleMarker(([60.54728, -145.763625]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N514', { permanent: true }).openTooltip(),
//     circle518 = L.circleMarker(([60.54875, -145.763994]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N518', { permanent: true }).openTooltip(),
//     circle526 = L.circleMarker(([60.550438, -145.760331]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N526', { permanent: true }).openTooltip(),
//     circle606 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N606', { permanent: true }).openTooltip(),
//     circle608 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N608', { permanent: true }).openTooltip(),
//     circle612 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N612', { permanent: true }).openTooltip(),
//     circle614 = L.circleMarker(([60.542419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N614', { permanent: true }).openTooltip(),
//     circle620 = L.circleMarker(([60.543419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N620', { permanent: true }).openTooltip(),
//     circle627 = L.circleMarker(([60.544636, -145.757055]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N627', { permanent: true }).openTooltip(),
//     circle701 = L.circleMarker(([60.540457, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N701', { permanent: true }).openTooltip(),
//     circle707 = L.circleMarker(([60.543756, -145.760985]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N707', { permanent: true }).openTooltip(),
//     circle720 = L.circleMarker(([60.546848, -145.761041]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N720', { permanent: true }).openTooltip(),
//     circle722 = L.circleMarker(([60.546848, -145.761041]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N722', { permanent: true }).openTooltip(),
//     circle731 = L.circleMarker(([60.547613, -145.765318]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N731', { permanent: true }).openTooltip(),
//     circle801 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N801', { permanent: true }).openTooltip(),
//     circle806 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N806', { permanent: true }).openTooltip(),
//     circle808 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N808', { permanent: true }).openTooltip(),
//     circle811 = L.circleMarker(([60.539322, -145.753094]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N811', { permanent: true }).openTooltip(),
//     circle813 = L.circleMarker(([60.535159, -145.773058]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N813', { permanent: true }).openTooltip(),
//     circle822 = L.circleMarker(([60.532345, -145.778623]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N822', { permanent: true }).openTooltip(),
//     circle829 = L.circleMarker(([60.527345, -145.781623]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N829', { permanent: true }).openTooltip(),
//     circle831 = L.circleMarker(([60.524323, -145.784216]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N831', { permanent: true }).openTooltip(),
//     circle838 = L.circleMarker(([60.541412, -145.757476]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N838', { permanent: true }).openTooltip(),
//     circle850 = L.circleMarker(([60.546626, -145.758652]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N850', { permanent: true }).openTooltip(),
//     circle901 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N901', { permanent: true }).openTooltip(),
//     circle910 = L.circleMarker(([60.539483, -145.73447]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N910', { permanent: true }).openTooltip(),
//     circle911 = L.circleMarker(([60.539483, -145.73447]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N911', { permanent: true }).openTooltip(),
//     circle916 = L.circleMarker(([60.538594, -145.706188]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N916', { permanent: true }).openTooltip(),
//     circle920 = L.circleMarker(([60.537257, -145.659961]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N920', { permanent: true }).openTooltip(),
//     circle921 = L.circleMarker(([60.535957, -145.658961]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N921', { permanent: true }).openTooltip(),
//     circle931 = L.circleMarker(([60.527245, -145.627593]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N931', { permanent: true }).openTooltip(),
//     circle937 = L.circleMarker(([60.531245, -145.647593]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N937', { permanent: true }).openTooltip(),
//     circle941 = L.circleMarker(([60.537332, -145.666187]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N941', { permanent: true }).openTooltip(),

//     circle200 = L.circleMarker(([60.614739, -145.628432]), { color: 'orange', fillColor: 'orange', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N200', { permanent: true }).openTooltip(),
//     circle201 = L.circleMarker(([60.616122, -145.630223]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N201', { permanent: true }).openTooltip(),
//     circle202 = L.circleMarker(([60.616465, -145.629995]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N202', { permanent: true }).openTooltip(),
//     circle203 = L.circleMarker(([60.616483, -145.627432]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N203', { permanent: true }).openTooltip(),
//     circle204 = L.circleMarker(([60.610081, -145.632727]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N204', { permanent: true }).openTooltip(),
//     circle205 = L.circleMarker(([60.597869, -145.663727]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N205', { permanent: true }).openTooltip(),
//     circle400 = L.circleMarker(([60.54054, -145.740904]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N400', { permanent: true }).openTooltip(),
//     circle507 = L.circleMarker(([60.55604, -145.7538]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N507', { permanent: true }).openTooltip(),
//     circle514 = L.circleMarker(([60.54728, -145.763625]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N514', { permanent: true }).openTooltip(),
//     circle518 = L.circleMarker(([60.54875, -145.763994]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N518', { permanent: true }).openTooltip(),
//     circle526 = L.circleMarker(([60.550438, -145.760331]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N526', { permanent: true }).openTooltip(),
//     circle606 = L.circleMarker(([60.5405, -145.741037]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N606', { permanent: true }).openTooltip(),
//     circle608 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N608', { permanent: true }).openTooltip(),
//     circle612 = L.circleMarker(([60.54319, -145.74179]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N612', { permanent: true }).openTooltip(),
//     circle614 = L.circleMarker(([60.542419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N614', { permanent: true }).openTooltip(),
//     circle620 = L.circleMarker(([60.543419, -145.752657]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N620', { permanent: true }).openTooltip(),
//     circle627 = L.circleMarker(([60.544636, -145.757055]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N627', { permanent: true }).openTooltip(),
//     circle103 = L.circleMarker(([60.583697, -145.630038]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N103', { permanent: true }).openTooltip(),
//     circle100 = L.circleMarker(([60.585037, -145.626264]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N100', { permanent: true }).openTooltip(),
//     circle101 = L.circleMarker(([60.586285, -145.623469]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N101', { permanent: true }).openTooltip(),
//     circle102 = L.circleMarker(([60.58628, -145.623362]), { color: 'green', fillColor: 'green', fillOpacity: 0.5, radius: 5 }).addTo(loads_map).bindTooltip('N102', { permanent: true }).openTooltip();



$("a[href='#runtimescore']").on('shown.bs.tab', function (e) {
    mymap.invalidateSize();
});

$("a[href='#loads']").on('shown.bs.tab', function (e) {
    loads_map.invalidateSize();
});

$("a[href='#netdetails']").on('shown.bs.tab', function (e) {
    nodes_map.invalidateSize();
});

$("a[href='#generatingunits']").on('shown.bs.tab', function (e) {
    generating_units_map.invalidateSize();
});

$("a[href='#Real-Time']").on('shown.bs.tab', function (e) {
    mymap.invalidateSize();
});

$("a[href='#threatimpact2']").on('shown.bs.tab', function (e) {
    mymap2.invalidateSize();
});

$("a[href='#decision']").on('shown.bs.tab', function (e) {
    decision_pre_map.invalidateSize();
});

$("a[href='#planning']").on('shown.bs.tab', function (e) {
    planning_pre_map.invalidateSize();
});

$("a[href='#planning-during']").on('shown.bs.tab', function (e) {
    planning_during_map.invalidateSize();
});


$(document).ready(function () {

    const config = {
        type: 'line',
        // scaleOverride: true,
        // // scaleSteps: 10,
        // scaleStepWidth: 20,
        data: {
            labels: [],
            datasets: [{
                label: "Resiliency Score",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
                fill: false,
            }],
        },
        options: {
            // responsive: true,
            // maintainAspectRatio: false,
            // animation: {

            //     onComplete: function (animation) {
            //         var sourceCanvas = lineChart.chart.canvas;
            //         var copyWidth = lineChart.scales['y-axis-0'].width;
            //         var copyHeight = lineChart.scales['y-axis-0'].height + lineChart.scales['y-axis-0'].top;
            //         var targetCtx = document.getElementById("myChartAxis").getContext("2d");
            //         targetCtx.canvas.width = copyWidth;
            //         targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
            //     }
            // },
            title: {
                display: false,
                text: 'Creating Real-Time Charts with Flask'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes:
                    [{
                        type: 'realtime',
                        // distribution: 'series',
                        realtime: {
                            // duration: 1000,
                            // refresh: 1000,
                            // ttl: 60000,
                            delay: 6000,
                            // onRefresh: onRefresh
                        },
                        // gridLines: {
                        //     display: false
                        // }
                    },

                    ],
                // [{
                //     display: true,
                //     scaleLabel: {
                //         display: true,
                //         labelString: 'Influence Factors'
                //     }
                // }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 1
                    },

                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    // gridLines: {
                    //     display: false
                    // }
                }]
            }
        }
    };



    const config2 = {
        type: 'bar',
        data: {
            labels: ['Topological Factor', 'Generation Factor', 'Threat Impact Factor', 'Critical Load Demand', 'Critical Load Not Lost'],
            datasets: [{
                label: '',
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Influence Factor Value'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Influence Factors'
                    }
                }],
            }
        }
    };

    const context = document.getElementById('myChart').getContext('2d');
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const lineChart = new Chart(context, config);
    const barChart = new Chart(ctx2, config2);

    // config.options.scales.xAxes[0].realtime.delay = 60000;
    // lineChart.update({ duration: 0 });

    const source = new EventSource("/bar-chart-data");

    source.onmessage = function (event) {
        const data = JSON.parse(event.data);
        // if (config.data.labels.length == 5) {
        //     config.data.labels.shift();
        //     config.data.datasets[0].data.shift();
        // }
        // config.data.labels.push(data.time);

        config.data.labels.push(data.time);
        config.data.datasets[0].data.push(data.resiliency);
        config2.data.datasets[0].data[0] = data.tf;
        config2.data.datasets[0].data[1] = data.rg;
        config2.data.datasets[0].data[2] = data.tif;
        config2.data.datasets[0].data[3] = data.dcl;
        config2.data.datasets[0].data[4] = data.clnl;
        barChart.update();

        var table = document.getElementById("resiliency-history");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        // var cell8 = row.insertCell(7);

        cell1.innerHTML = data.time;
        cell2.innerHTML = data.tf;
        cell3.innerHTML = data.clnl;
        cell4.innerHTML = data.dcl;
        cell5.innerHTML = data.rg;
        // cell6.innerHTML = data.rf;
        cell6.innerHTML = data.tif;
        cell7.innerHTML = data.resiliency;
    }

});




//Decision Page Charts
var decisionctx1 = document.getElementById('decision-pre-barchart').getContext('2d');
var decision_pre_barChart = new Chart(decisionctx1, {
    type: 'line',
    data: {
        labels: ['1', '5', '10'],
        datasets: [{
            label: 'Without Proactive control',
            fill: false,
            backgroundColor: "red",
            borderColor: "red",
            data: [0.95, 0.95, 0.7],
        },
        {
            label: 'With Proative control',
            fill: false,
            backgroundColor: "orange",
            borderColor: "orange",
            data: [0.95, 0.95, 0.85],
            borderDash: [10, 5]
        }
        ]
    },
    options: {
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Resiliency Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
        }
    }
});

Chart.defaults.global.legend.labels.usePointStyle = true;
var decisionctx2 = document.getElementById('decision-pre-linechart').getContext('2d');
var decision_pre_lineChart = new Chart(decisionctx2, {
    type: 'bar',
    data: {
        labels: ['TF', 'RG', 'TIF', 'DCL', 'CLNL'],
        datasets: [{
            label: "Without Proactive Control",
            backgroundColor: "red",
            data: [0.91, 0.6, 0.8, 0.75, 0.8]
        }, {
            label: "With Proactive Control",
            backgroundColor: "orange",
            data: [0.8, 0.72, 0.8, 0.82, 0.87]
        }
        ]
    },
    options: {
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Factor Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Factor'
                }
            }],
        }
    }
});


//Planning During Event Charts
var planningctx1 = document.getElementById('planning-during-barchart').getContext('2d');
var planning_during_barChart = new Chart(planningctx1, {
    type: 'line',
    data: {
        labels: ['5', '10'],
        datasets: [{
            label: 'Line chart',
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: [0.9, 0.7],
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Resiliency Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
        }
    }
});


var planningctx2 = document.getElementById('planning-during-linechart').getContext('2d');
var planning_pre_lineChart = new Chart(planningctx2, {
    type: 'line',
    data: {
        labels: ['5', '10'],
        datasets: [{
            label: 'Line chart',
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: [0.9, 0.7],
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Resiliency Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
        }
    }
});


var decisionctx2 = document.getElementById('decision-during-linechart').getContext('2d');
var decision_during_lineChart = new Chart(decisionctx2, {
    type: 'line',
    data: {
        labels: ['5', '10'],
        datasets: [{
            label: '',
            fill: false,
            data: [0.85, 0.65, 0.75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Factor Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
        }
    }
});


// var decisionpostctx2 = document.getElementById('decision-post-linechart').getContext('2d');
// var decision_during_lineChart = new Chart(decisionpostctx2, {
//     type: 'line',
//     data: {
//         labels: ['10', '20'],
//         datasets: [{
//             fill: false,
//             label: '',
//             data: [0.7, 0.85],
//             // backgroundColor: [
//             //     'rgba(255, 99, 132, 0.2)',

//             // ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',

//             ],
//             borderWidth: 4
//         }]
//     },
//     options: {
//         legend: {
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 },
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Resiliency Value'
//                 }
//             }],
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Time'
//                 }
//             }],
//         }
//     }
// });

// function timeFunction() {
//     setTimeout(function () {
//         $('#exampleModal').modal('show');
//         // changing_polyline.setStyle({ color: 'red' });

//     }, 5000);
// }
// function changeLines() {
//     setTimeout(function () {
//         changing_polyline.setStyle({ color: 'red' });
//     }, 20000);
// }


// timeFunction();
// changeLines();



// //Adding Heat Animation
// var heat_live = L.heatLayer([], {
//     minOpacity: 0.8,
//     radius: 50,
//     blur: 10,
//     gradient: {
//         0.45: "rgb(0,0,255)",
//         0.55: "rgb(0,255,255)",
//         0.65: "rgb(0,255,0)",
//         0.95: "rgb(255,255,0)",
//         1.0: "rgb(255,0,0)"
//     }
// }).addTo(mymap);

// // Animation
// var index3 = 0;
// var id3 = setInterval(function () {
//     heat_live.addLatLng(address[index3++]);
//     if (index3 >= address.length - 1) { clearInterval(id3); }
// }, 5000);


// var heat_threat = L.heatLayer([], {
//     minOpacity: 0.8,
//     radius: 50,
//     blur: 10,
//     gradient: {
//         0.45: "rgb(0,0,255)",
//         0.55: "rgb(0,255,255)",
//         0.65: "rgb(0,255,0)",
//         0.95: "rgb(255,255,0)",
//         1.0: "rgb(255,0,0)"
//     }
// }).addTo(mymap2);


//Decision Page Charts
var decisionctx1 = document.getElementById('decision-pre-barchart').getContext('2d');
var decision_pre_barChart = new Chart(decisionctx1, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'Economic Mode',
            fill: false,
            backgroundColor: "red",
            borderColor: "red",
            data: [1, 0.98, 0.8, 0.38, 0.28, 0.2],
        },
        {
            label: 'Resilient Mode',
            fill: false,
            backgroundColor: "orange",
            borderColor: "orange",
            data: [1, 1, 1, 0.52, 0.41, 0.35]
            // borderDash: [10, 5]
        }
        ]
    },
    options: {
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Resiliency Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(Hours)'
                }
            }],
        }
    }
});


Chart.defaults.global.legend.labels.usePointStyle = true;
var decisionctx2 = document.getElementById('decision-pre-linechart').getContext('2d');
var decision_pre_lineChart = new Chart(decisionctx2, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: "CLNL",
            backgroundColor: "green",
            data: [1, 1, 1, 0.74, 0.74, 0.75]
        }, {
            label: "Generation",
            backgroundColor: "orange",
            data: [0.62, 0.6, 0.6, 0.22, 0.22, 0.22]
        }, {
            label: "CLD",
            backgroundColor: "blue",
            data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3,]
        }, {
            label: "TIF",
            backgroundColor: "red",
            data: [0, 0, 0, 0.60, 0.70, 0.70]
        }, {
            label: "SOC",
            backgroundColor: "#003f5c",
            data: [0.9, 0.32, 0.23, 0.2, 0.2, 0.2]
        }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Economic Mode'
        },
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Factor Value (Economic)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(Hours)'
                }
            }],
        }
    }
});




//Decision Resilient Mode Chart
var decisionres = document.getElementById('decision-resilientmode-barchart').getContext('2d');
var decision_resilientmode_barchart = new Chart(decisionres, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: "CLNL",
            backgroundColor: "green",
            data: [1, 1, 1, 1, 0.93, 0.83]
        }, {
            label: "Generation",
            backgroundColor: "orange",
            data: [0.6, 0.6, 0.6, 0.3, 0.28, 0.25]
        }, {
            label: "CLD",
            backgroundColor: "blue",
            data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3,]
        }, {
            label: "TIF",
            backgroundColor: "red",
            data: [0, 0, 0, 0.60, 0.70, 0.70]
        }, {
            label: "SOC",
            backgroundColor: "#003f5c",
            data: [0.9, 0.98, 0.1, 0.1, 0.4, 0.2]
        }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Economic Mode'
        },
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Factor Value (Resilient)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(Hours)'
                }
            }],
        }
    }
});

//Decision Post-linechart
var decisionpostctx2 = document.getElementById('decision-post-linechart').getContext('2d');
var decision_during_lineChart = new Chart(decisionpostctx2, {
    type: 'line',
    data: {
        labels: ['10', '20'],
        datasets: [{
            fill: false,
            label: '',
            data: [0.7, 0.85],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',

            // ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 4
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Resiliency Value'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
        }
    }
});


// Animation
var index = 0;
var id = setInterval(function () {
    heat_threat.addLatLng(address[index++]);
    if (index >= address.length - 1) { clearInterval(id); }
}, 5000);


var heat_decision = L.heatLayer([], {
    minOpacity: 0.8,
    radius: 50,
    blur: 10,
    gradient: {
        0.45: "rgb(0,0,255)",
        0.55: "rgb(0,255,255)",
        0.65: "rgb(0,255,0)",
        0.95: "rgb(255,255,0)",
        1.0: "rgb(255,0,0)"
    }
}).addTo(decision_pre_map);

// Animation
var index2 = 0;
var id2 = setInterval(function () {
    heat_decision.addLatLng(address[index2++]);
    if (index2 >= address.length - 1) { clearInterval(id2); }
}, 5000);

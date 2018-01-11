var config = {
    apiKey: "AIzaSyCPOg8NJ3Quim0Oo9_G-mfp9pNxvLOCRN0",
    authDomain: "trains-9152f.firebaseapp.com",
    databaseURL: "https://trains-9152f.firebaseio.com",
    projectId: "trains-9152f",
    storageBucket: "trains-9152f.appspot.com",
    messagingSenderId: "806790957256"
  };
  firebase.initializeApp(config);

 // Create a variable to reference the database.
    var database = firebase.database();

$('#submitButton').on("click", function(event){
    event.preventDefault(event)

    var train = $('#TrainName').val().trim();
    var destination = $('#destination').val().trim();
    var FirstTrainTime = $('#time').val().trim();
    var frequency = $('#frequency').val().trim();

    console.log(frequency, destination, FirstTrainTime, frequency);

    var trainSchedule = {
        train: TrainName,
        destination: destination,
        FirstTrainTime: time,
        frequency: frequency
    }

    database.ref().push({
        trainSchedule
    });
    
});

database.ref().on("child_added", function(snapshot){
 console.log(snapshot.val());

 var row = $('<tr>');
  var nameData = $('<td>');
   var destinationData = $('<td>');
   var FirstTrainTimeData = $('<td>');    
  var timeData = $('<td>');
   var frequencyData = $('<td>');
   

 nameData.text(snapshot.val().trainSchedule.train);
  destinationData.text(snapshot.val().trainSchedule.destination);
  startDateData.text(snapshot.val().trainSchedule.FirstTrainTime);
  monthlyRateData.text(snapshot.val().trainSchedule.frequency);

console.log(moment(startDateData, "YYYYMMDD").fromNow());

var dateFormat = "MM/DD/YY";
var convertedDate = moment(startDateData, dateFormat);

moment(convertedDate).format('YYMMDD')
     

 row.append(nameData, destinationData, FirstTrainTimeData, timeData, frequencyData);
  $('.tableBody').append(row);
});
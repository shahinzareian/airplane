function getFlys() {
    $.get('api/flights', function (flys) {
        displayFlys(flys);
    });
}
function getAirplanes() {
    $.get('api/airplanes', function (airplanes) {
        displayAirplanes(airplanes);
    });
}
var flyIdDelete;
var airplaneIdDelete;
function displayFlys(flys) {
     var flyContainer = $('#flyContainer');
     flyContainer.empty();
     $.each(flys, function (index, fly) {
         $('#flyContainer').append(' <tr><td>id: ' + fly.id + '   </td>     <td>    origin: ' + fly.origin +'  </td><td>destination: ' + fly.destination + '  </td><td>    airplane: ' + fly.airplane +'  </td><td><button class="remove-button" flyId="' + fly.id + '">delete</button></td></tr>');
     });

     $('#flyContainer .remove-button').click(function () {
         flyIdDelete = $(this).attr('flyId');

         $('#areYouSure').modal({ backdrop: 'static', keyboard: false });
     });
 }
 function displayAirplanes(airplanes) {
     var airplaneContainer = $('#airplaneContainer');
     airplaneContainer.empty();
     $.each(airplanes, function (index, airplane) {
         $('#airplaneContainer').append(' <tr><td>id: ' + airplane.id + '   </td>     <td>    airplane: ' + airplane.airPlaneName +'  </td><td><button class="remove-button" airplaneId="' + airplane.id + '">delete</button></td></tr>');
     });

     $('#airplaneContainer .remove-button').click(function () {
         airplaneIdDelete = $(this).attr('airplaneId');

         $('#areYouSureAir').modal({ backdrop: 'static', keyboard: false });
     });
 }


$(document).ready(function () {
    $('#createFlightButton').click(createFly);
     $('#createAirplaneButton').click(createAirplane);
     $('#confirmDelete').click(removeFly);
     $('#confirmDeleteAir').click(removeAirplane);
     getAirplaneSelect();
     getAirplanes();

    getFlys();
});
function postFly(fly) {
    var jsonFly = JSON.stringify(fly);

    $.ajax({
        url: "api/flights",
        type: "post",
        contentType: "application/json",
        data: jsonFly,
        success: function () {
            alert('we created a new flights.');
            getFlys();
             $('#originCountryInput').val('');
             $('#destinationCountryInput').val('');
        },
        error: function () {
            alert('something went wrong.');
        }
    });
}
function createFly() {
    var originName = $('#originCountryInput').val();
    var destinationName = $('#destinationCountryInput').val();
    var airplaneName= $('#airplaneSelect').val();

    if (!originName) {
        $("#noName").modal("show");
        return;
    }
    if (originName.length < 3) {
        $("#tooShort").modal("show");
        return;
    }
     if (!destinationName) {
            $("#noName").modal("show");
            return;
        }
        if (destinationName.length < 3) {
            $("#tooShort").modal("show");
            return;
        }
    var fly = {
        origin: originName,
        destination:destinationName,
        airPlane:airplaneName
    };
    postFly(fly);
}
function postFly(fly) {
    var jsonFly = JSON.stringify(fly);

    $.ajax({
        url: "api/flights",
        type: "post",
        contentType: "application/json",
        data: jsonFly,
        success: function () {
            alert('we created a new flights.');
            getFlys();
             $('#originCountryInput').val('');
             $('#destinationCountryInput').val('');
        },
        error: function () {
            alert('something went wrong.');
        }
    });
}
function createAirplane() {
    var airplaneName1 = $('#airplaneNameInput').val();

        if (!airplaneName1) {
        $("#noName").modal("show");
        return;
    }
    if (airplaneName1.length < 3) {
        $("#tooShort").modal("show");
        return;
    }
     var airplane = {
            airPlaneName: airplaneName1

        };

    postAirplane(airplane);
}

function postAirplane(airplane) {
    var jsonAirplane = JSON.stringify(airplane);

    $.ajax({
        url: "api/airplanes",
        type: "post",
        contentType: "application/json",
        data: jsonAirplane,
        success: function () {
            alert('we created a new airplane.');
            getAirplanes();
          $('#airplaneNameInput').val('');

        },
        error: function () {
            alert('something went wrong.');
        }
    });
}




function removeFly() {
    var flyId = flyIdDelete;
    $.ajax({
        url: 'api/flights/' + flyId,
        type: 'delete',
        success: function () {
            getFlys();
            $("#areYouSure").modal("hide");

        },
        error: function () {
            $("#areYouSure").modal("hide");
            alert('something went wrong.');
        }

    });

}
function removeAirplane() {
    var airplaneId = airplaneIdDelete;
    $.ajax({
        url: 'api/airplanes/' + airplaneId,
        type: 'delete',
        success: function () {
           getAirplanes();
            $("#areYouSureAir").modal("hide");

        },
        error: function () {
            $("#areYouSureAir").modal("hide");
            alert('something went wrong.');
        }

    });

}
function displayAirplaneSelect(airplanes) {
    var airplaneSelect = $('#airplaneSelect');
    airplaneSelect.empty();
    $.each(airplanes, function (index, airplane) {
        $('#airplaneSelect').append(' <option value="' + airplane.id + '" >' + airplane.airPlaneName + '</option>');

    });
}
function getAirplaneSelect() {
    $.get('api/airplanes', function (airplanes) {
        displayAirplaneSelect(airplanes);
    });
}



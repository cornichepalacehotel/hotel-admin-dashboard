document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        selectable: true, // දින තෝරන්න පුළුවන්
        select: function(info) {
            let rate = prompt('Enter Rate for ' + info.startStr + ':');
            if (rate) {
                // Rate එක Calendar එකේ පෙන්වීම
                calendar.addEvent({
                    title: 'LKR ' + rate,
                    start: info.startStr,
                    allDay: true
                });
                alert("Rate LKR " + rate + " saved for " + info.startStr);
            }
        },
        eventClick: function(info) {
            if(confirm("Do you want to delete/block this date?")) {
                info.event.remove();
            }
        }
    });
    
    calendar.render();
});

function addRoom() {
    let name = document.getElementById('roomName').value;
    if(name) {
        alert("Room '" + name + "' added!");
        document.getElementById('roomName').value = ""; // Clear input
    } else {
        alert("Please enter a room name.");
    }
}

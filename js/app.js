document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function(info) {
            let rate = prompt('Enter Rate for ' + info.startStr);
            if (rate) {
                // Rate Save/Update API logic here
                alert("Rate " + rate + " saved for " + info.startStr);
                calendar.addEvent({ title: 'LKR ' + rate, start: info.startStr, allDay: true });
            }
        },
        eventClick: function(info) {
            if(confirm("Block this date?")) {
                info.event.remove(); // UI එකෙන් දවස අයින් කරනවා (Block කරනවා)
            }
        }
    });
    calendar.render();
});

function addRoom() {
    let name = document.getElementById('roomName').value;
    alert("Room " + name + " added successfully!");
}

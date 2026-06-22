document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        selectable: true,
        // දවසක් උඩ ක්ලික් කළාම වෙන දේ
        select: function(info) {
            let price = prompt('Enter Room Rate for ' + info.startStr + ':');
            if (price) {
                // මෙතන තමයි ඔයාගේ API එකට data යවන්නේ
                console.log("Saving to Backend:", { date: info.startStr, price: price });
                
                // Calendar එකට දාන්න (UI එකේ පේන්න)
                calendar.addEvent({
                    title: 'LKR ' + price,
                    start: info.startStr,
                    allDay: true
                });
            }
        }
    });
    
    calendar.render();
});

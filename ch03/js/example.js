(
    function() {
        var hotel = {
            name: 'Baek',
            roomRate: 240,
            discount: 15,
            offerPrice: function() {
                var offerRate = this.roomRate * ((100 - this.discount) / 100);
                return offerRate;
            }
        }

        var hotelName, roomRate, specialRate;

        hotelName = document.getElementById('hotelName');
        roomRate = document.getElementById('roomRate');
        specialRate = document.getElementById('specialRate');

        hotelName.textContent = hotel.name;
        roomRate.textContent = '$' + hotel.roomRate;
        specialRate.textContent = hotel.offerPrice().toFixed(2);

        var expriryMsg;
        var today;
        var elEnds;

        function offerExpires(today) {
            var weekFromToday, day, date, month, year, dayNames, monthNames;
            weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

            dayNames = ['일요일', '월요일', '수요일', '목요일', '금요일', '토요일'];
            monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

            
        }
    }
)
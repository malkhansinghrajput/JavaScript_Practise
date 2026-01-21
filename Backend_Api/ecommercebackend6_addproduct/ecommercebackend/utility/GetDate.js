export function getDate() {
    // Get current date
    const today = new Date();

    // Extract day, month, and year
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // Add leading zero to day and month if needed
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Format the date as dd/mm/yyyy
    const formattedDate = `${day}_${month}_${year}`;

    // console.log(formattedDate);
    return formattedDate
}

export function getDateTime() {
    const date = new Date();

    // Function to convert
    // single digit input
    // to two digits
    const formatData =
        (input) => {
            if (input > 9) {
                return input;
            } else return `0${input}`;
        };

    // Function to convert
    // 24 Hour to 12 Hour clock
    const formatHour =
        (input) => {
            if (input > 12) {
                return input - 12;
            }
            return input;
        };

    // Data about date
    const format = {
        dd: formatData(date.getDate()),
        mm: formatData(date.getMonth() + 1),
        yyyy: date.getFullYear(),
        HH: formatData(date.getHours()),
        hh: formatData(formatHour(date.getHours())),
        MM: formatData(date.getMinutes()),
        SS: formatData(date.getSeconds()),
    };
    const format24Hour = (
        {
            dd, mm, yyyy,
            HH, MM, SS
        }) => {
        // console.log(
        //     `${mm}/${dd}/${yyyy} 
		// ${HH}:${MM}:${SS}`
        // );
    };
    var dt=undefined
    const format12Hour =
        (
            {
                dd, mm,
                yyyy, hh,
                MM, SS
            }
        ) => {
            // console.log(
            //     `${mm}/${dd}/${yyyy} 
			// ${hh}:${MM}:${SS}`
            // );
            dt=`${mm}_${dd}_${yyyy}_${hh}:${MM}:${SS}`
    };

    // Time in 24 Hour format
    format24Hour(format);
    // Time in 12 Hour format
    format12Hour(format);

    return dt
}

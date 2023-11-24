// switch (key) {
//     case value:
        
//         break;
//     case value:
        
//         break;

//     default:
//         break;
// }

let day = 5
switch (day) {
    case 1:  // if(day ==1) then execute this block)
        console.log("Sunday");
        break;
    case 2:  // if(day ==2) then execute this block)
        console.log("Monday");
        break;
    case 3:  // if(day ==3) then execute this block)
        console.log("Tuesday");
        break;
    case 4:  // if(day ==4) then execute this block)
        console.log("Wednesday");
        break;
    case 5:  // if(day ==5) then execute this block)
        console.log("Thursday");
        break;
    case 6:  // if(day ==6) then execute this block)
        console.log("Friday");
        break;
    case 7:  // if(day ==7) then execute this block)
        console.log("Saturday");
        break;

    default: // if (expression === none of the previous conditions then execute this block)
        console.log("Day doesn't exist");
        break;
}

// If there is no break statement added before the default case, default will also be executed. In this example, the default case was not executed because the break keyword was used before it.

const month = "jan"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("Month doesnot exist");
        break;
}
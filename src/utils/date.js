const today = new Date();
const year = today.getFullYear();
const month = padZero(today.getMonth() + 1);
const day = padZero(today.getDay());

const result = `${year}. ${month}. ${day}`;

function padZero(data) {
    data = data + "";
    return data.padStart(2, "0");
} 

export default result;
export { year, month, day }; 
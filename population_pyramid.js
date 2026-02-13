alert("JS已載入");

fetch('population_pyramid.csv')
.then(response => {
    console.log("Response:", response);
    return response.text();
})
.then(data => {

    console.log("CSV內容:", data);

    const rows = data.trim().split(/\r?\n/).slice(1);
    console.log("Rows數量:", rows.length);

});

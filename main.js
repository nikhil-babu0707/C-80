var array = [];

function submit() {
    var display_array = [];
    for (var four = 1; four <= 4; four++) {
        var nama = document.getElementById("name_of_the_student_" + four).value;
        console.log(nama);
        array.push(nama);
    }
    console.log(array);
    var llength = array.length;
    console.log(llength);
    for (var f2 = 0; f2 < llength; f2++) {
        display_array.push("<h4>NAME - " + array[f2] + "</h4>");
        console.log(display_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_commas = display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    array.sort();
    console.log(array);
    var array2 = [];
    var llength = array.length;
    console.log(llength);
    for (var f2 = 0; f2 < llength; f2++) {
        array2.push("<h4>NAME - " + array[f2] + "</h4>");
        console.log(array2);
    }
    var remove_commas = array2.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
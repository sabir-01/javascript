function data() {
    var text = document.getElementsByClassName('input')[0].value.toUpperCase();
    var mytable = document.getElementById('mytable')
    var tr = mytable.getElementsByTagName('tr')
    console.log(tr);

    for (var i = 0; i < tr.length; i++) {

        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(text) > -1) {
                tr[i].style.display = ""

            }
            else {
                tr[i].style.display = "none"

            }
        }
    }

}
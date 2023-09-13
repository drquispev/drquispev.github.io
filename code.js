function calcular(){
    // Ingreso data
    var n = parseInt(document.getElementById("value-n").value)
    var seed = parseInt(document.getElementById("value-seed").value)
    var a = parseInt(document.getElementById("value-a").value)
    var d = parseInt(document.getElementById("value-d").value)

    var data = []
    // Desarrollo de data
   for (let i = 0; i < n; i++) {
    var result = (seed * a).toString()
    var aux = (result.length - d) / 2
    var new_seed = parseInt(result.substr(aux, d))

    var r = new_seed / (10**d)

    data.push([seed, result, new_seed, r])

    seed = new_seed
   }

    // Muestra de data
   var tbody = document.getElementById("container-content")
   data.forEach(iteracion => {
    var tr = document.createElement("tr")

    var td = document.createElement("td")
    td.textContent = data.indexOf(iteracion)+1
    td.className = "px-6"
    td.className += " py-4"
    tr.appendChild(td)
    
    iteracion.forEach(element => {
        var td = document.createElement("td")
        td.textContent = element
        td.className = "px-6"
        td.className += " py-4"
        tr.appendChild(td)
    });

    tr.classList.add(
        "bg-white",
        "border-b",
        "dark:bg-gray-800", 
        "dark:border-gray-700", 
        "hover:bg-gray-50",
        "dark:hover:bg-gray-600",
        "text-center",
        "mr-2",
        "mb-2"
        ) 
    tbody.appendChild(tr)
   });
}

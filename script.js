const postre=document.getElementById('inputGroupSelect01');
const cantidad=document.getElementById('cantidad')
const aRegistro=document.getElementById('inputGroupSelect02');

let miCanvas=document.getElementById('registro').getContext('2d');

let postresChart= new Chart(miCanvas, {
    type: 'bar',
    data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets:[
            {
            label: "Brownies",
            backgroundColor: "rgba(224, 187, 228)",
            data: [2000, 3900, 5000, 4500]
        },
        {
            label: "Pastel",
            backgroundColor: "rgba(149, 125, 173)",
            data:[4020, 2000, 3000, 400]
        },
        {
            label: "Galletas",
            backgroundColor: "rgba(254, 200, 216)",
            data:[1200, 1300, 2000, 1000]
        }]
}
})

function registrarPostre(event){
    event.preventDefault();
    
    let rp=postre.options[postre.selectedIndex].value;
    console.log('Postre ->', rp);
    let ra=aRegistro.options[aRegistro.selectedIndex].value;
    console.log('Año ->', ra);
    let rc=cantidad.value;
    console.log('Cantidad ->', rc);
    

    //brownies 2020
    if(rp=="Brownies" && ra=="2020"){
        postresChart.data.datasets[0].data[0]=rc
    }
    //brownies 2021
    else if(rp=="Brownies" && ra=="2021"){
        postresChart.data.datasets[0].data[1]=rc
    }
    //brownies 2022
    else if(rp=="Brownies" && ra=="2022"){
        postresChart.data.datasets[0].data[2]=rc
    }
    //brownies 2023
    else if(rp=="Brownies" && ra=="2023"){
        postresChart.data.datasets[0].data[3]=rc
    }
    //pastel 2020
    else if(rp=="Pastel" && ra=="2020"){
        postresChart.data.datasets[1].data[0]=rc
    }
    //pastel 2021
    else if(rp=="Pastel" && ra=="2021"){
        postresChart.data.datasets[1].data[1]=rc
    }
    //pastel 2022
    else if(rp=="Pastel" && ra=="2022"){
        postresChart.data.datasets[1].data[2]=rc
    }
    //pastel 2023
    else if(rp=="Pastel" && ra=="2023"){
        postresChart.data.datasets[1].data[3]=rc
    }
    //galletas 2020
    else if(rp=="Galletas" && ra=="2020"){
        postresChart.data.datasets[2].data[0]=rc
    }
    //galletas 2021
    else if(rp=="Galletas" && ra=="2021"){
        postresChart.data.datasets[2].data[1]=rc
    }
    //galletas 2022
    else if(rp=="Galletas" && ra=="2022"){
        postresChart.data.datasets[2].data[2]=rc
    }
    //galletas 2023
    else if(rp=="Galletas" && ra=="2023"){
        postresChart.data.datasets[2].data[3]=rc
    }
    else{
        alert('¡Debe ingresar una opcion valida!')
    }
    



    postresChart.update();
    
}

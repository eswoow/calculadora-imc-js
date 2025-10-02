function calcularIMC(){
    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100; // Convertendo cm para m
    let sexo = document.getElementById("sexo").value;
    let statusIMC = "";
    let peso_para_ganhar = 0.0;
    let peso_para_perder = 0.0;
    imc = (peso /(altura * altura)).toFixed(2);

    switch (sexo) {
        case "masculino":
            if (imc < 20.7) {
                statusIMC = "Abaixo do peso";
                peso_para_ganhar = (20.7 * (altura * altura)) - peso;
            }
            else if (imc >= 20.7 && imc < 26.4) {
                statusIMC = "Peso ideal";
            }
            else if (imc >= 26.4 && imc < 27.8) {
                statusIMC = "Marginalmente acima do peso";
                peso_para_perder = peso - (26.4 * (altura * altura));
            }
            else if (imc >= 27.8 && imc < 31.1) {
                statusIMC = "Acima do peso";
                peso_para_perder = peso - (26.4 * (altura * altura));
            }
            else {
                statusIMC = "Obesidade";
                peso_para_perder = peso - (26.4 * (altura * altura));
            }
            break;
        case "feminino":
            if (imc < 19.1) {
                statusIMC = "Abaixo do peso";
                peso_para_ganhar = (19.1 * (altura * altura)) - peso;
            }
            else if (imc >= 19.1 && imc < 25.8) {
                statusIMC = "Peso ideal";
            }
            else if (imc >= 25.8 && imc < 27.3) {
                statusIMC = "Marginalmente acima do peso";
                peso_para_perder = peso - (25.8 * (altura * altura));
            }
            else if (imc >= 27.3 && imc < 31.1) {
                statusIMC = "Acima do peso";
                peso_para_perder = peso - (25.8 * (altura * altura));
            }
            else {
                statusIMC = "Obesidade";
                peso_para_perder = peso - (25.8 * (altura * altura));
            }
            break;
    }
    if (statusIMC == "Abaixo do peso") {
        window.alert("Nome: " + nome +"\nPeso: " + String(peso) +"\nAltura: " + String(altura) +"\nSexo: " + sexo + "\nIMC: " + imc + "\nStatus do IMC: " + statusIMC + "\nPeso para ganhar: " + String(peso_para_ganhar.toFixed(2)) + " kg");
    }else if (statusIMC === "Peso ideal"){
        window.alert("Nome: " + nome +"\nPeso: " + String(peso) +"\nAltura: " + String(altura) +"\nSexo: " + sexo + "\nIMC: " + imc + "\nStatus do IMC: " + statusIMC);
    }else{
        window.alert("Nome: " + nome +"\nPeso: " + String(peso) +"\nAltura: " + String(altura) +"\nSexo: " + sexo + "\nIMC: " + imc + "\nStatus do IMC: " + statusIMC + "\nPeso para perder: " + String(peso_para_perder.toFixed(2)) + " kg");
    }
}
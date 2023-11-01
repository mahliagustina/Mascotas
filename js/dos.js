let formularioReporte = document.getElementById("formularioReportarPerdida");
let h3ReportePerdida = document.getElementById("h3ReportePerdida");
let pReportePerdida = document.getElementById("pReportePerdida");

let reportesVariosPerdidos = JSON.parse(localStorage.getItem("reportesVariosPerdidos")) || [];

for (let i = 0; i < reportesVariosPerdidos.length; i++) {
    pReportePerdida.innerText = `Hola ${reportesVariosPerdidos[i].nombreReportePerdida}, te recordamos que ya ingresaste tu correo ${reportesVariosPerdidos[i].emailReportePerdida}, reportando la pérdida de ${reportesVariosPerdidos[i].animalPerdido} en ${reportesVariosPerdidos[i].zonaPerdida}.`;
}

formularioReporte.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombreReportePerdida = document.getElementById("nombreReportePerdida").value;
    let emailReportePerdida = document.getElementById("emailReportePerdida").value;
    let animalPerdido = document.getElementById("animalPerdido").value;
    let zonaPerdida = document.getElementById("zonaPerdida").value;

    if (
        nombreReportePerdida.trim() === "" ||
        emailReportePerdida.trim() === "" ||
        animalPerdido.trim() === "" ||
        zonaPerdida.trim() === ""
    ) {
        alert("Completa todos los espacios por favor");
        return;
    }

    let reportePerdida = {
        nombreReportePerdida: nombreReportePerdida,
        emailReportePerdida: emailReportePerdida,
        animalPerdido: animalPerdido,
        zonaPerdida: zonaPerdida,
    };

    reportesVariosPerdidos.push(reportePerdida);
    localStorage.setItem("reportesVariosPerdidos", JSON.stringify(reportesVariosPerdidos));

    h3ReportePerdida.innerText = `Chequea los datos ingresados, ${reportePerdida.nombreReportePerdida}:`;
    pReportePerdida.innerText = `Tu nombre es ${reportePerdida.nombreReportePerdida}, tu correo ${reportePerdida.emailReportePerdida}, tu animal perdido ${reportePerdida.animalPerdido} y la zona donde fue visto por última vez ${reportePerdida.zonaPerdida}.`;

    document.getElementById("nombreReportePerdida").value = "";
    document.getElementById("emailReportePerdida").value = "";
    document.getElementById("animalPerdido").value = "";
    document.getElementById("zonaPerdida").value = "";
});

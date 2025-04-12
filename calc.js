document.addEventListener("DOMContentLoaded", ()=>{
    // e.preventDefault();
    const form = document.querySelector("#calcForm");
    const btnCalc = document.querySelector("#btnCalc");
    const { quantidadeContada, pesoQuantidadeContada, pesoTotal} = data;

    const calc = (data) => {
        const num1 = parseFloat(quantidadeContada);
        const num2 = parseFloat(pesoQuantidadeContada);
        const num3 = parseFloat(pesoTotal);
        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Campos inválidos");
            return "Campos Inválidos";
        }
        let result = 0;
        result = (num3 * num1) / num2;
        const isRound = (num1/num1) < (num2/num2);
        if(isRound){
            return Math.floor(result) - 1;
        }
        return Math.ceil(result);
    }
    const modalCalc = document.querySelector("#modalCalc");
    // isOpenModal = false;
    btnCalc.addEventListener("click", (e)=>{
        // e.preventDefault();
        modalCalc.classList.add("is-active");
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const result = calc(data);
        const calcResult = document.querySelector("#calcResult");
        
        calcResult.innerText = `Resultado: ${result} unidades`;
        calcResult.scrollIntoView({ behavior: "smooth" });
    });
    btnCalc.removeEventListener("click", (e)=>{});
    
    const btnCloseModal = document.querySelector("#btnCloseModal");
    const inputsData = document.querySelectorAll(".inputsData");
    btnCloseModal.addEventListener("click", (e)=>{
        e.preventDefault();
        inputsData.innerHTML = `
            <p>Quantidade Contada: ${quantidadeContada}</p>
            <p>Peso da Quantidade Contada: ${pesoQuantidadeContada}</p>
            <p>Peso Total: ${pesoTotal}</p>
        `;
        form.reset();
        modalCalc.classList.remove("is-active");
    });
});
document.removeEventListener("DOMContentLoaded", (e)=>{});
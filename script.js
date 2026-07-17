// ===============================
// CONTROLE DAS PÁGINAS
// ===============================

function mostrarPagina(id) {

    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");

    document.querySelectorAll(".menu").forEach(btn=>{
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

}


// ===============================
// CARREGAR HISTÓRICO
// ===============================

let historico = JSON.parse(localStorage.getItem("atas")) || [];

atualizarHistorico();


// ===============================
// GERAR ATA
// ===============================

function gerarAta(){

    const empresa = document.getElementById("empresa").value.trim();

    const contato = document.getElementById("contato").value.trim();

    const assunto = document.getElementById("assunto").value.trim();

    const transcricao = document.getElementById("transcricao").value.trim();

    if(!empresa || !transcricao){

        alert("Preencha pelo menos Empresa e Transcrição.");

        return;

    }

    const data = new Date().toLocaleDateString("pt-BR");

    const ata = `
ATA DE VISITA

Empresa:
${empresa}

Contato:
${contato}

Data:
${data}

Assunto:
${assunto}

Resumo da visita:

${transcricao}

Próximos passos:

•

•

•
`;

    document.getElementById("resultado").value = ata;

    historico.unshift({

        empresa,
        contato,
        assunto,
        data,
        ata

    });

    localStorage.setItem("atas",JSON.stringify(historico));

    atualizarHistorico();

}


// ===============================
// COPIAR ATA
// ===============================

function copiarAta(){

    const texto = document.getElementById("resultado");

    texto.select();

    document.execCommand("copy");

    alert("Ata copiada com sucesso!");

}



// ===============================
// HISTÓRICO
// ===============================

function atualizarHistorico(){

    const lista = document.getElementById("listaHistorico");

    lista.innerHTML="";

    if(historico.length===0){

        lista.innerHTML="<p>Nenhuma ata cadastrada.</p>";

        return;

    }

    historico.forEach((item,index)=>{

        lista.innerHTML += `

        <div class="itemHistorico">

            <h3>${item.empresa}</h3>

            <p><strong>Contato:</strong> ${item.contato}</p>

            <p><strong>Data:</strong> ${item.data}</p>

            <p><strong>Assunto:</strong> ${item.assunto}</p>

            <br>

            <button class="principal" onclick="abrirAta(${index})">

                Visualizar

            </button>

        </div>

        `;

    });

}



// ===============================
// ABRIR ATA
// ===============================

function abrirAta(index){

    document.getElementById("resultado").value = historico[index].ata;

    mostrarPagina("novaAta");

}



// ===============================
// FUTURO
// ===============================

// cadastrarEmpresa()

// exportarPDF()

// gerarEmail()

// dashboard()

// filtros()

// Máscaras de CPF e Telefone

    // Função para aplicar a máscara de CPF
    function aplicarMascaraCPF(cpf) {
        cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
    }

    // Função para aplicar a máscara de Telefone
    function aplicarMascaraTelefone(telefone) {
        telefone = telefone.replace(/\D/g, ""); // Remove caracteres não numéricos
        telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
        telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");
        telefone = telefone.replace(/(\d{4})-(\d{4})$/, "$1-$2");
        return telefone;
    }


    // Evento de input para o campo de CPF
    document.getElementById('cpf').addEventListener('input', function() {
        this.value = aplicarMascaraCPF(this.value);
    });

    // Evento de input para o campo de Telefone
    document.getElementById('telefone').addEventListener('input', function() {
        this.value = aplicarMascaraTelefone(this.value);
    });

    // Evento de clique no botão Enviar
    document.getElementById('enviar').addEventListener('click', function() {
        let cpf = document.getElementById('cpf').value;
        let telefone = document.getElementById('telefone').value;
        alert("CPF: " + cpf + "\nTelefone: " + telefone);
    });
    function calculate() {
        // Obtém os valores dos inputs
        const valor1 = parseFloat(document.getElementById('valor1').value);
        const valor2 = parseFloat(document.getElementById('valor2').value);
        const valor3 = parseFloat(document.getElementById('valor3').value);
        const resultadoElement = document.getElementById('resultado');
    
        // Verifica se todos os valores necessários foram fornecidos
        if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
            // Calcula o resultado (supondo uma regra de 3 simples)
            const resultado = (valor3 * valor1) / valor2;
    
            // Atualiza o resultado no HTML
            resultadoElement.textContent = `Resultado: ${resultado.toFixed(2)}`;
    
            // Remove a classe 'hidden' para mostrar o resultado
            resultadoElement.classList.remove('hidden');
        } else {
            // Se algum valor estiver faltando, oculta o resultado
            resultadoElement.classList.add('hidden');
        }
    }

// Zoom Animation (CSS)
const img = document.querySelector('.grid-item img');
if (img) {
    img.classList.add('zoom');
}
    
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // Use 'flex' para centralizar o conteúdo
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    // Obtenha o modal
    var modal = document.getElementById('myModal');

    // Obtenha o botão que abre o modal
    var btn = document.getElementById('openModal');

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName('close')[0];

    // Quando o usuário clicar no botão, abre o modal
    btn.onclick = function() {
        openModal();
    }

    // Quando o usuário clicar em <span> (x), fecha o modal
    span.onclick = function() {
        closeModal();
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }    
});   

function showPhone(button) {
    // Seleciona o container da imagem
    const infoContainer = button.closest('.info-container');
    const corretorFoto = infoContainer.querySelector('.corretor-foto');

    // Número formatado a ser exibido
    const phoneNumber = '(99) 99999-9999';

    // Aplica o desfoque à imagem
    corretorFoto.style.filter = 'blur(5px)';

    // Exibe o alerta com um pequeno atraso para garantir que o desfoque seja aplicado
    setTimeout(() => {
        alert(`Telefone: ${phoneNumber}`);
    }, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download').addEventListener('click', function() {
        html2canvas(document.querySelector('.imovel-guide-content'), { useCORS: true })
            .then(function(canvas) {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'ImagemCasa.png';
                link.click();
            })
            .catch(function(error) {
                console.error('Erro ao gerar a imagem:', error);
            });
    });
});

// Seleciona o botão do menu hamburguer e o menu móvel
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Adiciona um listener de clique no menu hamburguer
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'show' para mostrar ou esconder o menu
    mobileNav.classList.toggle('show');
});


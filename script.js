
      // Recebendo a data e hora do sistema
      var agora   = new Date();
      var ano     = agora.getFullYear();

      /* 
        FUNÇÃO: atualizaAnoRodape()
        ============================================
        Criada para atualizar o ano no rodapé do 
        nosso site. */

      function atualizaAnoRodape() {
        
        // Manipulador do DOM
        var anoRodape = document.querySelector('span.ano');
        
        // Recebe o ano atual do sistema
        anoRodape.innerText = ano;
      }

      /* 
        FUNÇÃO: verificar() 
        ============================================
        Recebe os dados passados pelo usuário e 
        retorna o resultado do nosso teste na área
        reservada. */

      function verificar() {

        // Recebe o ano informado pelo usuário
        var anoNascimento = document.getElementById('txtano');
        // Manipulador da área onde iremos colocar o resultado do teste
        var resposta = document.querySelector('div#res');

        // Teste para saber se o ano inserido pelo usuário é válido
        if (anoNascimento.value == 0 || anoNascimento.value > ano) {
          
          // ENCONTROU ERRO... 
          
          // Exibe alerta para o usuário
          window.alert(`[ERROR] "${anoNascimento.value}" Não é um valor aceitável.\n`+
            `Verifique os dados e tente novamente.`);
        }
        else {
          
          // NÃO ENCONTROU ERRO...

          // Cria as variáveis para manipular os elementos
          var fsex    = document.getElementsByName('genre'); // Recebe os 'radio buttons'
          var idade   = ano - Number(anoNascimento.value); // Calcula a idade
          var genero  = ''; // Variável para receber o gênero
          var img     = document.createElement('img'); // Cria um elemento de imagem <img>
          var legenda = ''; // Legenda da foto

          // Definindo um ID em nosso elemento <img>
          img.setAttribute('id','foto')

          // Agora veremos qual o sexo selecionado pelo usuário
          if (fsex[0].checked) {
            
            // Marcou 'Masculino'
            genero = 'Homem';
            
            // Teste para exibir a foto masculina de acordo com a idade calculada
            if (idade >= 0 && idade < 12) {
              // Criança
              img.setAttribute('src','https://dl.dropboxusercontent.com/s/mu9qxfar3b2btgn/VID-20220123-WA0083.mp4?dl=0');
              legenda = 'O Chaves'; // Define a legenda da foto
            } else if (idade < 21) {
              // Jovem
              img.setAttribute('src','https://dl.dropbox.com/s/4w1ml8phgzlusig/RoundPhoto_Jan282022_045601.png?dl=0');
              legenda = 'O Kiko'; // ...
            } else if (idade < 50) {
              // Adulto
              img.setAttribute('src','https://dl.dropbox.com/s/2qfjoq152z56ilc/RoundPhoto_Jan282022_050059.png?dl=0');
              legenda = 'O Seu Madruga';
            } else {
              // Idoso
              img.setAttribute('src','https://dl.dropbox.com/s/a90psojt6kj5yvg/RoundPhoto_Jan282022_172955.png?dl=0');
              legenda = 'O Jaiminho';
            }

          } else if (fsex[1].checked) {
            
            // Marcou 'Feminino'
            genero = 'Mulher';

            // Teste para exibir a foto feminina de acordo com a idade calculada
            if (idade >= 0 && idade < 12) {
              // Criança
              img.setAttribute('src','https://dl.dropbox.com/s/jtjtlsbwriqf40a/RoundPhoto_Jan282022_045621.png?dl=0');
              legenda = 'A Chiquinha'; // Definindo a legenda da foto
            } else if (idade < 21) {
              // Jovem
              img.setAttribute('src','https://dl.dropbox.com/s/x5k0gn2yknkt6pb/RoundPhoto_Jan282022_173151.png?dl=0');
              legenda = 'A Paty'; // ...
            } else if (idade < 50) {
              // Adulto
              img.setAttribute('src','https://dl.dropbox.com/s/umxmh5vwa50qr5u/RoundPhoto_Jan282022_045701.png?dl=0');
              legenda = 'A Dona Florinda';
            } else {
              // Idoso
              img.setAttribute('src','https://dl.dropbox.com/s/plvfb283u9oirlx/RoundPhoto_Jan282022_173029.png?dl=0');
              legenda = 'A Dona Neves';
            }
          }

          // Montando e exibindo a resposta para o usuário
          resposta.innerHTML = `<p>Você é <strong>${genero}</strong> e tem <strong>${idade} anos.</strong></p><p>Você poderia ser...</p>`;
          
          // Acrescentando a foto na resposta
          resposta.appendChild(img);

          // Acrescentando a legenda abaixo da foto
          resposta.innerHTML += `<h3>${legenda}</h3>`;
        }
      }
      // --------------------------
      //  FIM DO CÓDIGO JAVASCRIPT
      // --------------------------
 

 

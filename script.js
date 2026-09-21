// Coloque o endereço do sistema entre as aspas quando ele estiver disponível.
// Exemplo: const enderecoDoSistema = 'https://sistema.sua-instituicao.edu.br';
const enderecoDoSistema = '';

if (enderecoDoSistema !== '') {
  const linkDeAcesso = document.getElementById('acesso-sistema');
  linkDeAcesso.href = enderecoDoSistema;
}

// O restante da página funciona apenas com HTML e CSS.

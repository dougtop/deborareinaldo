<?
$nome = $_POST['nome'];
$email = $_POST['email'];
$email = $_POST['telefone'];
$campomensagem = $_POST['mensagem'];
//aqui nós resgatamos as variáveis do formulário
$para = "Douglas Santos<douglas.santoz@gmail.com>";
$assunto = "Mensagem enviada do site";
$mensagem = "$nome
$email
$telefone
$campomensagem";
/*aqui foram definidos: o local onde será enviado o e-mail($para)
o assunto do e-mail enviado ($assunto)
e a mensagem enviada ($mensagem) que contém todos os campos preenchido no formulário*/
if (strlen($nome) < 3)
echo "Digite seu nome!<BR> <a href=\'javascript:history.back(1);\'>Voltar</a>";
elseif (strlen($email) <= 3)
echo "E-mail inválido!<BR> <a href=\'javascript:history.back(1);\'>Voltar</a>";
elseif (strlen($telefone) <= 3)
echo "Telefone inválido!<BR> <a href=\'javascript:history.back(1);\'>Voltar</a>";
elseif (strlen($campomensagem) <= 3)
echo "Escreva uma mensagem!<BR> <a href=\'javascript:history.back(1);\'>Voltar</a>";
else{
mail($para,$assunto,$telefone,$mensagem);
echo "O formulário foi preenchido e enviado com sucesso!!";
}
/* Nas linhas acima foi feita uma confirmação do preenchimento dos formulários.. sendo que todos os
campos preenchidos do formulário será enviado com a instrução mail() */
?>
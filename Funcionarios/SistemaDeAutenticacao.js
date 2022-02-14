/*
Ser autencicavel significa ter a propriedade "senha"
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;       
    }

    static ehAutenticavel (autencicavel){
        return "autenticar" in autencicavel && autencicavel.autenticar instanceof Function
    }
}
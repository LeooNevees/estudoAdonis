import Address from "App/Models/Address";
import { ValidateService } from "App/Services/ValidateService";

export default class CepRepository {

    public static async create(params: ICepCreate) {
        return await Address.create({
            cep: await ValidateService.removeSpecialCharacter(params.cep),
            logradouro: params.logradouro,
            complemento: params.complemento? params.complemento : null,
            bairro: params.bairro,
            uf: params.uf,
            ibge: params.ibge,
            gia: params.gia ? params.gia : null,
            ddd: params.ddd ? params.ddd : null,
            siafi: params.siafi ? params.siafi : null,
        })
    }
}
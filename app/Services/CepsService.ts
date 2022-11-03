import Address from "App/Models/Address";
import CepRepository from "App/Repositories/CepRepository";
import { ValidateService } from "./ValidateService";

const axios = require('axios');

export default class CepsServices {

    public async index(params: ICepReceiving) {
        try {

            let cep = await ValidateService.removeSpecialCharacter(params.cep);
            let res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            let ret: ICepSending = res.data;

            return { error: false, data: ret };
        } catch (error) {
            return { error: true, message: error.message};
        }
    }

    public async add(params: ICepReceiving) {
        try {
            let cep = await ValidateService.removeSpecialCharacter(params.cep);
            let res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            let ret: ICepSending = res.data;

            //EXEMPLO DE UTILIZAÇÃO DIRETAMENTE PELA MODEL
            const getAddress = await Address.findBy('cep', cep);
            if(getAddress) {
                throw new Error("CEP já cadastrado na base");
            }

            //EXEMPLO DE UTILIZAÇÃO DIRETAMENTE PELO REPOSITÓRIO
            const retCreate = await CepRepository.create(ret);
            if (!retCreate) {
                throw new Error("Erro ao cadastrar novo endereço");
            }
            
            return { error: false, message: 'Dados Salvos com sucesso' };
        } catch (error) {
            return { error: true, message: error.message};
        }
    }
}
interface ICepReceiving {
    cep: string;
    numero: number;
}

interface ICepSending {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: number,
    ddd: number,
    siafi: number
}

interface ICepCreate {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: number,
    ddd: number,
    siafi: number
}
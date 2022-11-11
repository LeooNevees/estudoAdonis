const axios = require('axios');

export default class LangService {

    public async get(params: ILangSending) {
        try {
            let res = await axios.post(`http://stage-cetelem.qanw.com.br:3000/company/1/translation`, params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzkxNzgwNjksImV4cCI6MTczNjk0NDQ2OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.xfxz11awC181OEzvzGQbF4T-_lvnBBHn2U1Cd4VBjxM'
                }
            });

            return { error: false, data: res.data.lang };
        } catch (error) {
            return { error: true, message: error.message};
        }
    }
}
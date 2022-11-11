import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LangService from 'App/Services/LangService';

export default class LangController {
    public async get(ctx: HttpContextContract) {
        try {
            let params = {
                locale: ctx.params.locale,
                page: ctx.params.page
            };

            let response = await new LangService().get(params);

            if (response.error) {
                throw new Error(response.message);
            }
            
            return ctx.response.status(200).json(response);
        } catch (error) {
            return ctx.response.status(401).json({
                error: true, 
                message: error.message, 
            });
        }
    }

}

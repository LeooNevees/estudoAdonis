import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CepsService from 'App/Services/CepsService';

export default class CepsController {
    public async index(ctx: HttpContextContract) {
        try {
            let response = await new CepsService().index(ctx.params);
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

    public async add(ctx: HttpContextContract) {
        try {
            let response = await new CepsService().add(ctx.request.requestData);
            if (response.error) {
                throw new Error(response.message);
            }
            
            return ctx.response.status(201).json(response);
        } catch (error) {
            return ctx.response.status(401).json({
                error: true, 
                message: error.message, 
            });
        }
    }

}

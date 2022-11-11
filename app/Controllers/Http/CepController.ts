import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CepService from 'App/Services/CepService';

export default class CepController {
    public async index(ctx: HttpContextContract) {
        try {
            let response = await new CepService().index(ctx.params);
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
            let response = await new CepService().add(ctx.request.requestData);
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

    public async remove(ctx: HttpContextContract) {
        try {
            let response = await new CepService().remove(ctx.params);
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

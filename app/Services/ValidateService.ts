export class ValidateService {

   public static async removeSpecialCharacter(param: string) {
      return param.replace(/\D/g, "");
   }
}
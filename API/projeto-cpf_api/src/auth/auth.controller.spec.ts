import { CardBody } from "reactstrap";
import { AuthService } from "./auth.service";

// @Controller('/auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService
    ){}

    // @HttpCode(HttpStatus.OK)
    // @postMessage('/login')
    // signIn(@Body() this.signInDto: Record<string, any>){
    //     return this.authService.signIn(signInDto.username, signInDto.password);
    }

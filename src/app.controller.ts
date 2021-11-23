import {Controller, Get } from '@nestjs/common'

@Controller('/app')
export class AppController {
    
    @Get('/abc')
    getRootRoute(){
        return 'Return Statement from AppController'
    }

    @Get('/test')
    testRoute(){
        return 'Testing another Route'
    }

}
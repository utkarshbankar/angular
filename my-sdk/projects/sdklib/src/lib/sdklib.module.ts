import { InjectionToken, NgModule } from "@angular/core";
import { SdkLibBaseService } from "./sdklib-base.service";
import { HttpClient } from "@angular/common/http";
import { SdklibMockService } from "./sdklib-mock.service";
import { SdklibService } from "./sdklib.service";
import { isMock } from "./utils";

export const SDK_SERVICE = new InjectionToken<SdkLibBaseService>('SdklibService'); 

@NgModule({
    declarations:[],
    imports:[],
    exports:[],
    providers:[
        {
            //This is the pattern we can use for the mock and actual scenario testing
            provide: SDK_SERVICE,
            useFactory: (http:HttpClient) => ( isMock() ? new SdklibMockService(http) : new SdklibService(http)),
            deps:[HttpClient]
        }
    ]
})
export class sdkLib{

}
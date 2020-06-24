import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { AlertComponent} from '../shared/alert/alert.component';
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

 

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
    @ViewChild(PlaceholderDirective,{static:false}) alertHost : PlaceholderDirective;
    private closesub:Subscription ;
    isLoginMode = true;
    isLoading = false;
    error:string = null;

    constructor(private authService:AuthService, 
        private router:Router,
        private componentfactoryResolver:ComponentFactoryResolver){

    }

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode; 
    }

    onSubmit(form:NgForm){
        if(!form.valid){
            return;
        }
       const email  = form.value.email;
       const password = form.value.password;

       let authObs: Observable<AuthResponseData>;

       this.isLoading = true;
       if(this.isLoginMode){
            authObs =  this.authService.login(email,password)
       } else {
            authObs = this.authService.singup(email,password)
       }

       authObs.subscribe(resData =>{
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./reciepes']);
        },
        errorMesage => {
            console.log(errorMesage);
            this.error = errorMesage;
            this.showErrorAlert(errorMesage);
            this.isLoading = false;
        });
    
        form.reset();
    }

    onHandleError(){
        this.error = null;
    }

    private showErrorAlert(message:string){
       // const aletCmp = new AlertComponent(); this woon't work
     const alertCmpFactory = this.componentfactoryResolver.resolveComponentFactory(
         AlertComponent
         );
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message ;
        this.closesub = componentRef.instance.close.subscribe(() => {
            this.closesub.unsubscribe();
            hostViewContainerRef.clear();
        });

    }

    ngOnDestroy(){
        if(this.closesub){
            this.closesub.unsubscribe();
        }
    }

}
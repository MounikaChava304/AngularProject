import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInformationService = inject(UserInformationService);
  if(userInformationService.userRole == 'trainer'){
    return true;
  }else{
    alert("Access Denied");
    return true;
  }  
};

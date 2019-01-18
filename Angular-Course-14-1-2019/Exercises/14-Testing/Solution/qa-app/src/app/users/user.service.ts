import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public authLevel = 4;

    constructor() { }

}

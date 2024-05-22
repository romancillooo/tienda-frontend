import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SideMenuService {
    private isSideMenuOpenSubject = new BehaviorSubject<boolean>(false);
    isSideMenuOpen$ = this.isSideMenuOpenSubject.asObservable();

    constructor() {}

    toggle(): void {
        this.isSideMenuOpenSubject.next(!this.isSideMenuOpenSubject.value);
    }

    close(): void {
        this.isSideMenuOpenSubject.next(false);
    }
}

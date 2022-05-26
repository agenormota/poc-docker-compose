import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tb_teste } from 'app/shared/models/tb_teste';


@Component({
    selector: 'tb_teste-dialog-cmp',
    templateUrl: 'tb_teste-dialog.component.html',
    styleUrls: ['tb_teste-dialog.component.css'],
	providers: [],
})
export class tb_testeDialogComponent {
    tb_testeObj: Tb_teste;
	
	
    

    constructor(
        public dialogRef: MatDialogRef<tb_testeDialogComponent>,
		
        @Inject(MAT_DIALOG_DATA) public tb_teste: Tb_teste) {
        this.tb_testeObj = Object.assign({}, tb_teste);
		
    }
	
	

    savetb_teste(tb_teste: Tb_teste): void {
        this.dialogRef.close(tb_teste);
    }
}
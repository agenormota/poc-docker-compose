import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { tb_testeApiService } from 'app/core/services/tb_teste.service';
import { MatDialog } from '@angular/material/dialog';
import { Tb_teste } from 'app/shared/models/tb_teste';
import { tb_testeDialogComponent } from './tb_teste-dialog/tb_teste-dialog.component';
import { ConfirmDialogModel } from 'app/shared/models/confirm-dialog';
import { ConfirmDialogComponent } from 'app/shared/components/confirm-dialog/confirm-dialog.component';
import { NotificationsService } from 'app/core/services/notifications.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
    selector: 'app-tb_teste-cmp',
    templateUrl: 'tb_teste.component.html',
    providers: [tb_testeApiService]
})

export class tb_testeComponent implements OnInit, OnDestroy {
    public dtos: Tb_teste[];

    @ViewChild(DataTableDirective,  {static: false}) dtElement: DataTableDirective;
    public dtTrigger: Subject<any> = new Subject();
    public dtOptions: any;

    constructor(
        public dialog: MatDialog,
        private tb_testeApiService: tb_testeApiService,
        private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            lengthMenu: [
                [5, 10, 20, -1],
                [5, 10, 20, 'All']
            ],
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records',
                emptyTable: 'Fetching tb_teste...'
            },
            scrollX: true,
            responsive: true,
            // Declare the use of the extension in the dom parameter
            dom: 'Bfrtip',
            
            buttons: [
                
                'copy',
                'print',
                'excel',
                
            ]
        };

        this.getAlltb_testes();
    }

    ngAfterViewInit() {
        this.renderDataTable();
    }

    getAlltb_testes() {
        this.tb_testeApiService.getAlltb_testes().subscribe(dtos => {
            this.dtos = dtos;
            if (this.dtos.length == 0) {
                this.dtOptions.language.emptyTable = 'No dtos available yet.';
            }

            this.renderDataTable();
        }, (err) => {
            this.renderDataTable();
            this.dtOptions.language.emptyTable = 'Error while fetching dtos, pls try refreshing the page or contact admin.';
            this.notificationsService.showNotification('Error', err.message, 'warning');
        });
    }

    addDialog() {
        const dialogRef = this.dialog.open(tb_testeDialogComponent, {
            width: '650px',
            data: new Tb_teste()
        });

        dialogRef.afterClosed().subscribe(tb_teste => {
            if (tb_teste) {
                this.tb_testeApiService.addtb_teste(tb_teste).subscribe(() => {
                    this.getAlltb_testes();
                    this.notificationsService.showNotification('Success', 'Tb_teste added successfully', 'success');
                }, (err) => {
                    this.notificationsService.showNotification('Error', err.message, 'warning');
                });
            }
        });
    }

    editDialog(tb_teste: Tb_teste) {
        const dialogRef = this.dialog.open(tb_testeDialogComponent, {
            width: '650px',
            data: tb_teste
        });

        dialogRef.afterClosed().subscribe(tb_teste => {
            if (tb_teste) {
                this.tb_testeApiService.updatetb_teste(tb_teste).subscribe(() => {
                    this.getAlltb_testes();
                    this.notificationsService.showNotification('Success', 'Tb_teste updated successfully', 'success');
                }, (err) => {
                    this.notificationsService.showNotification('Error', err.message, 'warning');
                });
            }
        });
    }

    deleteDialog(tb_teste: Tb_teste) {
        const dialogData = new ConfirmDialogModel("Really delete?", tb_teste._id.toString());
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(remove => {
            if (remove) {
                this.tb_testeApiService.deletetb_teste(tb_teste._id).subscribe(() => {
                    this.getAlltb_testes();
                    this.notificationsService.showNotification('Success', 'Tb_teste deleted successfully', 'success');
                }, (err) => {
                    this.notificationsService.showNotification('Error', err.message, 'warning');
                });
            }
        });
    }

    renderDataTable(): void {
        if (this.dtElement && this.dtElement.dtInstance) {
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
            });
        }

        this.dtTrigger.next();
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
}


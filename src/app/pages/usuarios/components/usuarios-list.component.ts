import { UsuariosService } from './../../../services/usuarios/usuarios.service';
import { User } from './../../../models/login/user';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
//import { ErrorDialogComponent } from 'src/app/components/errordialog';

@Component({
  selector: 'app-usuarios-list',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarios$: Observable<User[]>;

 

  displayedColumns: string[] = ['email','password','actions'];

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuarios$ = this.usuariosService.list()
    .pipe(
      catchError(error => {
        //this.onError('Erro ao carregar Usuarios.');
        return of([])
      })
    );

  }

 /* onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }*/

  ngOnInit(): void {
  }


  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}

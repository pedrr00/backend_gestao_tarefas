import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'status', 'createdAt', 'actions'];
  dataSource: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.http.get<any[]>('http://localhost:3000/api/tasks').subscribe(
      (data) => {
        console.log('dados recebidos:', data);
        this.dataSource = data;
      },
      (error) => {
        console.error('Erro ao carregar tarefas:', error);
      }
    );
  }

  editTask(task: any): void {
    console.log('Editar tarefa:', task);
    // Aqui depois pode abrir um formulário para editar a tarefa
  }

  deleteTask(id: string): void {
    console.log('Excluir tarefa com id:', id);
    // Aqui depois pode chamar backend para deletar
  }
}



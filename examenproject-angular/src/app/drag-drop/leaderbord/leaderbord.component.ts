import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaderbordService } from '../../services/leaderbodrd.service';
import { Leaderbord } from './leaderbord';
import { Quiz } from '../../quiz/quiz';

@Component({
    selector: 'app-drag-drop-leaderbord',
    templateUrl: './leaderbord.component.html',
    styleUrls: ['./leaderbord.component.css']
})

export class DragDropLeaderbordComponent implements OnInit {
    @Input('time') time: any;
    @Input('score') score: any;
    dragDrop: Leaderbord[];
    Quiz: Quiz[];


    @ViewChild('modal_1') modal_1: TemplateRef<any>;
    @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
    backdrop: any
    form: FormGroup;
    href: any;
    showDialog() {
        let view = this.modal_1.createEmbeddedView(null);
        this.vc.insert(view);
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
        this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
        this.backdrop = document.createElement('DIV')
        this.backdrop.className = 'modal-backdrop';
        document.body.appendChild(this.backdrop)
    }

    closeDialog() {
        this.vc.clear()
        document.body.removeChild(this.backdrop)
    }

    constructor(fb: FormBuilder, private router: Router, private lederbordService: LeaderbordService) {
        this.form = fb.group({
            username: ['', Validators.required]
        })
    }


    ngOnInit() {
        this.href = this.router.url;
        if (this.href == '/dragdrop') {
            this.getDragDropLeaderbord();
        } else {
            this.getQuizLeaderbord();
        }
    }

    addToDragDrop(data) {
        this.lederbordService.addDragDropLeaderdord(data).subscribe(res => {
            console.log(res);
        }, error => {
            console.log(error);
        })
    }

    addToQuiz(data) {
        this.lederbordService.addQuizLeaderdord(data).subscribe(res => {
            console.log(res);
        }, error => {
            console.log(error);
        })
    }

    getDragDropLeaderbord() {
        this.lederbordService.getDragDropLeaderbord().subscribe((res: Leaderbord[]) => {
            this.dragDrop = res;
            console.log(this.dragDrop);
        }, error => {
            console.log(error);
        });
    }

    getQuizLeaderbord() {
        this.lederbordService.getQuizLeaderbord().subscribe((res: Quiz[]) => {
            this.Quiz = res;
        }, error => {
            console.log(error);
        })
    }

    submit() {
        console.log('submit');
        if (this.router.url == '/dragdrop') {
            console.log(this.time);
            let time = 0;
            if (this.time.mins >= 1) {
                time += this.time.mins * 60;
            }
            time = this.time.seconds;
            let data = {
                'username': this.form.controls['username'].value,
                'time': time.toString()
            }

            this.addToDragDrop(JSON.stringify(data));
        } else {
            let data = {
                'username': this.form.controls['username'].value,
                'score': this.score
            }
            this.addToQuiz(JSON.stringify(data));
        }
    }

}
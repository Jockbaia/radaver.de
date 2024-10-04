import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TimeService } from '../../../services/time.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeModel } from '../../../models/time.model';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
}) 
export class ClockComponent implements OnInit {

  @ViewChild('timeInput') timeInput!: ElementRef; 
  public $currentTime?: Subscription;
  public currentTime?: any;
  public editMode: boolean = false;
  public editInput?: string;

  constructor(
    private _timeService: TimeService,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.refreshDate();
    this.$currentTime = interval(1000).subscribe(() => {
      this.refreshDate();
    });
  }

toggleEditor() {
  if (this.editMode) {
    this.editMode = false;
  } else {
    this.editMode = true;
    this.editInput = this.formatDate(this.currentTime);
    this._cdr.detectChanges();
    this.timeInput.nativeElement.focus();
  }
  
}

editTime() {
  if (this.editInput) {
    const timeModel = this.stringToTimeModel(this.editInput);
    if (this._timeService.isValidTimeModel(timeModel)) {
      this._timeService.setCustomTime(timeModel);
      this.refreshDate();
    } else {
      console.error('Invalid date format or values provided.');
    }
  }
  this.editMode = false;
}

stringToTimeModel(dateString: string): TimeModel {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('/').map(Number);
  const [hour, minute, second] = timePart.split(':').map(Number);

  return {
      day,
      month,
      year,
      hour,
      minute,
      second,
  };
}

refreshDate() {
  this.currentTime = new Date(
    this._timeService.getTime().year, 
    this._timeService.getTime().month - 1, 
    this._timeService.getTime().day, 
    this._timeService.getTime().hour, 
    this._timeService.getTime().minute, 
    this._timeService.getTime().second
  );
}

formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

  ngOnDestroy(): void {
    if (this.$currentTime) {
      this.$currentTime.unsubscribe();
    }
  }

}

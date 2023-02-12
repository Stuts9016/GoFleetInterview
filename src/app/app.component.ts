import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



  export class AppComponent {
    showAs = 'map';
    filters={
      date: new Date(),
    }
  mapList = [
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-15',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-20',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-13',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-15',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-15',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-15',
    },
    {
      title: 'Work Flow: Requires Location',
      location: '258A Sunview St, Waterloo, ON , Canada',
      lat: 42.987,
      lng: -81.245,
      zoom: 15,
      from: 'abc@gmail.com',
      to: 'abs@gmail.com',
      status: 'uncomplete',
      dueDate: '2023-02-15',
    },
  ];
  changeInToggleGroup(val: string) {
    this.showAs = val;
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');

    const mapList = this.mapList.map((item) => {
      

      
      return `${item.title},${item.location},${item.lat},${item.lng},${item.zoom},${item.from},${item.to},${item.status},${item.dueDate}`;
    }).join(' \n');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(mapList) );
    link.setAttribute('download', `myFile.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
  
}


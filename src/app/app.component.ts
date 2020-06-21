import { Component } from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  vmPlaceholder: any; 
  ngAfterViewInit() {
    sdk.embedProjectId('myDiv','angular-7-node').then(vm => {
      this.vmPlaceholder = vm;
    });
  }

  editFiles(): void {
      var obj = {};
    obj['src/app/app.component.html'] = '<h1>This was updated      programmatically!</h1>';
    obj['test.html'] = 'Random file';
    this.vmPlaceholder.applyFsDiff({
          create: obj,
          destroy: ['']
        });    
  }
}

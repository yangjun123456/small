import { Component, Injectable } from '@angular/core';
import { MultimeterService } from './multimeter.service';
import { HandleErrorService } from '../../components/handle_error';
import { AppService } from '../../index/app.service';

declare var $: any;
@Component({
    selector: 'multimeter',
    styleUrls: ['./multimeter.component.scss'],
    templateUrl: './multimeter.component.html',
    providers: []
})
@Injectable()
export class MultimeterComponent {
    multimeterServiceMdata = this.multimeterService.Mdata;
    multimeterServiceMout = this.multimeterService.Mdata.Mout;
    modelOrself = this.multimeterService.Mdata.modelOrself;

    currentKfilker01: boolean = true;
    currentKfilker02: boolean = true;
    currentKfilkerres01: boolean = true;
    currentKfilkerres02: boolean = true;

    currentKfilker22: boolean = true;
    currentKfilkerres22: boolean = true;
    constructor(public multimeterService: MultimeterService, private handleErrorService: HandleErrorService, private appService: AppService) {

    }
    ngOnInit(): void {
        // setInterval(() => {
        //     this.multimeterServiceMdata = this.multimeterService.Mdata;//万用表service中的基本参数
        //     this.multimeterServiceMout = this.multimeterService.Mout;
        //     console.log(this.multimeterService.Mdata.multimeterStatus);

        // }, 1000);
        setTimeout(() => {
            this.dragStart();
        }, 1000);
    }
    multimeter() {
      this.appService.connectSocketWYB('WYB&multimeter()');
        this.multimeterService.Mdata.multimeter();
    };
    dragStart() {
        this.multimeterService.Mdata.dragStart();

    }
    multimeterCircle() {
      this.appService.connectSocketWYB('WYB&multimeterCircle()');
        this.multimeterService.Mdata.multimeterCircle();

    }
    multimeterShortcutHtml(href) {
      this.appService.connectSocketWYB('WYB&multimeterShortcutHtml()');
        this.multimeterService.Mdata.multimeterShortcutHtml(href);

    }
    multimeteroff() {
      this.appService.connectSocketWYB('WYB&multimeteroff()');
        this.multimeterService.Mdata.multimeteroff();

    };
    multimetervv() {
      this.appService.connectSocketWYB('WYB&multimetervv()');
        this.multimeterService.Mdata.multimetervv();

    };
    multimeterv() {
      this.appService.connectSocketWYB('WYB&multimeterv()');
        this.multimeterService.Mdata.multimeterv();

    };
    multimetermv() {
      this.appService.connectSocketWYB('WYB&multimetermv()');
        this.multimeterService.Mdata.multimetermv();

    };

    multimeterres() {
      this.appService.connectSocketWYB('WYB&multimeterres()')
        this.multimeterService.Mdata.modelOrself = 'self';
        switch (this.appService.progressData.describeFlag) {
            case 12:
                this.currentKfilkerres01 = false;
                break;
            case 16:
                this.currentKfilkerres02 = false;
                break;
            case 22:
                this.currentKfilkerres22 = false;
                break;
        }
        this.multimeterService.Mdata.multimeterres();

        //电阻测量不能进行
        if (this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x != '0' && (this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '5' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '6' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '7' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '8' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '9' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '10' ||
            this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1007' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1008' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1009' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1010' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1011' || this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1012')) {

            this.multimeterServiceMdata.falseconnectStatus = true;

        }
        if (this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x != '0' && (this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '5' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '6' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '7' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '8' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '9' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '10' ||
            this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1007' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1008' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1009' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1010' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1011' || this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1012')) {
            // this.handleErrorService.handleError({message:"绝缘电阻档不能测试低压电路"});
            this.multimeterServiceMdata.falseconnectStatus = true;
        }

    };
    multimeternofine() {
      this.appService.connectSocketWYB('WYB&multimeternofine()');
        this.multimeterService.Mdata.multimeternofine();

    };
    multimeterAA() {
      this.appService.connectSocketWYB('WYB&multimeterAA()');
        this.multimeterService.Mdata.multimeterAA();


    };
    multimeterk() {
      this.appService.connectSocketWYB('WYB&multimeterk()');
        this.multimeterService.Mdata.modelOrself = 'self';
        switch (this.appService.progressData.describeFlag) {
            case 12:
                this.currentKfilker01 = false;
                break;
            case 16:
                this.currentKfilker02 = false;
                break;
            case 22:
                this.currentKfilker22 = false;
                break;
        }
        this.multimeterService.Mdata.multimeterk();

    };
    multimetermA() {
      this.appService.connectSocketWYB('WYB&multimetermA()');
        this.multimeterService.Mdata.multimetermA();

    }
    closemultimeter() {
      this.appService.connectSocketWYB('WYB&closemultimeter()');
        this.multimeterService.Mdata.closemultimeter();

    };
    onMouseover() {
        //this.multimeterService.Mdata.circleareaAnimate(false);
        // $('.clickcircle').css('zIndex',3);
    }
    onMouseout() {
        //this.multimeterService.Mdata.circleareaAnimate(true);
        // $('.clickcircle').css('zIndex',0);
    }
    change2pointer() {
      this.appService.connectSocketWYB('WYB&change2pointer()');
        $('.multimeter-hotarea').css('cursor', 'pointer');
    }
    change2default() {
      this.appService.connectSocketWYB('WYB&change2default()');
        $('.multimeter-hotarea').css('cursor', 'default');
    }

    removefalseConnect() {
      this.appService.connectSocketWYB('WYB&removefalseConnect()');
      this.multimeterServiceMdata.falseconnectStatus = false;
        this.multimeterServiceMdata.multimeterblackRecover();
        this.multimeterServiceMdata.multimeterredRecover();

    }

    //测量点记录
    recordProgress = function () {
      this.appService.connectSocketWYB('WYB&recordProgress()');
        this.multimeterService.Mdata.recordProgress();

    }
}

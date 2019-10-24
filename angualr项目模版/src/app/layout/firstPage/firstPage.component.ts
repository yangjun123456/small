import { Component, OnInit } from '@angular/core';
// import { FirstPageService } from './firstPage.service';

declare const $;
@Component({
    selector: 'app-firstpage',
    templateUrl: './firstPage.component.html',
    styleUrls: ['./firstPage.component.scss'],
    // providers: [FirstPageService]
})
export class FirstPageComponent implements OnInit {
    public courseSelectShowData: Array<any> = [];
    public courseSelectClickCount: any = 0;
    public classCourseList: any; // 班级课程列表
    public hotCourseList: any; // 热门课程列表
    public activeStudentList: any; // 活跃学员列表
    boyImg: string = '../images/m1.png';

    constructor(
        // public firstPageService: FirstPageService
    ) { }

    ngOnInit() {
        // this.getAllCoursewareSoonIndex();
        // this.getHotCourse();
        // this.getActiveStudents();
    }

    // 课程选择的前进按钮
    advanceCourseSelect() {
        this.courseSelectClickCount--;
        if (this.courseSelectClickCount < 0) {
            this.courseSelectClickCount++;
            return;
        }
        this.courseSelectShowData = this.classCourseList.slice(this.courseSelectClickCount, this.courseSelectClickCount + 4);
        console.log(this.courseSelectShowData);
    }

    // 课程选择的后退按钮
    goBackCourseSelect() {
        this.courseSelectClickCount++;
        if (this.classCourseList.length < (this.courseSelectClickCount + 4)) {
            this.courseSelectClickCount--;
            return;
        }
        this.courseSelectShowData = this.classCourseList.slice(this.courseSelectClickCount, this.courseSelectClickCount + 4);
        console.log(this.courseSelectShowData);
    }

    /**
     * 编辑按钮的样式改变
     * @param classCourse 需要编辑的课件
     */
    editButton(classCourse) {
        // console.log(classCourse);
        // const id = classCourse.id;
        // const index = id - this.courseSelectClickCount;
        // $(event.target).parents('.ul-outer').find('.operater').find('.edit-button button').addClass('btn-default');
        // $(event.target).parents('.ul-outer').find('.operater').find('.edit-button button').removeClass('btn-primary');

        // $(event.target).parents('.ul-outer').find('.operater').eq(index).find('.edit-button button').removeClass('btn-default');
        // $(event.target).parents('.ul-outer').find('.operater').eq(index).find('.edit-button button').addClass('btn-primary');

        window.open('http://content.xiaochejiang.com' + '/course/' + classCourse.entry +
            '?domainUrl=http://school.xiaochejiang.com/&domainAccount=school&userCourseClassId=' +
            classCourse.classId + '&userEmail=' + classCourse.username + '&courseNumber=' +
            classCourse.courseNumber + '&faultNumber=' + classCourse.faultNumber);
    }

    /**
     * 班级课件
     */
    // getAllCoursewareSoonIndex() {
    //     this.firstPageService.getAllCoursewareSoonIndex().then(data => {
    //         console.log(data);
    //         this.classCourseList = data.data;
    //         this.courseSelectShowData = this.classCourseList.slice(this.courseSelectClickCount, this.courseSelectClickCount + 4);
    //         console.log(this.courseSelectShowData);
    //     })
    // }

    /**
     * 热门课程
     */
    // getHotCourse() {
    //     this.firstPageService.getHotCourse().then(data => {
    //         console.log(data);
    //         this.hotCourseList = data.data;
    //     })
    // }

    /**
     * 活跃学生
     */
    // getActiveStudents() {
    //     this.firstPageService.getActiveStudents().then(data => {
    //         console.log(data);
    //         this.activeStudentList = data.data;
    //     })
    // }
}

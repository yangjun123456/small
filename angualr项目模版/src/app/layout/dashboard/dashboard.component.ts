import { Component, OnInit } from '@angular/core';


declare const $;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public user: Array<any> = [];               // 用户的数据列表
    public promptAddUser: string = '0';         // 新增用户名弹出框的显示和隐藏
    public promptChangePassword: string = '0';  // 修改密码弹出框的显示和隐藏
    public hero: any = {
        'name': '123'
    };
    public addData: any = {};                   // 添加数据的数组 
    public editOrAdd: any = {};                 // 点出来的是编辑还是添加
    constructor(

    ) {
        this.user = [
            {
                'id': 1,
                'selected': '',
                'userId': 1,
                'userName': '张三',
                'accountName': '',
                'property': '技师',
                'jurisdiction': '普通用户',
                'phoneNumber': '131313131313',
                'dealer': '',
                'operater': '',
                'isSelect': false,
            }, {
                'id': 2,
                'selected': '',
                'userId': 2,
                'userName': '张三',
                'accountName': '',
                'property': '顾问',
                'jurisdiction': '',
                'phoneNumber': '',
                'dealer': '',
                'operater': '',
                'isSelect': false,
            }, {
                'id': 3,
                'selected': '',
                'userId': 3,
                'userName': '李四',
                'accountName': '',
                'property': '',
                'jurisdiction': '',
                'phoneNumber': '',
                'dealer': '',
                'operater': '',
                'isSelect': false,
            }
        ];
    }
    ngOnInit() {

    }
    // 新增项
    add(param) {
        this.promptAddUser = '1';
        $('.shadow-shade').show();
        if (param === 'add') {
            this.editOrAdd.editOrAdd = '0';
        } else if (param === 'edit') {
            this.editOrAdd.editOrAdd = '1';
            this.editOrAdd.editId = $(event.target).attr('name');
            for (let value of this.user) {
                if (value.id == parseInt($(event.target).attr('name'))) {
                    console.log(value);
                    value.selected = '';
                    setTimeout(() => {
                        console.log($('.edit-dealer').val());
                        $('.edit-username').val(value.userName);
                        $('.edit-accountName').val(value.accountName);
                        $('.edit-phoneNumber').val(value.phoneNumber);
                        // $('.edit-property').val(value.property);
                        // $('.edit-jurisdiction').val(value.jurisdiction);
                        // $('.edit-dealer').val(value.dealer);
                        value.operater = '';
                        console.log($('.edit-username').val())
                    }, 300);
                }
            }
        }
    }
    // 删除项
    delete() {
        for (let i = 0; i < this.user.length; i++) {
            if (this.user[i] && this.user[i].isSelect) {
                this.user.splice(i--, 1);
            }
        }
    }

    // 新增弹框按钮操作
    addSure(param) {
        if (param === 'close') {
            this.promptAddUser = '0';
            $('.shadow-shade').hide();
            return;
        }
        console.log(this.editOrAdd);
        if (this.editOrAdd.editOrAdd === '0') {
            this.addData.selected = '';
            if (this.user.length >= 1) {
                this.addData.id = this.user[this.user.length - 1]['id'] + 1;
            } else {
                this.addData.id = 0;
            }
            for (let cont of $('.edit-dealer').find('option')) {
                if ($('.edit-dealer').val() == $(cont).val()) {
                    this.addData.dealer = $(cont).html();
                }
            }
            for (let cont of $('.edit-jurisdiction').find('option')) {
                if ($('.edit-jurisdiction').val() == $(cont).val()) {
                    this.addData.jurisdiction = $(cont).html();
                }
            }
            for (let cont of $('.edit-property').find('option')) {
                if ($('.edit-property').val() == $(cont).val()) {
                    this.addData.property = $(cont).html();
                }
            }

            this.addData.userName = $('.edit-username').val();
            this.addData.accountName = $('.edit-accountName').val();
            this.addData.phoneNumber = $('.edit-phoneNumber').val();
            // this.addData.property = $('.edit-property').val();
            // this.addData.jurisdiction = $('.edit-jurisdiction').val();
            // this.addData.dealer = $('.edit-dealer').val();
            this.addData.operater = '';
            this.addData.isSelect = false;
            this.user.push(this.addData);
            this.addData = {};
            this.promptAddUser = '0';
            $('.shadow-shade').hide();
        } else if (this.editOrAdd.editOrAdd === '1') {
            console.log('123123');
            for (let value of this.user) {
                if (value.id === parseInt(this.editOrAdd.editId)) {
                    this.addData.id = this.user[this.user.length - 1]['userId'] + 1;

                    for (let cont of $('.edit-dealer').find('option')) {
                        if ($('.edit-dealer').val() == $(cont).val()) {
                            value.dealer = $(cont).html();
                        }
                    }
                    for (let cont of $('.edit-jurisdiction').find('option')) {
                        if ($('.edit-jurisdiction').val() === $(cont).val()) {
                            value.jurisdiction = $(cont).html();
                        }
                    }
                    for (let cont of $('.edit-property').find('option')) {
                        if ($('.edit-property').val() === $(cont).val()) {
                            value.property = $(cont).html();
                        }
                    }

                    value.userName = $('.edit-username').val();
                    value.accountName = $('.edit-accountName').val();
                    value.phoneNumber = $('.edit-phoneNumber').val();
                    // value.property = $('.edit-property').val();
                    // value.jurisdiction = $('.edit-jurisdiction').val();
                    // value.dealer = $('.edit-dealer').val();
                }
            }
            this.promptAddUser = '0';
            $('.shadow-shade').hide();
        }
    }

    // 全选
    allSelect() {
        for (let value of this.user) {
            console.log($(event.target).attr('checked'));
            if ($(event.target).attr('checked')) {
                value.isSelect = true;
                $('.checkbox').find('input').attr('checked', true);
            } else {
                value.isSelect = false;
                $('.checkbox').find('input').attr('checked', false);
            }
        }
    }
    // 单选
    radioSelect() {
        for (let value of this.user) {
            if (value.id === parseInt($(event.target).attr('id'))) {
                console.log($(event.target).attr('id'));
                if (value.isSelect) {
                    value.isSelect = false;
                    $(event.target).attr('checked', false);
                } else {
                    value.isSelect = true;
                    console.log(value, value.isSelect);
                    $(event.target).attr('checked', true);
                }
            }

        }
    }

    // 修改密码
    changePassword() {
        this.promptChangePassword = '1';
        $('.shadow-shade').show();
        this.editOrAdd.editOrAdd = '1';
        this.editOrAdd.editId = $(event.target).attr('name');
        console.log($(event.target).attr('name'));

        for (let value of this.user) {
            if (value.id === parseInt($(event.target).attr('name'))) {
                console.log(value);
                value.selected = '';

                setTimeout(() => {
                    $('.edit-username').val(value.userName);
                    $('.edit-accountName').val(value.accountName);
                    value.operater = '';
                    console.log($('.edit-username').val())
                }, 200);
            }
        }
    }

    // 修改密码确定/关闭按钮
    changePasswordSure(param) {
        if (param === 'close') {
            this.promptChangePassword = '0';
            $('.shadow-shade').hide();
            return;
        }
        this.promptChangePassword = '0';
        $('.shadow-shade').hide();
    }


}

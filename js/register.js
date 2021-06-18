window.onload = function() {
    var regphone = /^1[3|4|5|7|8]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/;
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regtxt = /^[0-9]{6}$/;
    var regdl = /^[0-9a-zA-Z-_]{6,16}$/;
    var phone = document.querySelector('#phone');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var txt = document.querySelector('#txt');
    var dl = document.querySelector('#dl');
    var check = document.querySelector('#check');
    regexp(phone, regphone);
    regexp(qq, regqq);
    regexp(nc, regnc);
    regexp(txt, regtxt);
    regexp(dl, regdl);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                // console.log('zhengque');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜输入正确';
            } else {
                // console.log('cuowu');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入';
            }
        }
    };
    check.onblur = function() {
        if (this.value == dl.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';
        }
    }
}
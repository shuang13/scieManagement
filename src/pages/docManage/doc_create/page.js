var user = require('../../commons/common.js');
// 表单初始化
user.formInit = function () {
    $.ajax({
        type: 'POST',
        url: user.SERVER_URL + '/category/manage',
        success: function(data){
            if(typeof data === 'string') {
            data = JSON.parse(data);
            }
            var status = data.code;//状态码
            if (status == 200) {
                var aaData = data.category.category;
                // 表格解析
                var str = '<option value="0" selected="selected">作为一级栏目</option>';
                for(var i = 0; i < aaData.length; i++) {
                    // 栏目名称分级显示
                    if (aaData[i].pid == 0) {
                        str +=  '<option value="' +
                            aaData[i].id +
                        '">' +
                            aaData[i].name +
                        '</option>';
                    }        
                }
                $('#pid').html(str);
            }
            else $.notice("提示！", "服务器连接失败!");
        }
    });
}
// 文件上传
user.fileUpload = function () {
    $.ajaxFileUpload({
        url: user.SERVER_URL + '/file/category/upload',
        secureuri: false,
        fileElementId: 'doc-cover',
        beforeSend: $.notice('提示！', '正在提交...', function () {
            user.loading($('.jq-notice-context'));
        }),
        dataType: 'json',
        success: function (data) {
            $('.jq-notice-context').html('上传成功!');
            setTimeout('$.closeNotice()',2000); 
        }
    }); 
}
// 表单提交
user.submit = function () {
    event.preventDefault();
    var ajaxArgs = {
        model_id: $('#model-id').val(),
        pid: $('#pid').val(),
        title: $('#doc-title').val(),
        name: $('#doc-name').val(),
        type: "doc",
        cover: $("#doc-cover").val(),
        content: $('#editor_id').val(),
        display: $('input[name="display"]:checked').val(),
        nav: $('input[name="nav"]:checked').val(),
        publish: $('input[name="publish"]:checked').val(),
        comment: $('input[name="comment"]:checked').val(),
        check_level: $('#check-level').val(),
        template_index: $('#template-index').val(),
        template_list: $('#template-list').val(),
        template_detail: $('#template-detail').val(),
        meta_title: $('#meta-title').val(),
        meta_keywords: $('#meta-keywords').val(),
        meta_description: $('#meta-description').val()
    };
    console.log(ajaxArgs);
    if(!user.validate(ajaxArgs)) {
        return false;
        
    }
    $.ajax({
        type: 'POST',
        url: user.SERVER_URL + '/category/add/doc',
        beforeSend: $.notice('提示！', '正在提交...', function () {
            user.loading($('.jq-notice-context'));
        }),
        data: ajaxArgs,
        success: function(data){
            if(typeof data === 'string') {
                data = JSON.parse(data);
            }
            var status = data.code;//状态码
            console.log(status);
            if(status == 200) {
                $('.jq-notice-context').html('提交成功!');
                setTimeout('window.location.href = "../index/page.html"',2000); 
            } else {
                $('.jq-notice-context').html('提交失败!');
            }
        }
    });
}
user.validate = function (ajaxArgs) {
    var titleCheck = /[^x00-xff]/;
    console.log(titleCheck.test(ajaxArgs.title));
    if (!titleCheck.test(ajaxArgs.title)) {
        $.notice("提示！", "栏目名称为中文，且不能为空！");
        return false;
    }
    var nameCheck = /^[a-zA-Z]{3,7}$/;
    if (!nameCheck.test(ajaxArgs.name)) {
        $.notice("提示！", "英文名称为英文，且不能为空！");
        return false;
    }
    var rCheckSpace = /^\s+$/;
    if (rCheckSpace.test(ajaxArgs.content)) {
        $.notice("提示！", "内容不能为空！");
        return false;
    }
    return true;
}

$(document).ready(function () {
    $('#doc-cover').filestyle({buttonText: "浏览"});
    // 富文本编辑器
    KindEditor.ready(function(K) {
        window.editor = K.create('#editor_id');
    });
    $("#time-pick").flatpickr(); // jQuery初始化方法
    
    // 侧栏添加active
    $('.side-nav li').eq(5).find('a').addClass('active');
    // 初始化
    user.formInit();
    // 文件上传
    $('#doc-cover').on('change', user.fileUpload);
    // 表单提交
    $('.btn-submit').on('click', user.submit);
});


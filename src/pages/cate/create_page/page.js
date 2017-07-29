require ('!style-loader!css-loader!sass-loader!../../../public-resource/css/components-dir/base.scss');
var user = {}; //全局对象
// 表单初始化
user.formInit = function () {
    $.post('http://127.0.0.1:80/SCIEManagement/category/manage', function (data) {
        if(typeof data === 'string') {
            data = JSON.parse(data);
        }
        var status = data.code;//状态码
        if (status == 200) {
            var aaData = data.category.category;
            console.log(aaData);
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
    });
}
// 文件上传
user.fileUpload = function () {
    $.ajaxFileUpload({
        url: 'http://127.0.0.1:80/SCIEManagement/file/category/upload',
        secureuri: false,
        fileElementId: 'doc-cover',
        dataType: 'json',
        success: function (data) {
            if(typeof data === 'string') {
                data = JSON.parse(data);
            }
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
        type: "page",
        cover: $("#doc-cover").val(),
        content: $('#editor_id').val(),
        display: $('input[name="display"]:checked').val(),
        nav: $('input[name="nav"]:checked').val(),
        template_index: '1',
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
        url: 'http://127.0.0.1:80/SCIEManagement/category/add/page',
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
// 加载图标
user.loading = function (element) {
    var loadingHtml = '<div id="loading" style="background:url(../../../public-resource/imgs/loading.gif) no-repeat;"></div>';
    element.html(loadingHtml);
}

$(document).ready(function () {
    $('#doc-cover').filestyle({buttonText: "浏览"});
    // 富文本编辑器
    KindEditor.ready(function(K) {
        window.editor = K.create('#editor_id');
    });
    // 侧栏添加active
    $('.side-nav li').eq(0).find('a').addClass('active');
    // 初始化
    user.formInit();
    // 文件上传
    $('#doc-cover').on('change', user.fileUpload);
    // 表单提交
    $('.btn-submit').on('click', user.submit);
});

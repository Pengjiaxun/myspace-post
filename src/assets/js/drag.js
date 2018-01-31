const drag = {
    left: 0,
    top: 0,
    height: 0,
    width: 0,
    scaleVal: 1,    //缩放
    rotateVal: 0,   //旋转
    curStatus: 0,   //记录当前手势的状态, 0:拖动, 1:缩放, 2:旋转
    //初始化
    init: function ($targetObj, callback) {
        touch.on($targetObj, 'touchstart', function (ev) {
            drag.curStatus = 0;
            ev.preventDefault();//阻止默认事件
        });
        if (!window.localStorage.cat_touchjs_data)
            callback(0, 0, 1, 0);
        else {
            var jsonObj = JSON.parse(window.localStorage.cat_touchjs_data);
            drag.left = parseFloat(jsonObj.left);
            drag.top = parseFloat(jsonObj.top);
            drag.scaleVal = parseFloat(jsonObj.scale);
            drag.rotateVal = parseFloat(jsonObj.rotate);
            callback(drag.left, drag.top, drag.scaleVal, drag.rotateVal);
        }
    },
    //拖动
    drag: function ($targetObj, callback) {
        touch.on($targetObj, 'drag', function (ev) {
            // var $parent = $targetObj.parent();
            // var h = $parent.outerHeight(),
            //     w = $parent.outerWidth(),
            //     offsetLet = $parent.offset().left,
            //     offsetTop = $parent.offset().top;
            var x = drag.left + ev.x,
                y = drag.top + ev.y;
            // if (x < 0) {
            //     x = 0;
            // } else if (x >= w + offsetLet) {
            //     x = w;
            // } else {
            //     x -= offsetLet;
            // }
            //
            // if (y < 0) {
            //     y = 0;
            // } else if (y >= h + offsetTop) {
            //     y = h;
            // } else {
            //     y -= offsetTop;
            // }
            $targetObj.css("left", x).css("top", y);
        });
        touch.on($targetObj, 'dragend', function (ev) {
            var x = drag.left + ev.x,
                y = drag.top + ev.y;
            // if (x < 0) {
            //     x = 0;
            // }
            //
            // if (y < 0) {
            //     y = 0;
            // }
            drag.left = x;
            drag.top = y;
            callback(drag.left, drag.top);
        });
    },
    //缩放
    scale: function ($targetObj, callback) {
        var initialScale = drag.scaleVal || 1;
        var currentScale;
        touch.on($targetObj, 'pinch', function (ev) {
            if (drag.curStatus == 2) {
                return;
            }
            drag.curStatus = 1;
            currentScale = ev.scale - 1;
            currentScale = initialScale + currentScale;
            drag.scaleVal = currentScale;
            var transformStyle = 'scale(' + drag.scaleVal + ') rotate(' + drag.rotateVal + 'deg)';
            $targetObj.css("transform", transformStyle).css("-webkit-transform", transformStyle);
            callback(drag.scaleVal);
        });

        touch.on($targetObj, 'pinchend', function (ev) {
            if (drag.curStatus == 2) {
                return;
            }
            initialScale = currentScale;
            drag.scaleVal = currentScale;
            callback(drag.scaleVal);
        });
    },
    //旋转
    rotate: function ($targetObj, callback) {
        var angle = drag.rotateVal || 0;
        touch.on($targetObj, 'rotate', function (ev) {
            if (drag.curStatus == 1) {
                return;
            }
            drag.curStatus = 2;
            var totalAngle = angle + ev.rotation;
            if (ev.fingerStatus === 'end') {
                angle = angle + ev.rotation;
            }
            drag.rotateVal = totalAngle;
            var transformStyle = 'scale(' + drag.scaleVal + ') rotate(' + drag.rotateVal + 'deg)';
            $targetObj.css("transform", transformStyle).css("-webkit-transform", transformStyle);
            $targetObj.attr('data-rotate', drag.rotateVal);
            callback(drag.rotateVal);
        });
    }
};

export default drag;


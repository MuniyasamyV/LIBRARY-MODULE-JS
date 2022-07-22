(function (root, factory) {
    root['createDomObj'] = factory();
})(window, function () {
    var libObj = {
        type: null,
        attr: [],
        text: null,
        child: [],
        setAttr: function (key, val) {
            for (var i = 0; i < libObj.attr.length; i++) {
                attrKey = Object.keys(libObj.attr[i]);
                if (attrKey[0] === key) {
                    libObj.attr[i][key] = val
                }
            }
        },
        setChild: function (obj) {
            if (obj) {
                libObj.child.push(obj)
            }

        },
        getlibObj: function () {
            return libObj;
        }
    }
    var createDomObj = function (obj) {
        if (typeof obj.type === "string") {
            var newDom = document.createElement(obj.type)
        }
        if (typeof obj.text === "string") {
            newDom.innerHTML = obj.text;
        }
        if (typeof obj.attr === "object") {
            for (var i = 0; i < obj.attr.length; i++) {
                attrKey = Object.keys(obj.attr[i]);
                if (obj.attr[i][key[0]]) {
                    newDom.setAttribute(attrKey[0], obj.attr[i][key[0]])
                }
            }
        }
        if (typeof obj.child === "object") {
            for (var i = 0; i < obj.child.length; i++) {
                if (createDom(obj.child[i])) {
                    newDom.append(createDom(obj.child[i]));
                }
            }
        }
        return newDom;
    }
    createDomObj.create = function (obj) {
        if (obj.tag) {
            libObj.type = obj.type;
            console.log(libObj.type)
        }
        if (obj.text) {
            libObj.text = obj.text;
            console.log(libObj.text)
        }
        if (obj.attr) {
            libObj.attr = obj.attr;
            console.log(libObj.attr)
        }
        if (obj.child) {
            libObj.child = obj.child;
            console.log(libObj.child)
        }
        return libObj;
    };
    return createDomObj;
});


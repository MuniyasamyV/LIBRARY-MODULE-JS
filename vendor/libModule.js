(function (root, factory) {
  root["createDomObj"] = factory();
})(window, function () {
  var libObj = {
    type: null,
    attr: [],
    text: null,
    child: [],
    setAttribute: function (key, val) {
      for (var i = 0; i < libObj.attr.length; i++) {
        attrKey = Object.keys(libObj.attr[i]);
        if (attrKey[0] === key) {
          libObj.attr[i][key] = val;
        }
      }
    },
    addChild: function (obj) {
      if (obj) {
        libObj.child.push(obj);
      }
    },
    getlibObj: function () {
      return libObj;
    },
  };
  var createDomObj = function (obj) {
    var newDom;
    // console.log(typeof(obj.type))
    // if (typeof obj.type === "object") {
    newDom = document.createElement(obj.type);

    // }
    // console.log(typeof(obj.text))
    if (typeof obj.text === "string") {
      console.log(typeof obj.text);
      newDom.innerHTML = obj.text;
    }

    // if (typeof obj.attr === "object") {
    //     // console.log(3)
    //     for (var i = 0; i < obj.attr.length; i++) {
    //         // console.log(4)
    //         // console.log(i)
    //         // console.log(obj.attr.length)
    //         if(obj.attr[i] ){
    //             console.log(5)
    //          attrKey = Object.keys(obj.attr[i]);
    //         //  console.log(attrKey.length)
    //         if (obj.attr[i][attrKey[0]]) {
    //             // console.log(6)
    //             newDom.setAttribute(attrKey[0], obj.attr[i][attrKey[0]]);
    //         }
    //     }
    //     }
    // }
    if (typeof obj.attr === "object") {
      if (obj.attr.length > 0) console.log(4);
      console.log(5);
      {
        for (var i = 0; i < obj.attr.length; i++) {
          newDom.setAttribute(
            obj.attr[i],
            obj.attr[i][Object.keys(obj.attr[i])]
          );
        }
      }
    }

    if (typeof obj.child === "object") {
      for (var i = 0; i < obj.child.length; i++) {
        if (createDomObj(obj.child[i])) {
          newDom.append(createDomObj(obj.child[i]));
        }
      }
    }
    return newDom;
  };
  createDomObj.create = function (obj) {
    if (obj.tag) {
      libObj.type = obj.type;
      console.log(libObj.type);
    }
    if (obj.text) {
      libObj.text = obj.text;
      console.log(libObj.text);
    }
    if (obj.attr) {
      libObj.attr = obj.attr;
      console.log(libObj.attr);
    }
    if (obj.child) {
      libObj.child = obj.child;
      console.log(libObj.child);
    }
    return libObj;
  };
  return createDomObj;
});

(function (root, factory) {
  root.createDomObj = factory();
})(window, function () {
  var documentObj = {
    tag: null,
    attribute: [],
    content: null,
    child: [],
    addChild: function (obj) {
      if (obj) documentObj.child.push(obj);
    },
    getDocumentObj: function () {
      return documentObj;
    },
  };

  var createDomObj = function (obj) {
    var createDomObj_Obj;
    if (obj.tag) {
      var createDomObj_Obj = document.createElement(obj.tag);
    }
    if (obj.content) {
      createDomObj_Obj.innerHTML = obj.content;
    }
    if (obj.attribute) {
      if (obj.attribute.length) {
        for (var i = 0; i < obj.attribute.length; i++) {
          if (obj.attribute[i]) {
            key = Object.keys(obj.attribute[i]);

            createDomObj_Obj.setAttribute(key[0], obj.attribute[i][key[0]]);
          }
        }
      }
    }

    if (obj.child) {
      for (var i = 0; i < obj.child.length; i++) {
        createDomObj_Obj.appendChild(createDomObj(obj.child[i]));
      }
    }
    return createDomObj_Obj;
  };

  createDomObj.create = function (obj) {
    if (obj.tag) {
      documentObj.tag = obj.tag;
      console.log(documentObj.tag);
    }
    if (obj.content) {
      documentObj.content = obj.content;
      console.log(documentObj.content);
    }
    if (obj.attribute) {
      documentObj.attribute = obj.attribute;
      console.log(documentObj.attribute);
    } else {
      documentObj.attribute = null;
    }
    if (obj.child) {
      documentObj.child = obj.child;
      console.log(documentObj.child);
    }
    return documentObj;
  };

  return createDomObj;
});

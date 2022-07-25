(function (root, factory) {
  root.createDomObj = factory();
})(window, function () {
  var documentObj = {
    type: null,
    attribute: [],
    text: null,
    child: [],
    addChild: function (obj) {
      if (obj) documentObj.child.push(obj);
    }
  };

  var createDomObj = function (obj) {
    var createDomObj_Obj;
    if (obj.type) {
      var createDomObj_Obj = document.createElement(obj.type);
    }
    if (obj.text) {
      createDomObj_Obj.innerHTML = obj.text;
    }
    if (obj.attribute) {
      if (obj.attribute.length) {
        for (var i = 0; i < obj.attribute.length; i++) {
          if (obj.attribute[i]) {
            console.log(obj.attribute[i]);
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
    if (obj.type) {
      documentObj.type = obj.type;
      console.log(documentObj.type);
    }
    if (obj.text) {
      documentObj.text = obj.text;
      console.log(documentObj.text);
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


var nav = {
    tag: "nav",
  
    child: [
      {
        type: "div",
        attr: [{ class: "flex justify-between mt-8 mb-4 pb-4 border-b" }],
        child: [
          {
            type: "div",
            text: "Subscribe",
            
          },
          {
            type: "div",
            text: "Large",
            attr: [
              {
                class: "",
              },
            ],
          },
          {
            type: "button",
            text: "sign up",
            attr: [
              {
                class: "bg-slate-50  hover:bg-gray-800 hover:text-white}",
              },
            ],
          },
        ],
      },
    ],
}
var appBody = createDomObj.create({
    type: "div",
    attribute: [
      {
        class: "ml-8 mr-8",
      },
    ],
  });
  appBody.addChild(nav)
  var app = createDomObj(appBody)
  console.log(app)
var main = createDomObj.create({
    type:"main",
    child:[
        {
            class:"main container"
        }
    ]
});
var head = createDomObj.create(
    {
        type:"header",
        child:[
            {
                class:"d-flex flex-column"
            }
        ]
    }
);

var nav = createDomObj.create({
    type: "nav",
  
    child: [
      {
        type: "div",
        attr: [{ class: "flex justify-between mt-8 mb-4 pb-4 border-b" }],
        child: [
          {
            type: "div",
            text: "Subscribe",
            
          },
        ],
      },
    ],
  });
  head.addChild(nav);
  main.addChild(head)
  var dom = createDomObj(main);
  document.body.append(main);
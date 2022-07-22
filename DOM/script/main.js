var main = createDomObj.create({
    type:"main",
    attr:[
        {
            class:"main container"
        }
    ]
});
var head = createDomObj.create(
    {
        type:"header",
        attr:[
            {
                class:"d-flex flex-column"
            }
        ]
    }
);

var nav = createDomObj.create({
    type: "nav",
  
    attr: [
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
  main.addChild(head);
  var domm = createDomObj(main);
  document.body.append(domm);
var nav = {
  tag: "nav",
  child: [
    {
      tag: "div",
      attribute: [{ class: "flex justify-between mt-8 mb-4 pb-4 border-b" }],
      child: [
        {
          tag: "div",
          content: "Subscribe",
          attribute: [{ class: "text-2xl" }, { id: "subscribe" }],
        },
      ],
    },
  ],
};

var appBody = createDomObj.create({
  tag: "div",
  attribute: [
    {
      class: "ml-8 mr-8",
    },
  ],
});

appBody.addChild(nav);

var app = createDomObj(appBody);

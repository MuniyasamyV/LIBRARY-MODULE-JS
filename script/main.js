var nav = {
  type: "nav",
  child: [
    {
      type: "div",
      attribute: [{ class: "flex justify-between mt-8 mb-4 pb-4 border-b" }],
      child: [
        {
          type: "div",
          text: "Subscribe",
          attribute: [{ class: "text-2xl" }, { id: "subscribe" }],
        },
      ],
    },
  ],
};

var appBody = createDomObj.create({
  type: "div",
  attribute: [
    {
      class: "ml-8 mr-8",
    },
  ],
});

appBody.addChild(nav);

var app = createDomObj(appBody);

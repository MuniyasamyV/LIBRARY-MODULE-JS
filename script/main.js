var nav = {
  type: "nav",
  child: [
    {
      type: "div",
      attribute: [{ class: "max-w-5xl flex justify-between mt-8 mb-4 pb-4 border-b" }],
      child: [
        {
          type: "div",
          text: "Subscribe",
          attribute: [{ class: "text-2xl" }],
        },
        {
          type: "div",
          text: "Subscribe",
          attribute: [{ class: "text-2xl" }],
        },
        {
          type: "button",
          text: "Subscribe",
          attribute: [{ class: "text-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" }],
        }
      ],
    },
  ],
 
};
var nav_2 = {
  type:"div",
  attribute:[{class:"max-w-5xl flex justify-between align-items-center"}],
  child: [
    { type: "p", text: "World" }, { type: "p", text: "U.S." }, { type: "p", text: "Technology" }, { type: "p", text: "Design" }, { type: "p", text: "Culture" },
    {  type: "p", text: "Business" }, { type: "p", text: "Politics" }, { type: "p", text: "Opinion" }, { type: "p", text: "Science" },
    {  type: "p", text: "Health" }, { type: "p", text: "Style" }, { type: "p", text: "Travel" },
  ],
} 
var titleSection = {
  type : "div",
  attribute: [{class:"max-w-5xl p-2.5 bg-teal-700 m-auto mb-1"}],
  child:[{
    attribute:[{class:"columns-0 max-w-xl px-4 py-4"}],
    child:[{
      type:"h1",
      attribute:[{class:"italic text-5xl font-bold text-white mb-2"}],
      text:"Title of a longer featured blog post",
    },
    {
      type:"p",
      attribute:[{class:"font-serif text-white mb-2"}],
      text:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents",
      
    },
    {
      type:"p",
      attribute:[{class:"font-Roboto font-medium text-white mb-2"}],
      text:"Continue reading..."
    }
  ]
  }

  ]
}

var mainBody = createDomObj.create({
  type: "div",
  attribute: [
    {
      class: " mx-60 ",
    },
  ],
});
console.log(nav)
mainBody.addChild(nav);
mainBody.addChild(nav_2);
mainBody.addChild(titleSection);
var app = createDomObj(mainBody);
console.log(app)
document.body.appendChild(app)

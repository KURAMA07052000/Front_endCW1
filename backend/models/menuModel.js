const nedb = require("nedb");

class Menu {
  constructor(menuFilePath) {
    console.log(menuFilePath);
    if (menuFilePath) {
      this.menu = new nedb(menuFilePath);
      console.log("menu connected to " + menuFilePath);
      menuFilePath;
    } else {
      this.menu = new nedb();
    }
  }
  init() {
    this.menu.insert({
      id: "1",
      name: "carrot cake",
      description: "home made here",
      price: "2.50",
      category: "cake",
      available: "no",
      ingredients: "230ml vegetable oil , 100g natural yogurt , 4 large eggs , 1 1/2 tsp vanilla extract , 1/2 orange zested , 265g self-raising flour , 335g light muscovado sugar , 2½ tsp ground cinnamon , ¼ fresh nutmeg , 265g carrots , 100g walnuts",
    });
    this.menu.insert({
      id: "2",
      name: "sandwiches",
      description: "with a variety of fillings",
      price: "2.50",
      category: "snack",
      available: "no",
      ingredients: "2 slices of bread , 2 sices of ham , 1 tsp mayonaise , 2 slices chedder chesse, 1 leaf of lettuce",
    });
    this.menu.insert({
      id: "3",
      name: "salad",
      description: "uses seasonal local produce",
      price: "3.50",
      category: "side",
      available: "yes",
      ingredients: "1 tsp cumin seeds , 2 small sweet potatoes , 350 g broccoli , olive oil , 25 g cashew nuts , 25 g mixed pumpkin, sunflower and sesame seeds , 250 g vac-packed beetroot , 2 tbsp balsamic vinegar , 300 g quinoa , 30g fresh mint , 1 lemon , 1 ripe avocado , 6 tbsp natural yoghurt , 1 punnet of cress",
    });
    this.menu.insert({
      id: "4",
      name: "hot chocolate",
      description: "with fully fat or skimmed milk",
      price: "2.00",
      category: "drinks",
      available: "yes",
      ingredients: "2 tbsp hot chocolate , 1 tsp sugar , 1 marshmellow , 2/3 cups hot water , 1/3 cups milk",
    });
    this.menu.insert({
      id: "5",
      name: "chocolate cake",
      description: "with cream",
      price: "2.50",
      category: "cake",
      available: "yes",
      ingredients: "4 large eggs , 1 1/2 tsp vanilla extract , 1/2 orange zested , 265g self-raising flour , 200g golden caster sugar , 200g unsalted butter , 2 tbsp cocoa powder , 1 tsp baking powder , 2 tbsp milk",
    });
    this.menu.insert({
      id: "6",
      name: "soup",
      description: "ask for soups available today",
      price: "2.00",
      category: "snack",
      available: "yes",
      ingredients: "2 tsp cumin seeds , pinch chilli flakes , 2 tbsp olive oil , 600g carrots , 140g split red lentils , 1l hot vegetable stock , 125ml milk",
    });
    this.menu.insert({
      id: "7",
      name: "pizza",
      description: "ham and pineapple or four cheese",
      price: "5.00",
      category: "main",
      available: "yes",
      ingredients: "2 tbsp olive oil , 1 small onion , 1 fat garlic clove , 2 x 400g cans chopped tomatoes , 3 tbsp tomato purée , 1 bay leaf , 2 tbsp dried oregano , 2 tsp brown sugar , 1 small bunch basil",
    });
    this.menu.insert({
      id: "8",
      name: "baked potato",
      description: "with cheese, coleslaw, beans or tuna",
      price: "4.50",
      category: "main",
      available: "yes",
      ingredients: "4 baking potatoes , ½ tbsp sunflower oil",
    });
    this.menu.insert({
      id: "9",
      name: "apple pie",
      description: "with cream or custard",
      price: "3.50",
      category: "pudding",
      available: "yes",
      ingredients: "1kg Bramley apples , 140g golden caster sugar , ½ tsp cinnamon , 3 tbsp flour , 225g butter, room temperature , 50g golden caster sugar , 2 eggs , 350g plain flour , softly whipped cream",
    });
    this.menu.insert({
      id: "10",
      name: "cheesecake",
      description: "with cream",
      price: "3.00",
      category: "pudding",
      available: "yes",
      ingredients: "110g digestive biscuits , 50g butter , 25g light brown soft sugar , 350g mascarpone , 75g caster sugar , 1 lemon , 2-3 lemons",
    });
    this.menu.insert({
      id: "11",
      name: "fish and chips",
      description: "locally caught ",
      price: "6.50",
      category: "main",
      available: "yes",
      ingredients: "50g plain flour , 50g cornflour , 1 tsp baking powder , turmeric , 75ml lager beer , 75ml sparkling water , 1 litre sunflower oil , 400g fillet sustainable cod , 750g potatoes , 2 tbsp plain flour , 2 tbsp sunflower oil",
    });
    this.menu.insert({
      id: "12",
      name: "lasagne",
      description: "with chips or garlic bread",
      price: "6.50",
      category: "main",
      available: "yes",
      ingredients: "",
    });
    this.menu.insert({
      id: "13",
      name: "ice cream",
      description: "various flavours",
      price: "2.50",
      category: "pudding",
      available: "yes",
      ingredients: "200g dark chocolate , 500ml double cream , 340g can sweetened condensed milk , 1 tsp vanilla extract , 3 tbsp organic cocoa powder , 50g milk chocolate chips , sea salt flakes",
    });
    this.menu.insert({
      id: "14",
      name: "coffee",
      description: "freshly ground",
      price: "1.50",
      category: "drinks",
      available: "yes",
      ingredients: "3 tbsp instant coffee , 2 tbsp sugar , 400-500ml milk",
    });
    this.menu.insert({
      id: "15",
      name: "tea",
      description: "a range of varieties",
      price: "1",
      category: "drinks",
      available: "yes",
      ingredients: "3 heaped tsp ground turmeric , 1 tbsp fresh grated ginger , 1 small orange , honey",
    });
    this.menu.insert({
      id: "16",
      name: "pasta",
      description: "with a tomato and garlic sauce",
      price: "5.50",
      category: "main",
      available: "yes",
      ingredients: "1 tbsp olive oil , 1 large onion , 2 garlic cloves , 1 tsp chilli powder , 400g can chopped tomatoes , 300g short pasta such as fusilli or farfalle",
    });
    this.menu.insert({
      id: "17",
      name: "chips",
      description: "with ketchup or mayonnaise",
      price: "3",
      category: "side",
      available: "yes",
      ingredients: "750g Desirée potato , groundnut oil , sea salt and freshly ground black pepper",
    });
    this.menu.insert({
      id: "18",
      name: "sparkling mineral water",
      description: "locally sourced",
      price: "1.5",
      category: "drinks",
      available: "yes",
      ingredients: "carbonator",
    });
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.menu.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }
}
module.exports = Menu;

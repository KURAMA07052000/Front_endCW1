const nedb = require("nedb");
const { updateRating } = require("../controllers/controllers");

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
      rating: [3, 5, 2, 2, 2],
      image: "",
    });
    this.menu.insert({
      id: "2",
      name: "sandwiches",
      description: "with a variety of fillings",
      price: "2.50",
      category: "snack",
      available: "no",
      ingredients: "2 slices of bread , 2 sices of ham , 1 tsp mayonaise , 2 slices chedder chesse, 1 leaf of lettuce",
      rating: [3, 5, 2, 2, 2],
      image: "",
    });
    this.menu.insert({
      id: "3",
      name: "salad",
      description: "uses seasonal local produce",
      price: "3.50",
      category: "side",
      available: "yes",
      ingredients: "1 tsp cumin seeds , 2 small sweet potatoes , 350 g broccoli , olive oil , 25 g cashew nuts , 25 g mixed pumpkin, sunflower and sesame seeds , 250 g vac-packed beetroot , 2 tbsp balsamic vinegar , 300 g quinoa , 30g fresh mint , 1 lemon , 1 ripe avocado , 6 tbsp natural yoghurt , 1 punnet of cress",
      recipe: "STEP 1 \n Pour the tamari into a large dish and stir in the curry powder, cumin, garlic and honey. Mix well. Slice the chicken breasts in half horizontally to make 4 fillets in total, then add to the marinade and mix well to coat. Set aside in the fridge for at least 1 hr, or overnight, to allow the flavours to penetrate the chicken.\n STEP 2 \n Meanwhile, mix the peanut butter with the chilli sauce, lime juice, and 1 tbsp water to make a spoonable sauce. When ready to cook the chicken, wipe a large non-stick frying pan with a little oil. Add the chicken and cook, covered with a lid, for 5-6 mins on a medium heat, turning the fillets over for the last min, until cooked but still moist. Set aside, covered, to rest for a few mins.\n STEP 3 \nWhile the chicken rests, toss the lettuce wedges with the cucumber, shallot, coriander and pomegranate, and pile onto plates. Spoon over a little sauce. Slice the chicken, pile on top of the salad and spoon over the remaining sauce.",
      rating: [1, 3, 2, 2, 1],
      image: "",
    });
    this.menu.insert({
      id: "4",
      name: "hot chocolate",
      description: "with fully fat or skimmed milk",
      price: "2.00",
      category: "drinks",
      available: "yes",
      ingredients: "2 tbsp hot chocolate , 1 tsp sugar , 1 marshmellow , 2/3 cups hot water , 1/3 cups milk",
      recipe: "STEP 1 \n Heat the milk, cocoa, sugar and chocolate in a small pan over a medium heat until steaming and the chocolate has melted. Whisk to dissolve the cocoa. \n STEP 2 \n Pour into a mug, then add the cream to float on top. Grate over a little more chocolate to serve.",
      rating: [3, 5, 0, 2, 2],
    });
    this.menu.insert({
      id: "5",
      name: "chocolate cake",
      description: "with cream",
      price: "2.50",
      category: "cake",
      available: "yes",
      ingredients: "4 large eggs , 1 1/2 tsp vanilla extract , 1/2 orange zested , 265g self-raising flour , 200g golden caster sugar , 200g unsalted butter , 2 tbsp cocoa powder , 1 tsp baking powder , 2 tbsp milk",
      recipe: "STEP 1 \n Heat the oven to 160C/fan 140C/gas 3. Butter and line a 20cm round cake tin (7.5cm deep). \n STEP 2 \nPut 200g chopped dark chocolate in a medium pan with 200g butter. \nSTEP 3 \nMix 1 tbsp instant coffee granules into 125ml cold water and pour into the pan. \nSTEP 4 \nWarm through over a low heat just until everything is melted – don’t overheat. Or melt in the microwave for about 5 minutes, stirring halfway through. \nSTEP 5 \nMix 85g self-raising flour, 85g plain flour, ¼ tsp bicarbonate of soda, 200g light muscovado sugar, 200g golden caster sugar and 25g cocoa powder, and squash out any lumps.\nSTEP 6 \nBeat 3 medium eggs with 75ml buttermilk. \nSTEP 7 \nPour the melted chocolate mixture and the egg mixture into the flour mixture and stir everything to a smooth, quite runny consistency. \nSTEP 8 \nPour this into the tin and bake for 1hr 25 – 1hr 30 mins. If you push a skewer into the centre it should come out clean and the top should feel firm STEP 9 \nLeave to cool in the tin (don’t worry if it dips slightly), then turn out onto a wire rack to cool completely. Cut the cold cake horizontally into three. \nSTEP 10 \nTo make the ganache, put 200g chopped dark chocolate in a bowl. Pour 300ml double cream into a pan, add 2 tbsp golden caster sugar and heat until it is about to boil. \nSTEP 11 \nTake off the heat and pour it over the chocolate. Stir until the chocolate has melted and the mixture is smooth. Cool until it is a little thicker but still pourable. \nSTEP 12 \nSandwich the layers together with just a little of the ganache. Pour the rest over the cake letting it fall down the sides and smooth over any gaps with a palette knife. \nSTEP 13 \nDecorate with 50g grated chocolate or 100g chocolate curls. The cake keeps moist and gooey for 3-4 days. ",
      rating: [3, 2, 5, 1],
    });
    this.menu.insert({
      id: "6",
      name: "soup",
      description: "ask for soups available today",
      price: "2.00",
      category: "snack",
      available: "yes",
      ingredients: "2 tsp cumin seeds , pinch chilli flakes , 2 tbsp olive oil , 600g carrots , 140g split red lentils , 1l hot vegetable stock , 125ml milk",
      recipe: "STEP 1 \nPour the stock into a pan and add the chicken breast, ginger and garlic. Bring to the boil, then reduce the heat, partly cover and simmer for 20 mins, until the chicken is tender.\n STEP 2 \nPut the chicken on a board and shred into bite-size pieces using a couple of forks. Return the chicken to the stock with the noodles, sweetcorn, mushrooms, spring onion and soy sauce. Simmer for 3-4 mins until the noodles are tender.\n STEP 3 \nLadle into two bowls and scatter over the remaining spring onion, mint or basil leaves and chilli, if using. Serve with extra soy sauce.",
      rating: [0, 3, 1, 1, 6],
    });
    this.menu.insert({
      id: "7",
      name: "pizza",
      description: "ham and pineapple or four cheese",
      price: "5.00",
      category: "main",
      available: "yes",
      ingredients: "2 tbsp olive oil , 1 small onion , 1 fat garlic clove , 2 x 400g cans chopped tomatoes , 3 tbsp tomato purée , 1 bay leaf , 2 tbsp dried oregano , 2 tsp brown sugar , 1 small bunch basil",
      recipe: "STEP 1 \nMake the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.\n STEP 2 \nMake the sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.\n STEP 3 \nRoll out the dough: if you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.\n STEP 4 \nTop and bake: heat the oven to 240C/220C fan/gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. Repeat step for remaining pizza.",
      rating: [0, 0, 0, 2, 1],
    });
    this.menu.insert({
      id: "8",
      name: "baked potato",
      description: "with cheese, coleslaw, beans or tuna",
      price: "4.50",
      category: "main",
      available: "yes",
      ingredients: "4 baking potatoes , ½ tbsp sunflower oil",
      recipe: "STEP 1 \nScrub the potatoes, then pat dry with kitchen paper. Transfer to a plate, drizzle over the oil and rub it into the skins using your hands so the potatoes are well-coated. Season with salt and pepper – the salt will help the skins crisp up.\n STEP 2 \nArrange the potatoes in a single layer in an air fryer basket. Set the air fryer to 200C and cook for 40-50 mins, or until a sharp knife goes through the potatoes easily. Check the potatoes after 20 mins – if they seem to be browning too quickly on one side, turn them over using tongs, then check again after another 20 mins to ensure they're cooked through. When ready, the skin should be crisp and the inside tender and fluffy. Split and serve immediately with the toppings of your choice.",
      rating: [4, 4, 4, 5, 3],
    });
    this.menu.insert({
      id: "9",
      name: "apple pie",
      description: "with cream or custard",
      price: "3.50",
      category: "pudding",
      available: "yes",
      ingredients: "1kg Bramley apples , 140g golden caster sugar , ½ tsp cinnamon , 3 tbsp flour , 225g butter, room temperature , 50g golden caster sugar , 2 eggs , 350g plain flour , softly whipped cream",
      recipe: "STEP 1 \n Put a layer of paper towels on a large baking sheet. Quarter, core, peel and slice the apples about 5mm thick and lay evenly on the baking sheet. Put paper towels on top and set aside while you make and chill the pastry.\n STEP 2 \nFor the pastry, beat the butter and sugar in a large bowl until just mixed. Break in a whole egg and a yolk (keep the white for glazing later). Beat together for just under 1 min – it will look a bit like scrambled egg. Now work in the flour with a wooden spoon, a third at a time, until it’s beginning to clump up, then finish gathering it together with your hands. Gently work the dough into a ball, wrap in cling film, and chill for 45 mins. Now mix the 140g/5oz sugar, the cinnamon and flour for the filling in a bowl that is large enough to take the apples later.\n STEP 3 \nAfter the pastry has chilled, heat the oven to 190C/fan 170C/gas 5. Lightly beat the egg white with a fork. Cut off a third of the pastry and keep it wrapped while you roll out the rest, and use this to line a pie tin – 20-22cm round and 4cm deep – leaving a slight overhang. Roll the remaining third to a circle about 28cm in diameter. Pat the apples dry with kitchen paper, and tip them into the bowl with the cinnamon-sugar mix. Give a quick mix with your hands and immediately pile high into the pastry-lined tin.\n STEP 4 \nBrush a little water around the pastry rim and lay the pastry lid over the apples pressing the edges together to seal. Trim the edge with a sharp knife and make 5 little slashes on top of the lid for the steam to escape. (Can be frozen at this stage.) Brush it all with the egg white and sprinkle with caster sugar. Bake for 40-45 mins, until golden, then remove and let it sit for 5-10 mins. Sprinkle with more sugar and serve while still warm from the oven with softly whipped cream.",
      rating: [4, 3, 3, 4, 2],
    });
    this.menu.insert({
      id: "10",
      name: "cheesecake",
      description: "with cream",
      price: "3.00",
      category: "pudding",
      available: "yes",
      ingredients: "110g digestive biscuits , 50g butter , 25g light brown soft sugar , 350g mascarpone , 75g caster sugar , 1 lemon , 2-3 lemons",
      recipe: "STEP 1 \nCrush the digestive biscuits in a food bag with a rolling pin or in the food processor. Melt the butter in a saucepan, take off heat and stir in the brown sugar and biscuit crumbs.\n STEP 2 \nLine the base of a 20cm loose bottomed cake tin with baking parchment. Press the biscuit into the bottom of the tin and chill in the fridge while making the topping.\n STEP 3 \nBeat together the mascarpone, caster sugar, lemon zest and juice, until smooth and creamy. Spread over the base and chill for a couple of hours.",
      rating: [5, 5, 5, 5, 3],
    });
    this.menu.insert({
      id: "11",
      name: "fish and chips",
      description: "locally caught ",
      price: "6.50",
      category: "main",
      available: "yes",
      ingredients: "50g plain flour , 50g cornflour , 1 tsp baking powder , turmeric , 75ml lager beer , 75ml sparkling water , 1 litre sunflower oil , 400g fillet sustainable cod , 750g potatoes , 2 tbsp plain flour , 2 tbsp sunflower oil",
      recipe: "STEP 1 \n Heat oven to 220C/fan 200C/gas 7. Put a pan of water on to boil, then cook the lasagne sheets for about 5 mins until softened, but not cooked through. Rinse in cold water, then drizzle with a little oil to stop them sticking together. \n STEP 2 \n Meanwhile, heat the oil in a large frying pan, then fry the onion. After 3 mins, add the courgettes and garlic and continue to fry until the courgette has softened and turned bright green. Stir in 2/3 of both the ricotta and the cheddar, then season to taste. Heat the tomato sauce in the microwave for 2 mins on High until hot. \n STEP 3 \n In a large baking dish, layer up the lasagne, starting with half the courgette mix, then pasta, then tomato sauce. Repeat, top with blobs of the remaining ricotta, then scatter with the rest of the cheddar. Bake on the top shelf for about 10 mins until the pasta is tender and the cheese is golden.",
      rating: [5],
    });
    this.menu.insert({
      id: "12",
      name: "lasagne",
      description: "with chips or garlic bread",
      price: "6.50",
      category: "main",
      available: "yes",
      ingredients: "9 dried lasagne sheets , 1 tbsp sunflower oil , 1 onion , 700g courgette , 2 garlic cloves , 250g tub ricotta , 50g cheddar , 350g jar tomato sauce",
      recipe: "STEP 1 \n Heat oven to 220C/fan 200C/gas 7. Put a pan of water on to boil, then cook the lasagne sheets for about 5 mins until softened, but not cooked through. Rinse in cold water, then drizzle with a little oil to stop them sticking together.\n STEP 2 \nMeanwhile, heat the oil in a large frying pan, then fry the onion. After 3 mins, add the courgettes and garlic and continue to fry until the courgette has softened and turned bright green. Stir in 2/3 of both the ricotta and the cheddar, then season to taste. Heat the tomato sauce in the microwave for 2 mins on High until hot.\n STEP 3 \nIn a large baking dish, layer up the lasagne, starting with half the courgette mix, then pasta, then tomato sauce. Repeat, top with blobs of the remaining ricotta, then scatter with the rest of the cheddar. Bake on the top shelf for about 10 mins until the pasta is tender and the cheese is golden.",
      rating: [3, 2, 1, 5, 2],
    });
    this.menu.insert({
      id: "13",
      name: "ice cream",
      description: "various flavours",
      price: "2.50",
      category: "pudding",
      available: "yes",
      ingredients: "200g dark chocolate , 500ml double cream , 340g can sweetened condensed milk , 1 tsp vanilla extract , 3 tbsp organic cocoa powder , 50g milk chocolate chips , sea salt flakes",
      recipe: "STEP 1 \n Melt the chocolate in a heatproof bowl set over a pan of just-simmering water, ensuring the bowl doesn’t touch the water, or do this in the microwave in 20-second bursts until smooth and glossy. Leave to cool slightly. Pour the cream, condensed milk and vanilla into a second bowl and beat for 3 mins using an electric whisk until slightly thickened and the beaters leave a trail in the mixture when lifted across the bowl. Be careful not to overwhip, as you don’t want the mixture to be too stiff – as soon as the beaters leave a trail, it’s ready.\n STEP 2 \nGently fold the melted chocolate and cocoa powder into the cream mixture until thoroughly combined, ensuring the spatula is reaching the bottom of the bowl so all the chocolate gets mixed in. Fold in most of the chocolate chips, reserving a small handful. Scrape the mixture into a 1-litre freezerproof container, then scatter over the reserved chocolate chips. Cover and freeze for at least 6 hrs until firm but scoopable. Will keep frozen for up to a month. To serve, scoop the ice cream into chilled bowls or ice cream cones and sprinkle with a pinch of sea salt, if you like.",
      rating: [3, 2, 5, 4, 2],
    });
    this.menu.insert({
      id: "14",
      name: "coffee",
      description: "freshly ground",
      price: "1.50",
      category: "drinks",
      available: "yes",
      ingredients: "3 tbsp instant coffee , 2 tbsp sugar , 400-500ml milk",
      recipe: "STEP 1 \nMake a 200ml cup of black coffee following pack instructions, then allow the coffee to go completely cold. Pour into a blender with the milk along with 2 or 3 handfuls of ice and maple syrup, if using, then blend until smooth and foamy.\n STEP \n2Pour into a chilled tall glass and serve.",
      rating: [1, 2, 1, 1, 2, 1],
    });
    this.menu.insert({
      id: "15",
      name: "tea",
      description: "a range of varieties",
      price: "1",
      category: "drinks",
      available: "yes",
      ingredients: "3 heaped tsp ground turmeric , 1 tbsp fresh grated ginger , 1 small orange , honey",
      recipe: "STEP 1 \n Heat the milk in a saucepan over a very low heat. Empty the contents of the tea bags into the pan, then add the cracked cardamom pods, cinnamon stick, nutmeg and cloves. \n STEP 2 \nSweeten with light brown soft sugar to taste (chai tea should be sweet, but use less if you like), then leave to infuse, but not boil, for 10 mins. Strain into mugs and enjoy.",
      rating: [3],
    });
    this.menu.insert({
      id: "16",
      name: "pasta",
      description: "with a tomato and garlic sauce",
      price: "5.50",
      category: "main",
      available: "yes",
      ingredients: "1 tbsp olive oil , 1 large onion , 2 garlic cloves , 1 tsp chilli powder , 400g can chopped tomatoes , 300g short pasta such as fusilli or farfalle",
      recipe: "STEP 1 \nHeat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone.\n STEP 2 \nHeat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.\nSTEP 3 \nHeat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.",
      rating: [3, 3, 5, 4, 5],
    });
    this.menu.insert({
      id: "17",
      name: "chips",
      description: "with ketchup or mayonnaise",
      price: "3",
      category: "side",
      available: "yes",
      ingredients: "750g Desirée potato , groundnut oil , sea salt and freshly ground black pepper",
      recipe: "STEP 1 \nHeat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone.\n STEP 2 \nHeat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.\n STEP 3 \nHeat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.",
      rating: [3, 3, 2, 4, 2],
    });
    this.menu.insert({
      id: "18",
      name: "sparkling mineral water",
      description: "locally sourced",
      price: "1.5",
      category: "drinks",
      available: "yes",
      ingredients: "carbonator",
      recipe: "N/A",
      rating: [3, 3, 4, 1, 1, 2],
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
  // supposed to update ratings
  updateRating(id, name, description, price, _id, category, available, ingredients, recipe, rating, callback) {
    this.menu.update({ _id: _id },
      {
        $set: {
          id: id,
          name: name,
          description: description,
          price: price,
          _id: _id,
          category: category,
          available: available,
          ingredients: ingredients,
          recipe: recipe,
          rating: rating,

        }

      },
      {},
      function (err, numReplaced) {
        console.log(numReplaced + "updated");
      });
    this.menu.find({}).exec(function (err, docs) { console.log(docs); });
  }
}


module.exports = Menu;

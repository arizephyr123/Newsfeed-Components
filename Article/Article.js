/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Cats Take Over The Sandbox',
    date: 'Jul 1st, 2019',
    firstParagraph: `Proident reprehenderit sunt nulla enim dolore adipisicing sit est dolor cillum exercitation ut ullamco aute. Excepteur ex Lorem laboris dolore eu voluptate nisi aliqua ut fugiat quis. Ullamco nisi Lorem id duis in sunt irure sit ullamco. Fugiat nulla in est esse ad reprehenderit aliquip.`,

    secondParagraph: `Ullamco cillum velit non est cillum nostrud anim laborum. Ullamco do labore irure eiusmod sint consectetur duis in dolore sunt qui eiusmod eiusmod adipisicing. Deserunt magna qui adipisicing sit nulla occaecat deserunt consequat ut duis minim cupidatat occaecat enim. Proident do in laborum consectetur amet et fugiat elit Lorem proident. Veniam sunt incididunt nisi aute culpa irure tempor irure nostrud quis ipsum. Voluptate occaecat qui aute quis eiusmod est nostrud et et labore. Et aliquip laborum sit dolor veniam duis ea.`,

    thirdParagraph: `Sit sunt et consequat et sit adipisicing aliqua dolor. Pariatur non adipisicing et nisi qui ipsum cillum voluptate dolor duis. Deserunt ut voluptate ipsum est occaecat sint sint qui duis occaecat adipisicing adipisicing. Tempor consequat sint labore minim tempor nisi aliquip exercitation. In fugiat eiusmod cupidatat sunt eu occaecat culpa commodo sint. Fugiat anim ad nostrud eu sit adipisicing nostrud. Non laborum minim aliqua ut.`
  },
  {
    title: 'Take Your Pet To Work Day Goes Awry',
    date: 'Apr 1st, 2019',
    firstParagraph: `Velit esse consequat quis fugiat id tempor dolor cillum. In ex nostrud aute laborum fugiat minim labore anim. Exercitation proident occaecat in nostrud anim est sunt sunt qui laboris nostrud incididunt sint dolore. Duis ex incididunt aliqua ipsum non duis ipsum nostrud nostrud labore consequat dolore. Enim magna velit cupidatat culpa laborum aute mollit. Laborum aliqua fugiat ex duis aute incididunt cupidatat.`,

    secondParagraph: `Velit ipsum adipisicing esse Lorem non laboris aute eu excepteur tempor qui deserunt ullamco nisi. Anim consequat magna irure laboris. Occaecat do occaecat sit cillum magna do nostrud deserunt amet Lorem. Officia qui nisi eiusmod occaecat minim ad. Nisi commodo aliqua duis commodo sunt. Nulla magna incididunt sint dolor adipisicing cupidatat. Eiusmod non occaecat est sunt magna.`,

    thirdParagraph: `Quis ut dolore laborum fugiat deserunt laborum qui velit exercitation voluptate. Dolore ea irure ipsum cillum. Eiusmod fugiat officia incididunt elit ut fugiat adipisicing officia enim dolore in incididunt Lorem. Sit est sunt deserunt aute aliquip nisi ad id pariatur dolore consectetur. Veniam laboris cupidatat enim consectetur irure officia duis amet ad eiusmod nisi fugiat do. Est reprehenderit tempor exercitation nostrud velit eu aliquip consequat. Eiusmod do consectetur velit deserunt ullamco ex ea in id nostrud amet non deserunt.`
  },
  {
    title: 'Wasps Swarm Lambda School Headquarters',
    date: 'Oct 1st, 2019',
    firstParagraph: `Consectetur et et labore ea amet voluptate ea deserunt tempor non pariatur fugiat aute. Eu consectetur labore culpa anim mollit ex. Pariatur officia ipsum magna ex sint magna minim excepteur laboris. Aliquip ipsum eiusmod ea incididunt culpa et laborum ea duis.`,

    secondParagraph: `Adipisicing consequat consequat culpa excepteur deserunt. Aliquip ea sint dolor excepteur quis culpa non officia laborum non. Ad voluptate adipisicing officia dolore est tempor esse. Lorem fugiat Lorem ut pariatur. Elit cillum sunt mollit nulla veniam veniam eiusmod mollit culpa enim nisi. Lorem proident exercitation culpa eu magna sit nostrud id.`,

    thirdParagraph: `Excepteur culpa nisi et eiusmod eiusmod nisi labore duis quis ullamco qui anim. Ex commodo sunt elit do officia. Nostrud pariatur duis commodo sunt fugiat laborum est tempor velit. Dolore commodo ad commodo sint sint velit.`
  },
  {
    title: "I Can't Think of Another Title",
    date: 'Jan 1st, 2019',
    firstParagraph: `Proident sunt aliqua ad in voluptate duis ex. Do Lorem sit dolore dolore in. Ad eu quis voluptate minim aute sunt nulla velit nostrud veniam quis sunt. Do veniam incididunt dolore officia do reprehenderit mollit. Enim veniam magna fugiat incididunt sit consectetur ut.`,

    secondParagraph: `Reprehenderit velit mollit reprehenderit minim velit cupidatat adipisicing qui nulla enim eiusmod laborum. Dolore reprehenderit id ad aliqua consectetur occaecat aliqua cupidatat elit. Eiusmod aliqua qui ad excepteur ad fugiat incididunt ullamco reprehenderit amet. Nisi nostrud quis id occaecat elit nostrud ad ut pariatur quis minim ex sit et. Labore non adipisicing nisi deserunt ea nisi. Dolor qui et tempor nisi. Velit officia dolore veniam qui commodo labore ad consectetur adipisicing deserunt.`,

    thirdParagraph: `Nostrud eu sunt aliqua dolor esse nisi reprehenderit mollit elit reprehenderit qui exercitation adipisicing. Qui do sunt incididunt mollit esse ex commodo. Excepteur ullamco laboris eu quis. Do aliqua excepteur ex ut eu tempor deserunt mollit eu. Laborum ex ea do fugiat. Voluptate consectetur elit in magna ut fugiat enim ea sit do.`
  },
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const article = document.querySelector('div.articles');
console.log(article);

function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph){
  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class='expandButton'></span>
  // </div>  

  //creating elements to match html
  const articleDiv = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const paragraphDiv = document.createElement('div');
  const articlePar1 = document.createElement('p');
  const articlePar2 = document.createElement('p');
  const articlePar3 = document.createElement('p');
  const articleBtn = document.createElement('span');

  //structure of elements to match html
  articleDiv.appendChild(articleTitle);
  articleDiv.appendChild(articleDate);
  articleDiv.appendChild(articleBtn);
  articleDiv.appendChild(paragraphDiv);
  paragraphDiv.appendChild(articlePar1);
  paragraphDiv.appendChild(articlePar2);
  paragraphDiv.appendChild(articlePar3);


  //adding classes to match CSS
  articleDiv.classList.add('article');
  articleDate.classList.add('date');
  articleBtn.classList.add('expandButton');
  //paragraphDiv.classList.add('');

  //set text content
  //title, date, par1, par2, par3
  articleTitle.textContent = title;
  articleDate.textContent = date;
  articlePar1.textContent = firstParagraph;
  articlePar2.textContent = secondParagraph;
  articlePar3.textContent = thirdParagraph;
  articleBtn.textContent = '\u26ab';



  // Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  // buttonPanel.addEventListener('click', (e) => {
  //   console.log('button clicked', e.target)
  //   // 1. toggle hide-btn on BOTH buttons
  //   buttonOpen.classList.toggle('hide-btn');
  //   buttonClose.classList.toggle('hide-btn');
    
  //   // 2. Change visibility of the content w/ 'toggle-on'
  //   panelContent.classList.toggle('toggle-on');
  // })

  articleBtn.addEventListener('click',()=> {
    console.log("button clicked");
    articleDiv.classList.toggle('article-open')
  })



return articleDiv

}

// panelData.forEach(data =>{
//   accordion.appendChild(createPanel(data.title, data.content))
// })

data.forEach(data => {
  article.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph));
}) 
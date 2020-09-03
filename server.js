const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Magic Cards';
app.locals.cards = [
  {
    title: "Gaea's Protector",
    castingCost: '4G',
    color: 'Green',
    type: 'Creature',
    subtype: ['Elemental', 'Warrior'],
    textBox: "Gaea's Protector must be blacked if able. \"Fallen Phyrexians were transmuted into elementals by Gaea long ago, but Yavimaya's other inhabitants still regard them with unease",
  },
  {
    title: 'Krosan Druid',
    castingCost: '2G',
    color: 'Green',
    type: 'Creature',
    subtype: ['Centaur', 'Druid'],
    textBox: 'Kicker 4G (You may pay an additional 4G as you cast this spell.) When Krosan Druid enters the battlefield, if it was kicked, you gain 10 life. "Druids endure disaster as seeds endure winter. Now Krosa blooms one more."',
  },
  {
    title: 'Stinging Shot',
    castingCost: 'G',
    color: 'Green',
    type: 'Instant',
    subtype: [],
    textBox: 'Put three -1/-1 counters on target creature with flying. Cycling 2 (2, Discard this card: Draw a card.) "Initiates must train to resist the natural toxins they use as weapons.',
  },
];

app.get('/api/v1/cards', (request, response) => {
  const cards = app.locals.cards;

  response.json({ cards });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(({ userInfo }) => {
  const entries = Object.entries(userInfo);
  entries.forEach(([key, value]) => {
    const p = document.createElement('p');
    p.innerText = `${key}: ${value}`;
    document.body.append(p);
  });
}, (error) => {
  console.error(error);
});

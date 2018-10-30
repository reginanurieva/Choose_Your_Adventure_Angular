import { ChooseOwnAdventurePage } from './app.po';

describe('choose-own-adventure App', () => {
  let page: ChooseOwnAdventurePage;

  beforeEach(() => {
    page = new ChooseOwnAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ng4MathPage } from './app.po';

describe('ng4-math App', () => {
  let page: Ng4MathPage;

  beforeEach(() => {
    page = new Ng4MathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

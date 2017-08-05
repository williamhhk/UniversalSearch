import { UniversalSearchPage } from './app.po';

describe('universal-search App', () => {
  let page: UniversalSearchPage;

  beforeEach(() => {
    page = new UniversalSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

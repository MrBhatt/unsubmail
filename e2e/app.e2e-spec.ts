import { UnsubmailPage } from './app.po';

describe('unsubmail App', function() {
  let page: UnsubmailPage;

  beforeEach(() => {
    page = new UnsubmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
